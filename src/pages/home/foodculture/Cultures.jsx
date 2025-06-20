import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cultureData } from "./cultureData.mjs";
import Header from "../../../components/layout/Header";
import ReturnHome from "../../../components/ui/ReturnHome";

const Cultures = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [cultures, setCultures] = useState([]);

  const regions = [
    { id: "all", name: "Tất cả" },
    { id: "north", name: "Miền Bắc" },
    { id: "central", name: "Miền Trung" },
    { id: "south", name: "Miền Nam" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Array.isArray(cultureData)) {
      setCultures(cultureData);
    } else {
      console.error("Culture data is not in the correct format");
      setCultures([]);
    }
  }, []);

  const filteredCultures = cultures.filter((culture) => {
    if (selectedRegion === "all") return true;
    return culture.region === selectedRegion;
  });

  if (cultures.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <ReturnHome />
      <div className="max-w-7xl mx-auto px-4 py-16 mt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
            Văn Hóa Việt Nam
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Khám phá vẻ đẹp tinh hoa văn hóa dân tộc Việt Nam qua những nét đặc
            trưng về phong tục, lễ hội và di sản văn hóa phi vật thể độc đáo.
          </p>
        </div>

        {/* Region Filter - Removed sticky positioning */}
        <div className="py-4 mb-12">
          <div className="flex justify-center gap-4">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 
                ${
                  selectedRegion === region.id
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-red-200"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Zigzag Layout with Updated Hover Effects */}
        <div className="mt-16 space-y-32">
          {filteredCultures.map((culture, index) => (
            <motion.div
              key={culture.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Image Section with Subtle Hover Scale */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={culture.image}
                    alt={culture.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-4 py-2 bg-white/90 backdrop-blur-sm text-red-600 
                    rounded-full text-sm font-medium shadow-lg"
                    >
                      {regions.find((r) => r.id === culture.region)?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  {culture.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {culture.description}
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-600">
                    Đặc điểm văn hóa:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {culture.culturalFeatures?.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <svg
                          className="w-5 h-5 text-red-500 mt-1 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cultures;
