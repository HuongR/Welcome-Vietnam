import React, { useState } from "react";
import cultureData from "./cultureData.mjs";

const Cultures = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const regions = [
    { id: "all", name: "Tất cả" },
    { id: "north", name: "Miền Bắc" },
    { id: "central", name: "Miền Trung" },
    { id: "south", name: "Miền Nam" },
  ];

  const filteredCultures = cultureData.filter((culture) => {
    if (selectedRegion === "all") return true;
    return culture.region === selectedRegion;
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Văn Hóa Ẩm Thực Việt Nam
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá nét đẹp văn hóa ẩm thực, phong cách thưởng thức và những 
            nghi thức đặc trưng trong bữa ăn của người Việt.
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
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Cultures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCultures.map((culture) => (
            <div
              key={culture.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-orange-500"
            >
              <div className="relative h-64">
                <img
                  src={culture.image}
                  alt={culture.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 bg-orange-600 text-white rounded-full text-sm">
                    {regions.find((r) => r.id === culture.region)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {culture.title}
                </h3>
                <p className="text-gray-600 mb-2">{culture.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-orange-600 mb-2">
                    Đặc điểm văn hóa:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {culture.culturalFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cultures;