const mongoose = require('mongoose');

const LandmarkSchema = new mongoose.Schema({
  name: String,
  description: String,
  mediaLink: String,
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' }
});

module.exports = mongoose.model('Landmark', LandmarkSchema);
