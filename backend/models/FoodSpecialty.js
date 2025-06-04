const mongoose = require('mongoose');

const FoodSpecialtySchema = new mongoose.Schema({
  name: String,
  recipe: String,
  imageLink: String,
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' }
});

module.exports = mongoose.model('FoodSpecialty', FoodSpecialtySchema);
