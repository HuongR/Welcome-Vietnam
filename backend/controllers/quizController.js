
const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
    try {
        const item = new Quiz(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllQuizs = async (req, res) => {
    try {
        const items = await Quiz.find().populate('user');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getQuizById = async (req, res) => {
    try {
        const item = await Quiz.findById(req.params.id).populate('user');
        if (!item) return res.status(404).json({ message: 'Quiz not found' });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateQuizById = async (req, res) => {
    try {
        const updated = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Quiz not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteQuizById = async (req, res) => {
    try {
        const deleted = await Quiz.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Quiz not found' });
        res.json({ message: 'Quiz deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
