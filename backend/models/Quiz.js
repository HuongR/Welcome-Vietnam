const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  question: String,
  correctAnswer: String
});

module.exports = mongoose.model('Quiz', QuizSchema);
