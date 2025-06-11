import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInfoCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import festivalsData from "./festivalData.mjs";
import Header from "../../../components/layout/Header";

const Festivals = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const slideAnimations = [
    {
      initial: { opacity: 0, scale: 1.2, y: -50 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.8, y: 50 },
    },
    {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -90 },
    },
    {
      initial: { opacity: 0, scale: 1.5, rotate: 10 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      exit: { opacity: 0, scale: 0.5, rotate: -10 },
    },
    {
      initial: { opacity: 0, x: -100, y: 100 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 100, y: -100 },
    },
    {
      initial: { opacity: 0, scale: 0.5, rotate: 45 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      exit: { opacity: 0, scale: 0.5, rotate: -45 },
    },
  ];

  const regions = [
    { id: "all", name: "Tất cả", color: "from-red-500 to-orange-500" },
    { id: "north", name: "Miền Bắc", color: "from-emerald-500 to-green-600" },
    { id: "central", name: "Miền Trung", color: "from-blue-500 to-cyan-500" },
    { id: "south", name: "Miền Nam", color: "from-yellow-500 to-amber-500" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto Slideshow Effect with Random Animations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === festivalsData.length - 1 ? 0 : prev + 1
      );
      setCurrentAnimation(Math.floor(Math.random() * slideAnimations.length));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const filteredFestivals = festivalsData.filter((festival) => {
    if (!festival) return false;

    const matchesRegion =
      selectedRegion === "all" ||
      festival.region === selectedRegion ||
      festival.region === "all";

    const searchTermLower = searchTerm.toLowerCase().trim();
    const matchesSearch =
      searchTerm === "" ||
      festival.title.toLowerCase().includes(searchTermLower) ||
      festival.description.toLowerCase().includes(searchTermLower);

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Header />

      {/* Hero Section with Auto Slideshow */}
      <div className="relative h-[90vh] overflow-hidden bg-gray-900 mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={slideAnimations[currentAnimation].initial}
            animate={slideAnimations[currentAnimation].animate}
            exit={slideAnimations[currentAnimation].exit}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={festivalsData[currentSlide].image}
                alt={festivalsData[currentSlide].title}
                className="absolute w-full h-full object-cover object-center"
                style={{
                  transform: "scale(1.05)", // Reduced from 1.2 to 1.05
                  transformOrigin: "center center",
                  filter: "brightness(0.9) contrast(1.1)", // Adjusted brightness and added contrast
                  imageRendering: "crisp-edges", // Improve image sharpness
                  objectPosition: "center 30%", // Adjust vertical position to show better part of image
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))", // Lightened the gradient
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative h-full w-full mx-auto px-4 flex flex-col justify-start items-center text-center pt-[10vh]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative p-8 rounded-3xl backdrop-blur-sm bg-black/20"
          >
            <motion.h1
              className="text-6xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Lễ Hội Việt Nam
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 max-w-2xl mx-auto font-light"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              Hành trình khám phá những lễ hội độc đáo và di sản văn hóa phi vật
              thể của dân tộc Việt Nam
            </motion.p>
          </motion.div>
        </div>

        {/* Slideshow Controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
          {festivalsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setCurrentAnimation(
                  Math.floor(Math.random() * slideAnimations.length)
                );
              }}
              className={`h-2 rounded-full transition-all duration-500 
                ${
                  currentSlide === index
                    ? "w-8 bg-yellow-400"
                    : "w-2 bg-white/50"
                }`}
            />
          ))}
        </div>

        {/* Current Festival Info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 right-10 text-right"
        >
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {festivalsData[currentSlide].title}
            </h3>
            <p className="text-yellow-400">
              {festivalsData[currentSlide].date}
            </p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentSlide((curr) =>
              curr === 0 ? festivalsData.length - 1 : curr - 1
            );
            setCurrentAnimation(
              Math.floor(Math.random() * slideAnimations.length)
            );
          }}
          className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 
                     backdrop-blur-sm text-white hover:bg-black/50 transition-all"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          onClick={() => {
            setCurrentSlide((curr) =>
              curr === festivalsData.length - 1 ? 0 : curr + 1
            );
            setCurrentAnimation(
              Math.floor(Math.random() * slideAnimations.length)
            );
          }}
          className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 
                     backdrop-blur-sm text-white hover:bg-black/50 transition-all"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>

      {/* ... Main Content ... */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Search & Filter */}
        <div className="mb-16 space-y-6">
          {" "}
          {/* Changed from space-y-8 */}
          <div className="relative max-w-2xl mx-auto">
            {" "}
            {/* Changed from max-w-3xl */}
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />{" "}
            {/* Adjusted position and size */}
            <input
              type="text"
              placeholder="Tìm kiếm lễ hội..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white shadow-lg border border-gray-200
               focus:border-red-500 focus:outline-none text-base" /* Adjusted padding, size and rounded corners */
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {" "}
            {/* Changed gap-4 to gap-3 */}
            {regions.map((region) => (
              <motion.button
                key={region.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-2.5 rounded-lg text-base font-medium transition-all duration-300
          ${
            selectedRegion === region.id
              ? `bg-gradient-to-r ${region.color} text-white shadow-md`
              : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
          }`} /* Adjusted padding, text size, and rounded corners */
              >
                {region.name}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredFestivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedFestival(festival);
                setIsModalOpen(true);
              }}
              className="group cursor-pointer relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={festival.image}
                  alt={festival.title}
                  className="w-full h-full object-cover transition-transform duration-700 
                           group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                               opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-4 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-lg text-sm bg-gradient-to-r 
                        ${
                          regions.find((r) => r.id === festival.region)
                            ?.color || regions[0].color
                        }`}
                      >
                        {regions.find((r) => r.id === festival.region)?.name ||
                          "Toàn quốc"}
                      </span>
                      <span className="text-gray-300 flex items-center text-sm">
                        <FaCalendarAlt className="mr-2" />
                        {festival.date || "Quanh năm"}
                      </span>
                    </div>

                    <h3
                      className="text-2xl text-white font-bold mb-2 group-hover:text-red-400 
                                 transition-colors duration-300"
                    >
                      {festival.title}
                    </h3>

                    <p
                      className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 
                                transform translate-y-4 group-hover:translate-y-0 
                                transition-all duration-300"
                    >
                      {festival.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Festival Detail Modal */}
        <AnimatePresence>
          {isModalOpen && selectedFestival && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl mx-auto mt-20 bg-gray-900 rounded-3xl overflow-hidden 
                          border border-gray-800"
              >
                <div className="relative h-[60vh]">
                  <img
                    src={selectedFestival.image}
                    alt={selectedFestival.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`px-4 py-2 rounded-lg text-sm bg-gradient-to-r 
                        ${
                          regions.find((r) => r.id === selectedFestival.region)
                            ?.color || regions[0].color
                        }`}
                      >
                        {regions.find((r) => r.id === selectedFestival.region)
                          ?.name || "Toàn quốc"}
                      </span>
                      <span className="text-gray-300 flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        {selectedFestival.date || "Quanh năm"}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold">
                      {selectedFestival.title}
                    </h2>
                  </div>
                </div>

                <div className="p-10 space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {selectedFestival.description}
                  </p>

                  {selectedFestival.details && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
                    >
                      <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                        <FaInfoCircle className="mr-2" />
                        Chi tiết lễ hội
                      </h3>
                      <p className="text-gray-300 whitespace-pre-line">
                        {selectedFestival.details}
                      </p>
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

export default Festivals;
