
const express = require('express');
const router = express.Router();
const foodSpecialtyController = require('../controllers/foodSpecialtyController');

router.post('/', foodSpecialtyController.createFoodSpecialty);
router.get('/', foodSpecialtyController.getAllFoodSpecialtys);
router.get('/:id', foodSpecialtyController.getFoodSpecialtyById);
router.put('/:id', foodSpecialtyController.updateFoodSpecialtyById);
router.delete('/:id', foodSpecialtyController.deleteFoodSpecialtyById);

module.exports = router;
