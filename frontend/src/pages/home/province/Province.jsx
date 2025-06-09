import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import provinceData from "./provinceInfo.mjs";
import Header from "../../../components/layout/Header";
import videoBg from '../../../assets/videos/province-intro.mp4';

export default function Province() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const { provinceInfo, regions } = provinceData;

  // Sort provinces alphabetically
  const sortedProvinces = [...provinceInfo].sort((a, b) => 
    a.name.localeCompare(b.name, 'vi-VN')
  );

  // Filter provinces based on search term and region
  const filteredProvinces = sortedProvinces.filter((province) => {
    const matchesSearch = province.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "all" || province.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  // Set Hanoi as default province on mount
  useEffect(() => {
    const hanoi = provinceInfo.find(p => p.name === "Hà Nội");
    if (hanoi) {
      setSelectedProvince(hanoi);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Banner Section */}
      <div className="relative h-[500px] w-full mt-20 overflow-hidden ">
        <video 
          className="absolute w-full h-full object-cover"
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay with content */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Khám phá các Tỉnh thành Việt Nam
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Tìm hiểu về lịch sử, văn hóa, địa danh nổi bật và đặc sản của từng
              tỉnh thành trên khắp Việt Nam. Khám phá những nét đẹp độc đáo và 
              đặc trưng của 63 tỉnh thành phố.
            </p>
            <div className="flex gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="block text-2xl font-bold">63</span>
                <span className="text-sm">Tỉnh thành</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="block text-2xl font-bold">7</span>
                <span className="text-sm">Vùng miền</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="block text-2xl font-bold">3</span>
                <span className="text-sm">Miền</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tìm kiếm tỉnh thành
              </label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nhập tên tỉnh thành..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {/* Dropdown only shows when searching */}
              {searchTerm && (
                <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-20 max-h-60 overflow-auto">
                  {filteredProvinces.length > 0 ? (
                    filteredProvinces.map((province) => (
                      <div
                        key={province.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedProvince(province);
                          setSearchTerm("");
                        }}
                      >
                        <div className="font-medium">{province.name}</div>
                        <div className="text-sm text-gray-500">{province.region}</div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">
                      Không tìm thấy tỉnh thành phù hợp
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vùng miền
              </label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
      </div>

      {/* Selected Province Details */}
      {selectedProvince && (
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[400px]">
              <img
                src={selectedProvince.image}
                alt={selectedProvince.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 w-full p-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{selectedProvince.name}</h1>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                    {selectedProvince.region}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 text-lg mb-8">{selectedProvince.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Thông tin chung</h2>
                  <div className="space-y-2">
                    <p><span className="font-medium">Dân số:</span> {selectedProvince.details.population}</p>
                    <p><span className="font-medium">Diện tích:</span> {selectedProvince.details.area}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Điểm du lịch nổi bật</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedProvince.details.attractions.map((attraction) => (
                      <li key={attraction}>{attraction}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Đặc sản nổi tiếng</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProvince.details.specialties.map((specialty) => (
                      <div key={specialty} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}