
const express = require('express');
const router = express.Router();
const landmarkController = require('../controllers/landmarkController');

router.post('/', landmarkController.createLandmark);
router.get('/', landmarkController.getAllLandmarks);
router.get('/:id', landmarkController.getLandmarkById);
router.put('/:id', landmarkController.updateLandmarkById);
router.delete('/:id', landmarkController.deleteLandmarkById);

module.exports = router;
