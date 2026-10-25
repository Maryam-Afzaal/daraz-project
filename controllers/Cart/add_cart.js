import ShoppingCart from '../../models/shoppingCart.js';

export const addToCart = async (req, res) => {
  try {
    const { user, product, quantity = 1 } = req.body;

    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        message: 'Quantity must be a positive integer'
      });
    }

    let cart = await ShoppingCart.findOne({ user });

    if (!cart) {
      cart = await ShoppingCart.create({
        user,
        items: [{ product, quantity }]
      });
    } else {
      const item = cart.items.find(
        item => item.product.toString() === product
      );

      if (item) {
        item.quantity += quantity;
      } else {
        cart.items.push({ product, quantity });
      }

      await cart.save();
    }

    await cart.populate('items.product', 'name price image');

    res.status(201).json({
      message: 'Product added to cart',
      cart
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await ShoppingCart.findOne({
      user: req.params.userId
    }).populate('items.product', 'name price image');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const cart = await ShoppingCart.findOne({
      user: req.params.userId
    });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      item => item.product.toString() !== req.params.productId
    );

    await cart.save();

    res.status(200).json({
      message: 'Product removed from cart',
      cart
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};