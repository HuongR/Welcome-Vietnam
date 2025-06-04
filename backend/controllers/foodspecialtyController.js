
const FoodSpecialty = require('../models/FoodSpecialty');

exports.createFoodSpecialty = async (req, res) => {
    try {
        const item = new FoodSpecialty(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllFoodSpecialtys = async (req, res) => {
    try {
        const items = await FoodSpecialty.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFoodSpecialtyById = async (req, res) => {
    try {
        const item = await FoodSpecialty.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'FoodSpecialty not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFoodSpecialtyById = async (req, res) => {
    try {
        const updated = await FoodSpecialty.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'FoodSpecialty not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFoodSpecialtyById = async (req, res) => {
    try {
        const deleted = await FoodSpecialty.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'FoodSpecialty not found' });
        res.json({ message: 'FoodSpecialty deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
