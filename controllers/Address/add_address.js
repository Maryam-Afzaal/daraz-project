import UserAddress from '../../models/userAddress.js';

// Add address
export const addAddress = async (req, res) => {
  try {
    const address = await UserAddress.create(req.body);

    res.status(201).json({
      message: 'Address added successfully',
      address
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Get all addresses
export const getAddresses = async (req, res) => {
  try {
    const addresses = await UserAddress.find();

    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete address
export const deleteAddress = async (req, res) => {
  try {
    const address = await UserAddress.findByIdAndDelete(
      req.params.id
    );

    if (!address) {
      return res.status(404).json({
        message: 'Address not found'
      });
    }

    res.status(200).json({
      message: 'Address deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};