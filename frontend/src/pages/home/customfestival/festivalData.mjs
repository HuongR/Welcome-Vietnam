const festivalData = [
  {
    id: 1,
    title: "Hội Lim",
    description: "Lễ hội dân gian truyền thống nổi tiếng của tỉnh Bắc Ninh, nơi lưu giữ những làn điệu quan họ đặc sắc",
    details: `Hội Lim là một trong những lễ hội lớn và độc đáo nhất miền Bắc:
    - Diễn ra tại đồi Lim, Bắc Ninh
    - Trình diễn quan họ trên thuyền và trên đồi
    - Các trò chơi dân gian truyền thống
    - Giao lưu văn nghệ quan họ
    - Triển lãm văn hóa dân gian`,
    image: "/images/festivals/hoilim.jpg",
    region: "north",
    date: "Ngày 13 tháng Giêng âm lịch"
  },
  {
    id: 2,
    title: "Lễ hội Chọi Trâu",
    description: "Lễ hội đặc sắc của Đồ Sơn, Hải Phòng với những trận đấu trâu kịch tính và đầy màu sắc văn hóa dân gian",
    details: `Các hoạt động chính trong lễ hội:
    - Lễ rước trâu long trọng
    - Các trận đấu trâu gay cấn
    - Nghi lễ cúng tế truyền thống
    - Hội thi trâu đẹp
    - Các trò chơi dân gian`,
    image: "/images/festivals/choitrau.jpg",
    region: "north",
    date: "Mùng 9 tháng 8 âm lịch"
  },
  {
    id: 3,
    title: "Lễ hội Đền Hùng",
    description: "Lễ hội lớn mang tầm quốc gia, tưởng nhớ các Vua Hùng có công dựng nước và giữ nước",
    details: `Nghi thức và hoạt động chính:
    - Dâng hương tưởng niệm các Vua Hùng
    - Rước kiệu truyền thống
    - Các hoạt động văn hóa, nghệ thuật
    - Trình diễn võ thuật cổ truyền
    - Hội thi gói bánh chưng, bánh giầy`,
    image: "/images/festivals/denhung.jpg",
    region: "north",
    date: "Mùng 10 tháng 3 âm lịch"
  },
  {
    id: 4,
    title: "Lễ hội Ok Om Bok",
    description: "Lễ hội truyền thống của đồng bào Khmer Nam Bộ, cầu mong mưa thuận gió hòa và mùa màng bội thu",
    details: `Nét đặc sắc của lễ hội:
    - Lễ cúng trăng linh thiêng
    - Đua ghe ngo truyền thống
    - Thả đèn trời cầu may
    - Biểu diễn văn nghệ dân tộc
    - Các trò chơi dân gian đặc sắc`,
    image: "/images/festivals/okom.jpg",
    region: "south",
    date: "Rằm tháng 10 âm lịch"
  },
  {
    id: 5,
    title: "Lễ hội Ka Tê",
    description: "Lễ hội truyền thống của người Chăm, tưởng nhớ các vị thần và tổ tiên đã khuất",
    details: `Các nghi thức chính:
    - Lễ rước trang trọng
    - Múa truyền thống Chăm
    - Biểu diễn nhạc cụ dân tộc
    - Trình diễn trang phục truyền thống
    - Các nghi lễ tâm linh đặc trưng`,
    image: "/images/festivals/kate.jpg",
    region: "central",
    date: "Tháng 7 Calendar Chăm"
  },
  {
    id: 6,
    title: "Lễ hội Đua Voi",
    description: "Lễ hội độc đáo của vùng Tây Nguyên, thể hiện nét văn hóa đặc sắc của người dân nơi đây",
    details: `Chương trình lễ hội:
    - Lễ cúng bản làng
    - Đua voi kịch tính
    - Hội thi voi đẹp
    - Biểu diễn cồng chiêng
    - Các trò chơi dân gian Tây Nguyên`,
    image: "/images/festivals/duavoi.jpg",
    region: "central",
    date: "Tháng 3 dương lịch"
  },
  {
    id: 7,
    title: "Lễ hội Cầu Ngư",
    description: "Lễ hội của ngư dân miền Trung, cầu mong biển cả bình an và đánh bắt được nhiều tôm cá",
    details: `Các hoạt động trong lễ hội:
    - Lễ tế cá Ông
    - Rước thuyền ra biển
    - Thi thuyền truyền thống
    - Hát bả trạo
    - Các trò chơi dân gian`,
    image: "/images/festivals/caungu.jpg",
    region: "central",
    date: "Tháng Giêng - tháng 3 âm lịch"
  },
  {
    id: 8,
    title: "Lễ hội Gióng",
    description: "Lễ hội tưởng nhớ Thánh Gióng - người anh hùng đã cứu nước trong truyền thuyết",
    details: `Diễn biến lễ hội:
    - Rước kiệu long trọng
    - Tái hiện trận đánh giặc
    - Múa võ cổ truyền
    - Trình diễn nghệ thuật
    - Các trò chơi dân gian`,
    image: "/images/festivals/giong.jpg",
    region: "north",
    date: "Mùng 9 tháng 4 âm lịch"
  },
  {
    id: 9,
    title: "Lễ hội Chùa Hương",
    description: "Lễ hội kéo dài nhất Việt Nam, thu hút hàng triệu người hành hương về với đất Phật",
    details: `Hoạt động chính:
    - Đi thuyền ngắm cảnh suối Yến
    - Chiêm bái các hang động
    - Leo núi khám phá
    - Lễ Phật cầu may
    - Thưởng ngoạn cảnh đẹp thiên nhiên`,
    image: "/images/festivals/chuahuong.jpg",
    region: "north",
    date: "Từ mùng 6 tháng Giêng đến tháng 3 âm lịch"
  }
];

export default festivalData;