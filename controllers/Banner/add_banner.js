import PromoBanner from '../../models/promoBanner.js';

export const addBanner = async (req, res) => {
  try {
    const banner = await PromoBanner.create(req.body);

    res.status(201).json({
      message: 'Banner created successfully',
      banner
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBanners = async (req, res) => {
  try {
    const now = new Date();

    const banners = await PromoBanner.find({
      isActive: true,
      startDate: { $lte: now },
      $or: [
        { endDate: null },
        { endDate: { $gt: now } }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBanner = async (req, res) => {
  try {
    const banner = await PromoBanner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!banner) {
      return res.status(404).json({ message: 'Banner not found' });
    }

    res.status(200).json({
      message: 'Banner updated successfully',
      banner
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBanner = async (req, res) => {
  try {
    const banner = await PromoBanner.findByIdAndDelete(req.params.id);

    if (!banner) {
      return res.status(404).json({ message: 'Banner not found' });
    }

    res.status(200).json({ message: 'Banner deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};