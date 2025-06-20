const customsData = [
  {
    id: 1,
    title: "Tết Nguyên Đán",
    description: "Tết Nguyên Đán là dịp lễ quan trọng nhất trong năm của người Việt Nam, đánh dấu sự khởi đầu của một năm mới theo âm lịch.",
    details: `Tết Nguyên Đán bao gồm nhiều phong tục tập quán đặc sắc:
    - Sắm sửa và trang hoàng nhà cửa
    - Gói bánh chưng, bánh tét
    - Mâm ngũ quả trên bàn thờ
    - Xông đất đầu năm
    - Mừng tuổi, lì xì cho trẻ em
    - Chúc Tết người thân và hàng xóm`,
    image: "/images/customs/tet.jpg",
    region: "all",
    date: "Tháng Giêng Âm lịch"
  },
  {
    id: 2,
    title: "Ngày giỗ tổ tiên",
    description: "Ngày giỗ là dịp để con cháu tưởng nhớ, tri ân những người đã khuất và sum họp gia đình.",
    details: `Các nghi thức trong ngày giỗ:
    - Lập bàn thờ trang nghiêm
    - Chuẩn bị mâm cơm cúng
    - Thắp hương tưởng nhớ
    - Họp mặt gia đình
    - Chia sẻ kỷ niệm về người đã khuất`,
    image: "/images/customs/gioto.jpg",
    region: "all",
    date: "Theo ngày giỗ từng gia đình"
  },
  {
    id: 4,
    title: "Xin chữ đầu xuân",
    description: "Phong tục xin chữ đầu năm là nét đẹp văn hóa truyền thống, thể hiện khát vọng học tập, thành đạt.",
    details: `Ý nghĩa của việc xin chữ:
    - Cầu mong may mắn, tài lộc
    - Thể hiện sự tôn trọng chữ nghĩa
    - Gìn giữ nét đẹp văn hóa dân tộc
    - Dịp gặp gỡ các nhà nho, văn nhân`,
    image: "/images/customs/xinchu.jpg",
    region: "north",
    date: "Đầu năm âm lịch"
  },
  {
    id: 5,
    title: "Cúng ông Công ông Táo",
    description: "Lễ cúng tiễn ông Táo về trời báo cáo việc nhà với Ngọc Hoàng vào ngày 23 tháng Chạp âm lịch.",
    details: `Các nghi thức chính:
    - Chuẩn bị mâm cúng đặc biệt
    - Dọn dẹp bếp núc sạch sẽ
    - Thả cá chép để đưa ông Táo về trời
    - Đốt vàng mã, tiễn ông Táo`,
    image: "/images/customs/tetcongtao.jpg",
    region: "all",
    date: "23 tháng Chạp âm lịch"
  },
  {
    id: 6,
    title: "Tảo mộ",
    description: "Phong tục tảo mộ thể hiện lòng hiếu thảo, tưởng nhớ người đã khuất và dọn dẹp phần mộ tổ tiên.",
    details: `Các hoạt động trong ngày tảo mộ:
    - Dọn dẹp, cắt cỏ quanh mộ
    - Thắp hương tưởng niệm
    - Cúng lễ tại mộ
    - Sum họp gia đình`,
    image: "/images/customs/taomo.jpg",
    region: "all",
    date: "Tiết Thanh Minh (tháng 3 âm lịch)"
  },
  {
    id: 7,
    title: "Ăn trầu",
    description: "Văn hóa ăn trầu là nét đẹp truyền thống, biểu tượng của sự giao tiếp và thân thiện trong cộng đồng.",
    details: `Ý nghĩa của phong tục ăn trầu:
    - Thể hiện sự hiếu khách
    - Tạo không khí thân mật
    - Là món quà mời trong đám cưới
    - Biểu tượng của tình yêu đôi lứa`,
    image: "/images/customs/antrau.jpg",
    region: "north",
    date: "Quanh năm"
  },
  {
    id: 8,
    title: "Giao thừa",
    description: "Thời khắc thiêng liêng chuyển giao giữa năm cũ và năm mới, mang nhiều ý nghĩa tâm linh sâu sắc.",
    details: `Các hoạt động trong đêm giao thừa:
    - Cúng rước ông bà
    - Đốt pháo hoa (tại các điểm được phép)
    - Xông đất đầu năm
    - Chúc Tết người thân
    - Hái lộc đầu xuân`,
    image: "/images/customs/giaothua.jpg",
    region: "all",
    date: "Đêm 30 Tết"
  },
  {
    id: 9,
    title: "Đám cưới truyền thống",
    description: "Nghi lễ cưới hỏi truyền thống thể hiện nét đẹp văn hóa, phong tục của người Việt.",
    details: `Các nghi thức chính:
    - Lễ dạm ngõ
    - Lễ ăn hỏi
    - Lễ đón dâu
    - Lễ ra mắt họ hàng
    - Lễ lại mặt`,
    image: "/images/customs/damcuoi.jpg",
    region: "all",
    date: "Tránh tháng 7 âm lịch"
  },
  {
    id: 10,
    title: "Tết Trung Thu",
    description: "Tết Trung Thu là dịp lễ dành cho thiếu nhi, diễn ra vào rằm tháng 8 âm lịch.",
    details: `Các hoạt động trong Tết Trung Thu:
    - Rước đèn trung thu
    - Múa lân sư rồng
    - Phá cỗ trung thu
    - Ngắm trăng rằm
    - Tặng bánh trung thu`,
    image: "/images/customs/trungthu.jpg",
    region: "all",
    date: "Rằm tháng 8 âm lịch"
  }
];

export default customsData;