
const express = require('express');
const router = express.Router();
const badgeController = require('../controllers/badgeController');

router.post('/', badgeController.createBadge);
router.get('/', badgeController.getAllBadges);
router.get('/:id', badgeController.getBadgeById);
router.put('/:id', badgeController.updateBadgeById);
router.delete('/:id', badgeController.deleteBadgeById);

module.exports = router;
