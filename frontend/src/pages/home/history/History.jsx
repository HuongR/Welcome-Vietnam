import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const historyData = [
  {
    id: 1,
    title: 'Thời kỳ Hùng Vương (2879 TCN – 258 TCN)',
    content: `Giai đoạn dựng nước đầu tiên của dân tộc Việt, truyền thuyết Lạc Long Quân – Âu Cơ, các vua Hùng lập nước Văn Lang, đặt nền móng cho văn hóa và tín ngưỡng Việt Nam.`,
  },
  {
    id: 2,
    title: 'Thời Bắc thuộc (111 TCN – 938)',
    content: `Trung Quốc đô hộ Việt Nam qua các triều đại như Hán, Đường... Các cuộc khởi nghĩa nổi bật: Hai Bà Trưng, Bà Triệu, Lý Bí, Khúc Thừa Dụ.`,
  },
  {
    id: 3,
    title: 'Thời kỳ độc lập phong kiến (938 – 1858)',
    content: `Từ chiến thắng Bạch Đằng của Ngô Quyền đến các triều đại: Đinh, Tiền Lê, Lý, Trần, Hồ, Lê sơ, Mạc, Lê trung hưng, Tây Sơn, Nguyễn.`,
  },
  {
    id: 4,
    title: 'Thời kỳ Pháp thuộc (1858 – 1945)',
    content: `Thực dân Pháp xâm lược Việt Nam, phong trào Cần Vương, Đông Kinh Nghĩa Thục, Việt Nam Quốc Dân Đảng, và sự ra đời của Đảng Cộng sản Việt Nam năm 1930.`,
  },
  {
    id: 5,
    title: 'Cách mạng Tháng Tám & Kháng chiến chống Pháp (1945 – 1954)',
    content: `Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 2/9/1945. Kháng chiến chống Pháp thắng lợi với chiến dịch Điện Biên Phủ.`,
  },
  {
    id: 6,
    title: 'Kháng chiến chống Mỹ & Thống nhất đất nước (1954 – 1975)',
    content: `Đấu tranh giành lại miền Nam, đỉnh cao là chiến dịch Hồ Chí Minh lịch sử, giải phóng Sài Gòn 30/4/1975.`,
  },
  {
    id: 7,
    title: 'Việt Nam thời kỳ đổi mới & phát triển (1975 – nay)',
    content: `Xây dựng đất nước sau chiến tranh, đổi mới từ 1986, hội nhập kinh tế quốc tế, trở thành thành viên ASEAN, WTO...`,
  },
];

const History = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(historyData[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-red-100 to-red-300 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-red-800 drop-shadow-lg text-center mb-12">
            Lịch Sử Việt Nam
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Danh sách mốc lịch sử */}
            <div className="lg:w-1/3">
              <ul className="space-y-4">
                {historyData.map((period) => (
                  <li key={period.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-semibold ${
                        selectedPeriod.id === period.id
                          ? 'bg-red-700 text-white shadow-md'
                          : 'bg-white text-red-800 hover:bg-red-200'
                      }`}
                      onClick={() => setSelectedPeriod(period)}
                    >
                      {period.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nội dung chi tiết */}
            <div className="lg:w-2/3 bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                {selectedPeriod.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedPeriod.content}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;
