import DiscountCoupon from '../../models/discountCoupon.js';

export const addCoupon = async (req, res) => {
  try {
    const coupon = await DiscountCoupon.create(req.body);

    res.status(201).json({
      message: 'Coupon created successfully',
      coupon
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCoupons = async (req, res) => {
  try {
    const coupons = await DiscountCoupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const validateCoupon = async (req, res) => {
  try {
    const code = req.params.code.toUpperCase();

    const coupon = await DiscountCoupon.findOne({
      code,
      isActive: true,
      expiryDate: { $gt: new Date() }
    });

    if (!coupon) {
      return res.status(404).json({
        message: 'Coupon is invalid, inactive, or expired'
      });
    }

    res.status(200).json({
      message: 'Coupon is valid',
      discountPercentage: coupon.discountPercentage
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCoupon = async (req, res) => {
  try {
    const coupon = await DiscountCoupon.findByIdAndDelete(req.params.id);

    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }

    res.status(200).json({ message: 'Coupon deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};