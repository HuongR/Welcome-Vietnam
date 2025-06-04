
const Province = require('../models/Province');

exports.createProvince = async (req, res) => {
    try {
        const item = new Province(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllProvinces = async (req, res) => {
    try {
        const items = await Province.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProvinceById = async (req, res) => {
    try {
        const item = await Province.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Province not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProvinceById = async (req, res) => {
    try {
        const updated = await Province.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Province not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteProvinceById = async (req, res) => {
    try {
        const deleted = await Province.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Province not found' });
        res.json({ message: 'Province deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
