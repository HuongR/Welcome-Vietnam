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
          <div>
            <p>{cultureContent.description}</p>
          </div>
        </div>
      </div>

      {/* Ẩm thực - Mirrored layout */}
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
      {/* Hàng 1: Chỉ ảnh bên phải */}
      <div className="transparent"></div>
      <div className="transparent"></div>
      <div className="square">
        <img 
          src={foodImages[0].src} 
          alt={foodImages[0].alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>

      {/* Hàng 2: Ảnh ở giữa và phải */}
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

      {/* Hàng 3: Cả 3 ảnh */}
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