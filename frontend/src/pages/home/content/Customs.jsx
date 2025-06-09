import React, { useState, useEffect } from "react";

const customsData = [
  { id: 1, title: "Tết Nguyên Đán", image: "/public/images/customs/tet.jpg" },
  {
    id: 2,
    title: "Ngày giỗ tổ tiên",
    image: "/public/images/customs/gioto.jpg",
  },
  {
    id: 4,
    title: "Xin chữ đầu xuân",
    image: "/public/images/customs/xinchu.jpg",
  },
  {
    id: 5,
    title: "Cúng ông Công ông Táo",
    image: "/public/images/customs/tetcongtao.jpg",
  },
  { id: 6, title: "Tảo mộ", image: "/public/images/customs/taomo.jpg" },
  { id: 7, title: "Ăn trầu", image: "/public/images/customs/antrau.jpg" },
  { id: 8, title: "Giao thừa", image: "/public/images/customs/giaothua.jpg" },
  {
    id: 9,
    title: "Đám cưới truyền thống",
    image: "/public/images/customs/damcuoi.jpg",
  },
  {
    id: 10,
    title: "Tết trung thu",
    image: "/public/images/customs/trungthu.jpg",
  },
];

const festivalData = [
  { id: 1, title: "Hội Lim", image: "/public/images/festivals/hoilim.jpg" },
  {
    id: 2,
    title: "Lễ hội Chọi Trâu",
    image: "/public/images/festivals/choitrau.jpg",
  },
  {
    id: 3,
    title: "Lễ hội Đền Hùng",
    image: "/public/images/festivals/denhung.jpg",
  },
  {
    id: 4,
    title: "Lễ hội Ok Om Bok",
    image: "/public/images/festivals/okom.jpg",
  },
  { id: 5, title: "Lễ hội Ka Tê", image: "/public/images/festivals/kate.jpg" },
  {
    id: 6,
    title: "Lễ hội Đua Voi",
    image: "/public/images/festivals/duavoi.jpg",
  },
  {
    id: 7,
    title: "Lễ hội Cầu Ngư",
    image: "/public/images/festivals/caungu.jpg",
  },
  { id: 8, title: "Lễ hội Gióng", image: "/public/images/festivals/giong.jpg" },
  {
    id: 9,
    title: "Lễ hội Chùa Hương",
    image: "/public/images/festivals/chuahuong.jpg",
  },
];

const Customs = () => {
  const [showCustomsAnimation, setShowCustomsAnimation] = useState(false);
  const [showFestivalsAnimation, setShowFestivalsAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const customsSection = document.getElementById("customs-section");
      const festivalsSection = document.getElementById("festivals-section");
      if (
        customsSection &&
        window.scrollY + window.innerHeight > customsSection.offsetTop + 100
      ) {
        setShowCustomsAnimation(true);
      }
      if (
        festivalsSection &&
        window.scrollY + window.innerHeight > festivalsSection.offsetTop + 100
      ) {
        setShowFestivalsAnimation(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* PHẦN PHONG TỤC */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-red-500  uppercase tracking-widest font-semibold mb-2">
          Văn hoá Việt
        </p>
        <h2 className="text-3xl text-yellow-300 md:text-4xl font-extrabold mb-4">
          Phong tục tập quán đặc trưng
        </h2>
        <p className="text-gray-600 max-w-xl">
          Những nét sinh hoạt văn hóa truyền thống, phản ánh chiều sâu đời sống
          tinh thần và tập quán cộng đồng người Việt.
        </p>
      </div>

      <div
        id="customs-section"
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-16 max-w-7xl mx-auto ${
          showCustomsAnimation ? "animate-fade-in" : "opacity-0 translate-y-5"
        }`}
      >
        {customsData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden border-4 border-red-500 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* PHẦN LỄ HỘI (đã chỉnh giống phong tục) */}
      <div className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16 text-right">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold mb-2">
            Văn hoá lễ hội
          </p>
          <h2 className="text-3xl text-red-500 md:text-4xl font-extrabold mb-4">
            Lễ hội Việt Nam – Sắc màu và bản sắc
          </h2>
          <p className="text-gray-600 max-w-xl text-right ml-auto">
            Khám phá không khí sôi động, màu sắc rực rỡ và giá trị tâm linh của
            các lễ hội truyền thống khắp mọi miền đất nước.
          </p>
        </div>

        <div
          id="festivals-section"
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-16 max-w-7xl mx-auto ${
            showFestivalsAnimation
              ? "animate-fade-in"
              : "opacity-0 translate-y-5"
          }`}
        >
          {festivalData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border-4 border-yellow-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customs;
