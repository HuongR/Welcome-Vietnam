
const Language = require('../models/Language');

exports.createLanguage = async (req, res) => {
    try {
        const item = new Language(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllLanguages = async (req, res) => {
    try {
        const items = await Language.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLanguageById = async (req, res) => {
    try {
        const item = await Language.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Language not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateLanguageById = async (req, res) => {
    try {
        const updated = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Language not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteLanguageById = async (req, res) => {
    try {
        const deleted = await Language.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Language not found' });
        res.json({ message: 'Language deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
