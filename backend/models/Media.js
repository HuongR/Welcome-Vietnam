const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ['image', 'video', 'vr', 'podcast'] },
  link: String,
  associatedEntity: {
    entityType: { type: String, enum: ['Landmark', 'Festival', 'FoodSpecialty'] },
    entityId: mongoose.Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('Media', MediaSchema);
