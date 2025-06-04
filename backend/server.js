const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas!'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Import Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/provinces', require('./routes/provinceRoutes'));
app.use('/api/landmarks', require('./routes/landmarkRoutes'));
app.use('/api/festivals', require('./routes/festivalRoutes'));
app.use('/api/foodSpecialties', require('./routes/foodSpecialtyRoutes'));
app.use('/api/customs', require('./routes/customRoutes'));
app.use('/api/checkins', require('./routes/checkinRoutes'));
app.use('/api/feedbacks', require('./routes/feedbackRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));
app.use('/api/quizzes', require('./routes/quizRoutes'));
app.use('/api/badges', require('./routes/badgeRoutes'));
app.use('/api/languages', require('./routes/languageRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
