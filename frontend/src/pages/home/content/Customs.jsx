import React, { useState, useEffect } from "react";
import "../../../styles/home/content/Customs.css";

const customsData = [
  { id: 1, title: "Tết Nguyên Đán", image: "/public/images/customs/tet.jpg" },
  { id: 2, title: "Ngày giỗ tổ tiên", image: "/public/images/customs/gioto.jpg" },
  { id: 3, title: "Lì xì đầu năm", image: "/public/images/customs/lixi.jpg" },
  { id: 4, title: "Xin chữ đầu xuân", image: "/public/images/customs/xinchu.jpg" },
  { id: 5, title: "Cúng ông Công ông Táo", image: "/public/images/customs/tetcongtao.jpg" },
  { id: 6, title: "Tảo mộ", image: "/public/images/customs/taomo.jpg" },
  { id: 7, title: "Ăn trầu", image: "/public/images/customs/antrau.jpg" },
  { id: 8, title: "Giao thừa", image: "/public/images/customs/giaothua.jpg" },
  { id: 9, title: "Đám cưới truyền thống", image: "/public/images/customs/damcuoi.jpg" },
  { id: 10, title: "Tết trung thu", image: "/public/images/customs/trungthu.jpg" },
];

const festivalData = [
  { id: 1, title: "Hội Lim", image: "/public/images/festivals/hoilim.jpg" },
  { id: 2, title: "Lễ hội Chọi Trâu", image: "/public/images/festivals/choitrau.jpg" },
  { id: 3, title: "Lễ hội Đền Hùng", image: "/public/images/festivals/denhung.jpg" },
  { id: 4, title: "Lễ hội Ok Om Bok", image: "/public/images/festivals/okom.jpg" },
  { id: 5, title: "Lễ hội Ka Tê", image: "/public/images/festivals/kate.jpg" },
  { id: 6, title: "Lễ hội Đua Voi", image: "/public/images/festivals/duavoi.jpg" },
  { id: 7, title: "Lễ hội Cầu Ngư", image: "/public/images/festivals/caungu.jpg" },
  { id: 8, title: "Lễ hội Gióng", image: "/public/images/festivals/giong.jpg" },
  { id: 9, title: "Lễ hội Chùa Hương", image: "/public/images/festivals/chuahuong.jpg" },
  { id: 10, title: "Lễ hội Yên Tử", image: "/public/images/festivals/yentu.jpg" },
];

const Customs = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("customs-section");
      if (
        section &&
        window.scrollY + window.innerHeight > section.offsetTop + 100
      ) {
        setShowAnimation(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="customs-container">
      {/* Banner Phong tục bằng gradient */}
      <div className="banner-customs-gradient">
        <div className="banner-customs-overlay">
          <h1>Phong tục tập quán – Linh hồn dân tộc Việt</h1>
        </div>
      </div>

      {/* Grid Phong tục */}
      <section
        id="customs-section"
        className={`customs-grid ${showAnimation ? "animate" : ""}`}
      >
        {customsData.map((item) => (
          <div key={item.id} className="customs-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Banner Lễ hội bằng gradient */}
      <div className="banner-festival-gradient">
        <div className="banner-festival-overlay">
          <h1>Lễ hội Việt Nam</h1>
        </div>
      </div>

      {/* Grid Lễ hội */}
      <section className={`customs-grid ${showAnimation ? "animate" : ""}`}>
        {festivalData.map((item) => (
          <div key={item.id} className="customs-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Customs;
