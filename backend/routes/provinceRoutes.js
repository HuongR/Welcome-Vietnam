
const express = require('express');
const router = express.Router();
const provinceController = require('../controllers/provinceController');

router.post('/', provinceController.createProvince);
router.get('/', provinceController.getAllProvinces);
router.get('/:id', provinceController.getProvinceById);
router.put('/:id', provinceController.updateProvinceById);
router.delete('/:id', provinceController.deleteProvinceById);

module.exports = router;
