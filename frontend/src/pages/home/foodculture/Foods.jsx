import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { foodData } from "./foodData.mjs";
import Header from "../../../components/layout/Header";
import ReturnHome from "../../../components/ui/ReturnHome";

const Foods = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const regions = [
    { id: "all", name: "Tất cả" },
    { id: "north", name: "Miền Bắc" },
    { id: "central", name: "Miền Trung" },
    { id: "south", name: "Miền Nam" },
  ];

  const filteredFoods = foodData?.filter((food) => {
    if (selectedRegion === "all") return true;
    return food.region === selectedRegion;
  }) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!foodData || foodData.length === 0) {
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
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4 mt-10">
            Ẩm Thực Việt Nam
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá hương vị đặc trưng của ẩm thực Việt Nam qua những món ăn
            truyền thống từ ba miền Bắc - Trung - Nam.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {regions.map((region) => (
            <motion.button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 
                ${
                  selectedRegion === region.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
            >
              {region.name}
            </motion.button>
          ))}
        </div>

        {/* Foods Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredFoods.map((food) => (
            <motion.div
              key={food.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                transition-all duration-300 border border-green-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                    group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-green-600 
                    rounded-full text-sm font-medium shadow-lg">
                    {regions.find((r) => r.id === food.region)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 
                  group-hover:text-green-600 transition-colors">
                  {food.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {food.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {food.ingredients?.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-600 
                        rounded-full text-sm border border-green-100"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Foods;