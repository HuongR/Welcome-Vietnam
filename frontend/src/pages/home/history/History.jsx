import React, { useState, useEffect, useRef } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const historyData = [
  {
    id: 1,
    title: "Thời kỳ Hùng Vương",
    year: "2879 TCN – 258 TCN",
    images: [
      {
        src: "/images/history/hungvuong1.jpg",
        summary:
          "Truyền thuyết Lạc Long Quân – Âu Cơ. Thành lập nhà nước Văn Lang, thủ lĩnh đầu tiên là Hùng Vương thứ nhất, xây dựng hệ thống Lạc hầu, Lạc tướng, chế độ mẫu hệ trong xã hội, nền kinh tế nông nghiệp trồng lúa nước sơ khai, tín ngưỡng thờ cúng tổ tiên – Hùng Vương, dùng trống đồng làm nhạc cụ nghi lễ và tín ngưỡng, cư dân sinh sống tại lưu vực sông Hồng, hình thành truyền thống đoàn kết cộng đồng tộc người Việt.",
      },
      {
        src: "/images/history/hungvuong2.jpg",
        summary:
          "Nhà nước Văn Lang là nhà nước đầu tiên của người Việt cổ, với thủ lĩnh là các vua Hùng.",
      },
      {
        src: "/images/history/hungvuong3.jpg",
        summary:
          "Truyền thống đoàn kết cộng đồng tộc người Việt được hình thành từ thời Hùng Vương.",
      },
      {
        src: "/images/history/hungvuong4.jpg",
        summary:
          "Trống đồng Đông Sơn là biểu tượng văn hóa, tín ngưỡng của thời kỳ này.",
      },
      {
        src: "/images/history/hungvuong5.jpg",
        summary:
          "Nền kinh tế nông nghiệp trồng lúa nước sơ khai phát triển mạnh mẽ.",
      },
    ],
  },
  {
    id: 2,
    title: "Thời Bắc thuộc",
    year: "111 TCN – 938",
    images: [
      {
        src: "/images/history/bacthuoc1.jpg",
        summary:
          "Trung Quốc đô hộ qua các triều đại Hán – Đường. Khởi nghĩa Hai Bà Trưng, Bà Triệu, Lý Bí lập nước Vạn Xuân, Triệu Quang Phục chống xâm lược Lương, Mai Thúc Loan lãnh đạo khởi nghĩa quy mô lớn, Phùng Hưng nổi dậy giành độc lập, Dương Đình Nghệ giành quyền kiểm soát Tĩnh Hải quân, Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng, chấm dứt 1000 năm Bắc thuộc.",
      },
      {
        src: "/images/history/bacthuoc2.jpg",
        summary:
          "Khởi nghĩa Hai Bà Trưng năm 40 – 43 là biểu tượng của tinh thần bất khuất dân tộc.",
      },
      {
        src: "/images/history/bacthuoc3.jpg",
        summary:
          "Lý Bí lập nước Vạn Xuân năm 544, đặt nền móng cho độc lập dân tộc.",
      },
      {
        src: "/images/history/bacthuoc4.jpg",
        summary:
          "Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng, kết thúc thời kỳ Bắc thuộc.",
      },
      {
        src: "/images/history/bacthuoc5.jpg",
        summary:
          "Các cuộc khởi nghĩa liên tiếp thể hiện ý chí độc lập, tự chủ của dân tộc Việt Nam.",
      },
    ],
  },
  {
    id: 3,
    title: "Thời kỳ độc lập phong kiến",
    year: "938 – 1858",
    images: [
      {
        src: "/images/history/phongkien1.jpg",
        summary:
          "Ngô Quyền lập nhà Ngô sau chiến thắng Bạch Đằng, mở đầu thời kỳ độc lập lâu dài.",
      },
      {
        src: "/images/history/phongkien2.jpg",
        summary:
          "Lý Thái Tổ dời đô ra Thăng Long, phát triển kinh tế, văn hóa, giáo dục.",
      },
      {
        src: "/images/history/phongkien3.jpg",
        summary:
          "Trần Hưng Đạo đánh bại 3 lần quân Nguyên Mông, bảo vệ vững chắc nền độc lập.",
      },
      {
        src: "/images/history/phongkien4.jpg",
        summary:
          "Nguyễn Huệ đánh tan 20 vạn quân Thanh, củng cố nền độc lập dân tộc.",
      },
      {
        src: "/images/history/phongkien5.jpg",
        summary:
          "Gia Long lập nhà Nguyễn – triều đại phong kiến cuối cùng của Việt Nam.",
      },
    ],
  },
  {
    id: 4,
    title: "Kháng chiến chống thực dân Pháp",
    year: "1858 – 1954",
    images: [
      {
        src: "/images/history/chongphap1.jpg",
        summary:
          "Thực dân Pháp nổ súng xâm lược tại Đà Nẵng năm 1858, mở đầu gần 100 năm đô hộ.",
      },
      {
        src: "/images/history/chongphap2.jpg",
        summary:
          "Phong trào Cần Vương, khởi nghĩa Hương Khê, Bãi Sậy thể hiện tinh thần yêu nước mãnh liệt.",
      },
      {
        src: "/images/history/chongphap3.jpg",
        summary:
          "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
      },
      {
        src: "/images/history/chongphap4.jpg",
        summary:
          "Chiến dịch Điện Biên Phủ năm 1954 làm rung chuyển địa cầu, buộc Pháp phải ký Hiệp định Genève.",
      },
      {
        src: "/images/history/chongphap5.jpg",
        summary:
          "Chiến thắng Điện Biên là biểu tượng cho sức mạnh đoàn kết và ý chí độc lập dân tộc.",
      },
    ],
  },
  {
    id: 5,
    title: "Kháng chiến chống đế quốc Mỹ",
    year: "1954 – 1975",
    images: [
      {
        src: "/images/history/chongmy1.jpg",
        summary:
          "Mỹ can thiệp vào miền Nam Việt Nam, dựng chính quyền tay sai và chia cắt đất nước.",
      },
      {
        src: "/images/history/chongmy2.jpg",
        summary:
          "Chiến dịch Mậu Thân 1968 làm lung lay ý chí xâm lược của Mỹ ngay trên đất Mỹ.",
      },
      {
        src: "/images/history/chongmy3.jpg",
        summary:
          'Chiến thắng "Điện Biên Phủ trên không" năm 1972 khiến Mỹ phải ngồi vào bàn đàm phán tại Paris.',
      },
      {
        src: "/images/history/chongmy4.jpg",
        summary:
          "Chiến dịch Hồ Chí Minh lịch sử tháng 4/1975 giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
      },
      {
        src: "/images/history/chongmy5.jpg",
        summary:
          "Ngày 30/4/1975 trở thành mốc son chói lọi trong lịch sử dân tộc Việt Nam.",
      },
    ],
  },
  {
    id: 6,
    title: "Chiến tranh bảo vệ biên giới Tây Nam",
    year: "1975 – 1979",
    images: [
      {
        src: "/images/history/taynam1.jpg",
        summary:
          "Tập đoàn Pol Pot Khmer Đỏ tiến hành thảm sát người Việt, gây hấn tại biên giới Tây Nam.",
      },
      {
        src: "/images/history/taynam2.jpg",
        summary:
          "Quân tình nguyện Việt Nam tiến vào Campuchia, lật đổ chế độ diệt chủng Khmer Đỏ.",
      },
      {
        src: "/images/history/taynam3.jpg",
        summary:
          "Cuộc chiến chống Khmer Đỏ là nghĩa vụ quốc tế cao cả và chính nghĩa của Việt Nam.",
      },
    ],
  },
  {
    id: 7,
    title: "Chiến tranh biên giới phía Bắc",
    year: "1979",
    images: [
      {
        src: "/images/history/phiabac1.jpg",
        summary:
          "Ngày 17/2/1979, Trung Quốc phát động cuộc chiến tranh xâm lược toàn tuyến biên giới phía Bắc Việt Nam.",
      },
      {
        src: "/images/history/phiabac2.jpg",
        summary:
          "Quân và dân các tỉnh biên giới anh dũng chiến đấu bảo vệ từng tấc đất thiêng liêng của Tổ quốc.",
      },
      {
        src: "/images/history/phiabac3.jpg",
        summary:
          "Cuộc chiến kết thúc sau 1 tháng nhưng căng thẳng biên giới còn kéo dài hàng thập kỷ.",
      },
    ],
  },
  {
    id: 8,
    title: "Việt Nam thời kỳ đổi mới và hội nhập",
    year: "1986 – nay",
    images: [
      {
        src: "/images/history/doimoi1.jpg",
        summary:
          "Năm 1986, Đại hội VI khởi xướng công cuộc Đổi Mới, đưa Việt Nam thoát khỏi khủng hoảng kinh tế.",
      },
      {
        src: "/images/history/doimoi2.jpg",
        summary:
          "Việt Nam gia nhập ASEAN (1995), WTO (2007) và ký nhiều hiệp định thương mại tự do.",
      },
      {
        src: "/images/history/doimoi3.jpg",
        summary:
          "Đất nước đạt nhiều thành tựu về kinh tế, văn hóa, giáo dục, quốc phòng và đối ngoại.",
      },
      {
        src: "/images/history/doimoi4.jpg",
        summary:
          "Việt Nam vươn mình trở thành quốc gia năng động, hội nhập sâu rộng với thế giới.",
      },
    ],
  },
];

