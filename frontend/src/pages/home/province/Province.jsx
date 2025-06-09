import React, { useState, useEffect } from "react";
import provinceData from "./provinceInfom.mjs";
import { FaSearch, FaTimes } from "react-icons/fa";
import Header from "../../../components/layout/Header";

export default function Province() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const { provinceInfo, regions } = provinceData;

  // Set Hanoi as default on component mount
  useEffect(() => {
    const hanoi = provinceInfo.find(p => p.name === "Hà Nội");
    setSelectedProvince(hanoi || provinceInfo[0]);
  }, []);

  const filteredProvinces = provinceInfo.filter((province) => {
    const matchesSearch = province.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "all" || province.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner Section */}
      <div className="relative h-[400px]">
        <img
          src="/images/banner/province-banner.jpg"
          alt="Province Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Khám phá các Tỉnh thành Việt Nam
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Tìm hiểu về lịch sử, văn hóa, địa danh nổi bật và đặc sản của từng
            tỉnh thành trên khắp Việt Nam.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tỉnh thành..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="all">Tất cả vùng miền</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Province List and Details Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Province List */}
          <div className="lg:col-span-1 space-y-4">
            {filteredProvinces.map((province) => (
              <div
                key={province.id}
                onClick={() => setSelectedProvince(province)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedProvince?.id === province.id
                    ? "bg-red-500 text-white"
                    : "bg-white hover:bg-red-50"
                }`}
              >
                <h3 className="font-semibold">{province.name}</h3>
                <span className="text-sm opacity-80">{province.region}</span>
              </div>
            ))}
          </div>

          {/* Province Details */}
          <div className="lg:col-span-2">
            {selectedProvince && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={selectedProvince.image}
                  alt={selectedProvince.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-red-600">
                      {selectedProvince.name}
                    </h2>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {selectedProvince.region}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{selectedProvince.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Thông tin chung</h3>
                      <p>Dân số: {selectedProvince.details.population}</p>
                      <p>Diện tích: {selectedProvince.details.area}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Điểm du lịch nổi bật
                      </h3>
                      <ul className="list-disc pl-5">
                        {selectedProvince.details.attractions.map((attraction) => (
                          <li key={attraction}>{attraction}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-lg mb-2">
                        Đặc sản nổi tiếng
                      </h3>
                      <ul className="list-disc pl-5 grid md:grid-cols-2 gap-4">
                        {selectedProvince.details.specialties.map((specialty) => (
                          <li key={specialty}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}