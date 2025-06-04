
const Media = require('../models/Media');

exports.createMedia = async (req, res) => {
    try {
        const item = new Media(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllMedias = async (req, res) => {
    try {
        const items = await Media.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMediaById = async (req, res) => {
    try {
        const item = await Media.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Media not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMediaById = async (req, res) => {
    try {
        const updated = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Media not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMediaById = async (req, res) => {
    try {
        const deleted = await Media.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Media not found' });
        res.json({ message: 'Media deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
