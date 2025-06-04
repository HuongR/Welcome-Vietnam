const mongoose = require('mongoose');

const CheckinSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  landmark: { type: mongoose.Schema.Types.ObjectId, ref: 'Landmark' },
  description: String,
  imageLink: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Checkin', CheckinSchema);
