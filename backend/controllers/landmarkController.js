
const Landmark = require('../models/Landmark');

exports.createLandmark = async (req, res) => {
    try {
        const item = new Landmark(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllLandmarks = async (req, res) => {
    try {
        const items = await Landmark.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLandmarkById = async (req, res) => {
    try {
        const item = await Landmark.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Landmark not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateLandmarkById = async (req, res) => {
    try {
        const updated = await Landmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Landmark not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteLandmarkById = async (req, res) => {
    try {
        const deleted = await Landmark.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Landmark not found' });
        res.json({ message: 'Landmark deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
