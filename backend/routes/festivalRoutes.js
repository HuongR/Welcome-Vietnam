
const express = require('express');
const router = express.Router();
const festivalController = require('../controllers/festivalController');

router.post('/', festivalController.createFestival);
router.get('/', festivalController.getAllFestivals);
router.get('/:id', festivalController.getFestivalById);
router.put('/:id', festivalController.updateFestivalById);
router.delete('/:id', festivalController.deleteFestivalById);

module.exports = router;
