const Custom = require('../models/Custom');

exports.createCustom = async (req, res) => {
    try {
        const custom = new Custom(req.body);
        await custom.save();
        res.status(201).json(custom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCustoms = async (req, res) => {
    try {
        const customs = await Custom.find();
        res.json(customs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCustomById = async (req, res) => {
    try {
        const custom = await Custom.findById(req.params.id);
        if (!custom) return res.status(404).json({ message: 'Custom not found' });
        res.json(custom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomById = async (req, res) => {
    try {
        const updated = await Custom.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Custom not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCustomById = async (req, res) => {
    try {
        const deleted = await Custom.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Custom not found' });
        res.json({ message: 'Custom deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
