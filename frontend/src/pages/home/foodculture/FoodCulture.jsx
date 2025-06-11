import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/home/content/FoodCulture.css";
import { cultureImages, cultureContent } from "./cultureData.mjs";
import { foodImages, foodContent } from "./foodData.mjs";

const FoodCulture = () => {
  const navigate = useNavigate();
  const vanhoaRef = useRef(null);
  const amthucRef = useRef(null);
  const [vanhoaVisible, setVanhoaVisible] = useState(false);
  const [amthucVisible, setAmthucVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === vanhoaRef.current) {
              setVanhoaVisible(true);
              observer.unobserve(vanhoaRef.current);
            }
            if (entry.target === amthucRef.current) {
              setAmthucVisible(true);
              observer.unobserve(amthucRef.current);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (vanhoaRef.current) observer.observe(vanhoaRef.current);
    if (amthucRef.current) observer.observe(amthucRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="food-culture-container">
      {/* Văn hóa */}
      <div className="section-block">
        <div className="image-half">
          <div className="image-grid">
            {cultureImages.slice(0, 5).map((image) => (
              <div key={image.id} className="square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
            <div className="transparent"></div>
            <div className="square">
              <img
                src={cultureImages[5].src}
                alt={cultureImages[5].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div
          ref={vanhoaRef}
          className={`intro-half vanhoa ${vanhoaVisible ? "animate" : ""}`}
        >
          <div>
            <h2>{cultureContent.title}</h2>
          </div>
          <div className="space-y-6">
            <p>{cultureContent.description}</p>
            <button
              onClick={() => navigate("/cultures")}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 
    text-white text-sm font-medium rounded-lg shadow-md hover:shadow-xl 
    transform hover:-translate-y-1 transition-all duration-300 
    flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Khám phá thêm
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 
    transform scale-x-0 group-hover:scale-x-100 transition-transform 
    duration-300 origin-right"
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Ẩm thực */}
      <div className="section-block">
        <div
          ref={amthucRef}
          className={`intro-half amthuc ${amthucVisible ? "animate" : ""}`}
        >
          <div>
            <h2>{foodContent.title}</h2>
          </div>
          <div className="space-y-6">
            <p>{foodContent.description}</p>
            <button
              onClick={() => navigate("/foods")}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-600 
    text-white text-sm font-medium rounded-lg shadow-md hover:shadow-xl 
    transform hover:-translate-y-1 transition-all duration-300 
    flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Khám phá thêm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 
    transform scale-x-0 group-hover:scale-x-100 transition-transform 
    duration-300 origin-left"
              ></div>
            </button>
          </div>
        </div>
        <div className="image-half">
          <div className="image-grid">
            <div className="transparent"></div>
            <div className="transparent"></div>
            <div className="square">
              <img
                src={foodImages[0].src}
                alt={foodImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="transparent"></div>
            <div className="square">
              <img
                src={foodImages[1].src}
                alt={foodImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="square">
              <img
                src={foodImages[2].src}
                alt={foodImages[2].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="square">
              <img
                src={foodImages[3].src}
                alt={foodImages[3].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="square">
              <img
                src={foodImages[4].src}
                alt={foodImages[4].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="square">
              <img
                src={foodImages[5].src}
                alt={foodImages[5].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCulture;
