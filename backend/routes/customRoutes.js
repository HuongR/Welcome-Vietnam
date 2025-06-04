
const express = require('express');
const router = express.Router();
const customController = require('../controllers/customController');

router.post('/', customController.createCustom);
router.get('/', customController.getAllCustoms);
router.get('/:id', customController.getCustomById);
router.put('/:id', customController.updateCustomById);
router.delete('/:id', customController.deleteCustomById);

module.exports = router;
