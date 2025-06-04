
const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.post('/', mediaController.createMedia);
router.get('/', mediaController.getAllMedias);
router.get('/:id', mediaController.getMediaById);
router.put('/:id', mediaController.updateMediaById);
router.delete('/:id', mediaController.deleteMediaById);

module.exports = router;
