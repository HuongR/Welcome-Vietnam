const mongoose = require('mongoose');

const ProvinceSchema = new mongoose.Schema({
  name: String,
  description: String,
  mapLink: String,
  videoLink: String
});

module.exports = mongoose.model('Province', ProvinceSchema);
