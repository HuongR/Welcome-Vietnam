const regions = [
  "Miền Bắc",
  "Miền Trung",
  "Miền Nam",
  "Tây Bắc",
  "Tây Nguyên",
  "Đông Nam Bộ",
  "Đồng bằng sông Cửu Long"
];

const provinceInfo = [
  {
    id: 1,
    name: "Hà Nội",
    region: "Miền Bắc",
    image: "/images/tinhthanh/hanoi.jpg",
    description: "Thủ đô nghìn năm văn hiến, trung tâm chính trị - văn hóa của cả nước.",
    details: {
      population: "8.1 triệu người",
      area: "3,359 km²",
      attractions: [
        "Hồ Hoàn Kiếm",
        "Văn Miếu - Quốc Tử Giám",
        "Phố cổ Hà Nội",
        "Chùa Một Cột"
      ],
      specialties: [
        "Phở Hà Nội",
        "Bún chả",
        "Cà phê trứng",
        "Chả cá Lã Vọng"
      ]
    }
  },
  {
    id: 2,
    name: "Thừa Thiên Huế",
    region: "Miền Trung",
    image: "/images/tinhthanh/thuathienhue.jpg",
    description: "Nơi lưu giữ hồn cố đô, đậm đà bản sắc văn hóa, cảnh sắc nên thơ.",
    details: {
      population: "1.2 triệu người",
      area: "5,033 km²",
      attractions: [
        "Đại Nội Huế",
        "Chùa Thiên Mụ",
        "Lăng Tự Đức",
        "Cầu Tràng Tiền"
      ],
      specialties: [
        "Bún bò Huế",
        "Cơm hến",
        "Chè Huế",
        "Bánh bèo"
      ]
    }
  },
  {
    id: 3,
    name: "Thành phố Hồ Chí Minh",
    region: "Miền Nam",
    image: "/images/tinhthanh/tphcm.jpg",
    description: "Thành phố năng động nhất cả nước, trung tâm kinh tế, văn hóa phía Nam.",
    details: {
      population: "9 triệu người",
      area: "2,061 km²",
      attractions: [
        "Phố đi bộ Nguyễn Huệ",
        "Nhà thờ Đức Bà",
        "Chợ Bến Thành",
        "Dinh Độc Lập"
      ],
      specialties: [
        "Cơm tấm",
        "Bánh tráng trộn",
        "Hủ tiếu Nam Vang",
        "Bánh xèo"
      ]
    }
  },
  {
    id: 4,
    name: "Đà Nẵng",
    region: "Miền Trung",
    image: "/images/tinhthanh/danang.jpg",
    description: "Thành phố đáng sống nhất Việt Nam, với cảnh quan thiên nhiên tuyệt đẹp.",
    details: {
      population: "1.3 triệu người",
      area: "1,285 km²",
      attractions: [
        "Cầu Rồng",
        "Bà Nà Hills",
        "Bãi biển Mỹ Khê",
        "Ngũ Hành Sơn"
      ],
      specialties: [
        "Mì Quảng",
        "Bánh tráng cuốn thịt heo",
        "Gỏi cá Nam Ô",
        "Bánh xèo"
      ]
    }
  },
  {
    id: 5,
    name: "Hạ Long",
    region: "Miền Bắc",
    image: "/images/tinhthanh/halong.jpg",
    description: "Thành phố của di sản thiên nhiên thế giới Vịnh Hạ Long.",
    details: {
      population: "300 nghìn người",
      area: "1,553 km²",
      attractions: [
        "Vịnh Hạ Long",
        "Đảo Tuần Châu",
        "Hang Sửng Sốt",
        "Bãi Cháy"
      ],
      specialties: [
        "Chả mực",
        "Sá sùng",
        "Hải sản tươi sống",
        "Gật gù Hạ Long"
      ]
    }
  },
  {
    id: 6,
    name: "Đà Lạt",
    region: "Tây Nguyên",
    image: "/images/tinhthanh/dalat.jpg",
    description: "Thành phố ngàn hoa, thiên đường du lịch với khí hậu mát mẻ quanh năm.",
    details: {
      population: "400 nghìn người",
      area: "394 km²",
      attractions: [
        "Hồ Xuân Hương",
        "Thung lũng Tình Yêu",
        "Ga Đà Lạt",
        "Dinh Bảo Đại"
      ],
      specialties: [
        "Bánh tráng nướng",
        "Artichoke",
        "Strawberry",
        "Cà phê"
      ]
    }
  }
];

export default { provinceInfo, regions };