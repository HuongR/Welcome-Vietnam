import React, { useState } from "react";
import customsData from "./customData.mjs";

const Customs = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const regions = [
    { id: "all", name: "Tất cả" },
    { id: "north", name: "Miền Bắc" },
    { id: "central", name: "Miền Trung" },
    { id: "south", name: "Miền Nam" },
  ];

  const filteredCustoms = customsData.filter((custom) => {
    if (selectedRegion === "all") return true;
    return custom.region === selectedRegion;
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Phong Tục Tập Quán Việt Nam
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá những nét đẹp văn hóa truyền thống và phong tục tập quán đặc
            trưng của từng vùng miền trên khắp đất nước Việt Nam.
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
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Customs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCustoms.map((custom) => (
            <div
              key={custom.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-red-500"
            >
              <div className="relative h-64">
                <img
                  src={custom.image}
                  alt={custom.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 bg-red-600 text-white rounded-full text-sm">
                    {regions.find((r) => r.id === custom.region)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {custom.title}
                </h3>
                <p className="text-gray-600">{custom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customs;