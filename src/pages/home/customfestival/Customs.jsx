import React, { useState, useEffect } from "react";
import customsData from "./customData.mjs";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
import Header from "../../../components/layout/Header";
import ReturnHome from "../../../components/ui/ReturnHome";

const Customs = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustom, setSelectedCustom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = [
    { id: "all", name: "Tất cả" },
    { id: "north", name: "Miền Bắc" },
    { id: "central", name: "Miền Trung" },
    { id: "south", name: "Miền Nam" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const filteredCustoms = customsData.filter((custom) => {
    if (!custom || !custom.title || !custom.description) return false;
    
    const matchesRegion = selectedRegion === "all" || 
                         custom.region === selectedRegion || 
                         custom.region === "all";
                         
    const searchTermLower = searchTerm.toLowerCase().trim();
    const matchesSearch = searchTerm === "" || 
                         custom.title.toLowerCase().includes(searchTermLower) ||
                         custom.description.toLowerCase().includes(searchTermLower) ||
                         (custom.details && custom.details.toLowerCase().includes(searchTermLower));

    return matchesRegion && matchesSearch;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      <ReturnHome />
      <div className="max-w-7xl mx-auto px-4 py-16 mt-20">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-red-600 mb-6 font-traditional">
            Phong Tục Tập Quán Việt Nam
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Khám phá những nét đẹp văn hóa truyền thống và phong tục tập quán đặc
            trưng của từng vùng miền trên khắp đất nước Việt Nam.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm phong tục..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-red-200 focus:border-red-500 focus:outline-none transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {regions.map((region) => (
                <motion.button
                  key={region.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedRegion === region.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-red-100 border-2 border-red-200"
                  }`}
                >
                  {region.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Customs Grid */}
        <AnimatePresence>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCustoms.map((custom) => (
              <motion.div
                key={custom.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400 }
                }}
                onClick={() => {
                  setSelectedCustom(custom);
                  setIsModalOpen(true);
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
                           transition-all duration-300 cursor-pointer border border-red-100"
              >
                <div className="relative h-72">
                  <img
                    src={custom.image}
                    alt={custom.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-4 py-1 bg-red-600 text-white rounded-full text-sm mb-2 inline-block">
                      <FaMapMarkerAlt className="inline mr-2" />
                      {regions.find((r) => r.id === custom.region)?.name || "Toàn quốc"}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {custom.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 line-clamp-3">{custom.description}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    <span>{custom.date || "Quanh năm"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCustom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={e => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <img
                  src={selectedCustom.image}
                  alt={selectedCustom.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedCustom.title}
                  </h2>
                  <div className="flex gap-4 mb-6">
                    <span className="flex items-center text-red-600">
                      <FaMapMarkerAlt className="mr-2" />
                      {regions.find((r) => r.id === selectedCustom.region)?.name || "Toàn quốc"}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      {selectedCustom.date || "Quanh năm"}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedCustom.description}
                  </p>
                  {selectedCustom.details && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 bg-red-50 p-6 rounded-2xl"
                    >
                      <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center">
                        <FaInfoCircle className="mr-2" />
                        Chi tiết thêm
                      </h3>
                      <p className="text-gray-700 whitespace-pre-line">{selectedCustom.details}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Customs;