const mongoose = require('mongoose');

const CustomSchema = new mongoose.Schema({
  name: String,
  description: String,
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' }
});

module.exports = mongoose.model('Custom', CustomSchema);
