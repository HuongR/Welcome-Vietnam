const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/User');
const Province = require('../models/Province');
const Landmark = require('../models/Landmark');
const FoodSpecialty = require('../models/FoodSpecialty');
const Festival = require('../models/Festival');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log('✅ Connected to MongoDB Atlas for Seeding!');

  // Xóa dữ liệu cũ
  await User.deleteMany();
  await Province.deleteMany();
  await Landmark.deleteMany();
  await FoodSpecialty.deleteMany();
  await Festival.deleteMany();

  // Thêm User mẫu
  const user = await User.create({ username: 'testuser', passwordHash: 'hashed123', email: 'test@vn.com' });

  // Thêm Province mẫu
  const province = await Province.create({ name: 'Hà Nội', description: 'Thủ đô Việt Nam' });

  // Thêm Landmark mẫu
  const landmark = await Landmark.create({ name: 'Văn Miếu', description: 'Di tích lịch sử', province: province._id });

  // Thêm FoodSpecialty mẫu
  await FoodSpecialty.create({ name: 'Phở Hà Nội', recipe: 'Bí quyết nấu phở', imageLink: '', province: province._id });

  // Thêm Festival mẫu
  await Festival.create({ name: 'Lễ hội Đền Hùng', description: 'Lễ hội lớn', date: new Date(), province: province._id });

  console.log('🌱 Seeding completed!');
  mongoose.connection.close();
})
.catch(err => console.error('❌ Seeding error:', err));
