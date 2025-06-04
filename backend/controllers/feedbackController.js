
const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
    try {
        const item = new Feedback(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllFeedbacks = async (req, res) => {
    try {
        const items = await Feedback.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFeedbackById = async (req, res) => {
    try {
        const item = await Feedback.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Feedback not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFeedbackById = async (req, res) => {
    try {
        const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Feedback not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFeedbackById = async (req, res) => {
    try {
        const deleted = await Feedback.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Feedback not found' });
        res.json({ message: 'Feedback deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
