const Badge = require('../models/Badge');

// Create a new badge
exports.createBadge = async (req, res) => {
    try {
        const badge = new Badge(req.body);
        await badge.save();
        res.status(201).json(badge);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all badges
exports.getAllBadges = async (req, res) => {
    try {
        const badges = await Badge.find().populate('user');
        res.json(badges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get badge by ID
exports.getBadgeById = async (req, res) => {
    try {
        const badge = await Badge.findById(req.params.id).populate('user');
        if (!badge) return res.status(404).json({ message: 'Badge not found' });
        res.json(badge);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update badge by ID
exports.updateBadgeById = async (req, res) => {
    try {
        const updated = await Badge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Badge not found' });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete badge by ID
exports.deleteBadgeById = async (req, res) => {
    try {
        const deleted = await Badge.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Badge not found' });
        res.json({ message: 'Badge deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
