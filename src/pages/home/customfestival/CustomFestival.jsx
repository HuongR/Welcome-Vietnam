import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import customsData from "./customData.mjs";
import festivalData from "./festivalData.mjs";

const Customs = () => {
  const navigate = useNavigate();
  const [showCustomsAnimation, setShowCustomsAnimation] = useState(false);
  const [showFestivalsAnimation, setShowFestivalsAnimation] = useState(false);
  const [randomCustoms, setRandomCustoms] = useState([]);
  const [randomFestivals, setRandomFestivals] = useState([]);

  // Function to get random items
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Update random items every 15 seconds
  useEffect(() => {
    const updateRandomItems = () => {
      setRandomCustoms(getRandomItems(customsData, 9));
      setRandomFestivals(getRandomItems(festivalData, 9));
    };

    // Initial load
    updateRandomItems();

    // Set up interval
    const interval = setInterval(updateRandomItems, 15000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  // Scroll animation logic
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-red-500 uppercase tracking-widest font-semibold mb-2">
              Văn hoá Việt
            </p>
            <h2 className="text-3xl text-yellow-300 md:text-4xl font-extrabold mb-4">
              Phong tục tập quán đặc trưng
            </h2>
            <p className="text-gray-600 max-w-xl">
              Những nét sinh hoạt văn hóa truyền thống, phản ánh chiều sâu đời
              sống tinh thần và tập quán cộng đồng người Việt.
            </p>
          </div>
          <button
            onClick={() => navigate("/customs")}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg 
  overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
              Khám phá thêm
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      <div
        id="customs-section"
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-16 max-w-7xl mx-auto ${
          showCustomsAnimation ? "animate-fade-in" : "opacity-0 translate-y-5"
        }`}
      >
        {randomCustoms.map((item) => (
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

      {/* PHẦN LỄ HỘI */}
      <div className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => navigate("/festivals")}
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg 
  overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                Khám phá thêm
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </button>
            <div className="text-right">
              <p className="text-yellow-400 uppercase tracking-widest font-semibold mb-2">
                Văn hoá lễ hội
              </p>
              <h2 className="text-3xl text-red-500 md:text-4xl font-extrabold mb-4">
                Lễ hội Việt Nam – Sắc màu và bản sắc
              </h2>
              <p className="text-gray-600 max-w-xl ml-auto">
                Khám phá không khí sôi động, màu sắc rực rỡ và giá trị tâm linh
                của các lễ hội truyền thống khắp mọi miền đất nước.
              </p>
            </div>
          </div>
        </div>

        <div
          id="festivals-section"
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-16 max-w-7xl mx-auto ${
            showFestivalsAnimation
              ? "animate-fade-in"
              : "opacity-0 translate-y-5"
          }`}
        >
          {randomFestivals.map((item) => (
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
