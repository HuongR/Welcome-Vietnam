import React, { useEffect, useRef, useState } from "react";
import "../../../styles/home/content/FoodCulture.css";
import { cultureImages, cultureContent } from "./cultureData.mjs";
import { foodImages, foodContent } from "./foodData.mjs";

const FoodCulture = () => {
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
              observer.unobserve(vanhoaRef.current); // Chỉ chạy 1 lần
            }
            if (entry.target === amthucRef.current) {
              setAmthucVisible(true);
              observer.unobserve(amthucRef.current); // Chỉ chạy 1 lần
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } // Tinh chỉnh để dễ trigger hơn
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
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
            <div className="transparent"></div>
            <div className="square">
              <img 
                src={cultureImages[5].src} 
                alt={cultureImages[5].alt} 
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
          <div>
            <p>{cultureContent.description}</p>
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
          <div>
            <p>{foodContent.description}</p>
          </div>
        </div>
        <div className="image-half">
          <div className="image-grid">
            <div className="transparent"></div>
            <div className="transparent"></div>
            {foodImages.map((image, index) => (
              <div 
                key={image.id} 
                className={index < 2 ? "transparent" : "square"}
              >
                {index >= 2 && <img src={image.src} alt={image.alt} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCulture;
