
import Seller from '../../models/seller.js';

// Add seller
export const addSeller = async (req, res) => {
  try {
    const seller = await Seller.create(req.body);

    res.status(201).json({
      message: 'Seller added successfully',
      seller
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sellers
export const getSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get seller by ID
export const getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    res.status(200).json(seller);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update seller
export const updateSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    res.status(200).json({
      message: 'Seller updated successfully',
      seller
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete seller
export const deleteSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    res.status(200).json({ message: 'Seller deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
