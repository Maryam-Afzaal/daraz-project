
import mongoose from 'mongoose';

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    default: ''
  }
}, { timestamps: true });

const ProductCategory = mongoose.model(
  'ProductCategory',
  productCategorySchema
);

export default ProductCategory;
