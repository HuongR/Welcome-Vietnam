const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
  entityType: { type: String, enum: ['Province', 'Landmark', 'FoodSpecialty', 'Festival'] },
  entityId: mongoose.Schema.Types.ObjectId,
  languageCode: String,
  fieldName: String,
  translatedText: String
});

module.exports = mongoose.model('Language', LanguageSchema);
