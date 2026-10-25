import mongoose from 'mongoose';

const discountCouponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  expiryDate: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const DiscountCoupon = mongoose.model(
  'DiscountCoupon',
  discountCouponSchema
);

export default DiscountCoupon;