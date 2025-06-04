const mongoose = require('mongoose');

const FestivalSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  mediaLink: String,
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' }
});

module.exports = mongoose.model('Festival', FestivalSchema);
