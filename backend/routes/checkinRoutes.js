
const express = require('express');
const router = express.Router();
const checkinController = require('../controllers/checkinController');

router.post('/', checkinController.createCheckin);
router.get('/', checkinController.getAllCheckins);
router.get('/:id', checkinController.getCheckinById);
router.put('/:id', checkinController.updateCheckinById);
router.delete('/:id', checkinController.deleteCheckinById);

module.exports = router;