const History = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const didScrollToTop = useRef(false);

  // Scroll lên đầu trang khi mount lần đầu
  useEffect(() => {
    if (!didScrollToTop.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      didScrollToTop.current = true;
    }
  }, []);

  // Theo dõi scroll để highlight section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight / 2;
      const index = sectionRefs.current.findIndex(
        (ref) => ref?.offsetTop && ref.offsetTop > scrollTop
      );
      setActiveIndex(
        index === -1 ? historyData.length - 1 : Math.max(0, index - 1)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white">
      <Header />
      <div className="relative w-full h-[800px] flex items-center justify-center mb-12">
        <img
          src="/images/history/banner.jpg"
          alt="Banner lịch sử Việt Nam"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/60 rounded-b-3xl"></div>
      </div>

      <main className="pb-20 max-w-6xl mx-auto px-2 md:px-4">
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute top-0 left-[30%] transform -translate-x-1/2 w-1 h-full z-0">
            <div className="w-1 h-full bg-gradient-to-b from-red-500 via-yellow-400 to-red-500 rounded"></div>
          </div>

          {historyData.map((item, sectionIdx) => (
            <div
              key={item.id}
              ref={(el) => (sectionRefs.current[sectionIdx] = el)}
              className={`relative mb-24 grid grid-cols-10 gap-8 group transition-all duration-700 ${
                sectionIdx === activeIndex ? "timeline-fade-in" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[30%] transform -translate-x-1/2 z-10">
                <div
                  className={`w-2.5 h-2 rounded-full border-2 border-white shadow-xl transition-all duration-300 ${
                    sectionIdx === activeIndex
                      ? "bg-gradient-to-br from-red-600 via-yellow-400 to-red-400 scale-110 ring-2 ring-red-500"
                      : "bg-gray-300 opacity-60"
                  }`}
                ></div>
              </div>

              {/* Year & Title */}
              <div className="col-span-3 text-right pr-6 flex flex-col justify-center">
                <p
                  className={`text-2xl font-extrabold mb-1 transition-all duration-300 ${
                    sectionIdx === activeIndex
                      ? "text-red-600 drop-shadow-lg"
                      : "text-red-400"
                  }`}
                >
                  {item.year}
                </p>
                <p
                  className={`text-xl font-bold uppercase tracking-wide transition-all duration-300 ${
                    sectionIdx === activeIndex
                      ? "text-yellow-500 drop-shadow"
                      : "text-yellow-300"
                  }`}
                >
                  {item.title}
                </p>
              </div>

              {/* Images & Summaries */}
              <div className="col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 relative z-10">
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden shadow-lg group bg-white transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={img.src}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {img.summary.split(" ").slice(0, 25).join(" ")}
                        {img.summary.split(" ").length > 25 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <style>
        {`
          .timeline-fade-in {
            animation: timelineFadeIn 0.7s ease both;
          }
          @keyframes timelineFadeIn {
            0% { opacity: 0; transform: translateY(60px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default History;
