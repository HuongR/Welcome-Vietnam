import React, { useState } from "react";
import foodData from "./foodData.mjs";

const Foods = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const regions = [
    { id: "all", name: "Tất cả" },
    { id: "north", name: "Miền Bắc" },
    { id: "central", name: "Miền Trung" },
    { id: "south", name: "Miền Nam" },
  ];

  const filteredFoods = foodData.filter((food) => {
    if (selectedRegion === "all") return true;
    return food.region === selectedRegion;
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
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
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedRegion === region.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Foods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-green-500"
            >
              <div className="relative h-64">
                <img
                  src={food.image}
                  alt={food.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 bg-green-600 text-white rounded-full text-sm">
                    {regions.find((r) => r.id === food.region)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {food.title}
                </h3>
                <p className="text-gray-600 mb-2">{food.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {food.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;