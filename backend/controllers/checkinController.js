const Checkin = require('../models/Checkin');

exports.createCheckin = async (req, res) => {
    try {
        const checkin = new Checkin(req.body);
        await checkin.save();
        res.status(201).json(checkin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCheckins = async (req, res) => {
    try {
        const checkins = await Checkin.find().populate('user');
        res.json(checkins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCheckinById = async (req, res) => {
    try {
        const checkin = await Checkin.findById(req.params.id).populate('user');
        if (!checkin) return res.status(404).json({ message: 'Checkin not found' });
        res.json(checkin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCheckinById = async (req, res) => {
    try {
        const updated = await Checkin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Checkin not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCheckinById = async (req, res) => {
    try {
        const deleted = await Checkin.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Checkin not found' });
        res.json({ message: 'Checkin deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
