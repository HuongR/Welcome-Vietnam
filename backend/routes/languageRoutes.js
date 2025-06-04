
const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

router.post('/', languageController.createLanguage);
router.get('/', languageController.getAllLanguages);
router.get('/:id', languageController.getLanguageById);
router.put('/:id', languageController.updateLanguageById);
router.delete('/:id', languageController.deleteLanguageById);

module.exports = router;
