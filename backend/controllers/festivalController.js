
const Festival = require('../models/Festival');

exports.createFestival = async (req, res) => {
    try {
        const item = new Festival(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllFestivals = async (req, res) => {
    try {
        const items = await Festival.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFestivalById = async (req, res) => {
    try {
        const item = await Festival.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Festival not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFestivalById = async (req, res) => {
    try {
        const updated = await Festival.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Festival not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFestivalById = async (req, res) => {
    try {
        const deleted = await Festival.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Festival not found' });
        res.json({ message: 'Festival deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
