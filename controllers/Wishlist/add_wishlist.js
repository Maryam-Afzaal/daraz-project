import Wishlist from '../../models/wishlist.js';

export const addToWishlist = async (req, res) => {
  try {
    const { user, product } = req.body;

    let wishlist = await Wishlist.findOne({ user });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        user,
        products: [product]
      });
    } else {
      if (wishlist.products.some(id => id.toString() === product)) {
        return res.status(400).json({
          message: 'Product already in wishlist'
        });
      }

      wishlist.products.push(product);
      await wishlist.save();
    }

    await wishlist.populate('products', 'name price image');

    res.status(201).json({
      message: 'Product added to wishlist',
      wishlist
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.params.userId
    }).populate('products', 'name price image');

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.params.userId
    });

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    wishlist.products = wishlist.products.filter(
      id => id.toString() !== req.params.productId
    );

    await wishlist.save();

    res.status(200).json({
      message: 'Product removed from wishlist',
      wishlist
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};