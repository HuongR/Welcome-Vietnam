import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../../styles/home/content/ProvinceSection.css';

const provinces = [
  { name: 'Thừa Thiên Huế', image: '/images/tinhthanh/thuathienhue.jpg', description: 'Nơi lưu giữ hồn cố đô, đậm đà bản sắc văn hóa, cảnh sắc nên thơ.' },
  { name: 'Đà Lạt', image: '/images/tinhthanh/dalat.jpg', description: 'Thành phố ngàn hoa rực rỡ, khí hậu mát mẻ, mê hoặc lòng người.' },
  { name: 'Hà Nội', image: '/images/tinhthanh/hanoi.jpg', description: 'Trái tim thủ đô, nơi kết tinh văn hóa và lịch sử nghìn năm.' },
  { name: 'Đà Nẵng', image: '/images/tinhthanh/danang.jpg', description: 'Thành phố biển năng động, cầu Rồng biểu tượng độc đáo.' },
  { name: 'TP. HCM', image: '/images/tinhthanh/tphcm.jpg', description: 'Trung tâm kinh tế sôi động, nhịp sống hiện đại và phồn hoa.' }
];

export default function ProvinceSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const sectionRef = useRef(null);
  const visibleCount = 4;

  useEffect(() => {
    const interval = setInterval(() => setStartIndex(prev => (prev + 1) % provinces.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setStartIndex(prev => (prev + 1) % provinces.length);
  const prev = () => setStartIndex(prev => (prev - 1 + provinces.length) % provinces.length);

  const visibleProvinces = [...provinces, ...provinces].slice(startIndex, startIndex + visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setAnimateText(true);
      });
    }, { threshold: 0.5 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="province-section" ref={sectionRef}>
      <div className={`province-left ${animateText ? 'animate-text' : ''}`}>
        <h2>Khám phá Tỉnh Thành</h2>
        <p>Khám phá những điểm đến tuyệt đẹp trên khắp Việt Nam. Mỗi nơi là một câu chuyện mang đến màu sắc riêng, đang chờ bạn khám phá!</p>
        <div className="explore-btn-wrapper">
          <button className="explore-btn">Khám phá ngay</button>
        </div>
      </div>

      <div className="province-right">
        <button className="nav-btn" onClick={prev}><FaChevronLeft /></button>
        <div className="carousel-track">
          {visibleProvinces.map((p, idx) => (
            <div key={idx} className="province-card animated-slide">
              {/* Tách ảnh nền */}
              <div className="province-background" style={{ backgroundImage: `url(${p.image})` }}></div>
              {/* Overlay text */}
              <div className="province-overlay">
                <h3 className="province-name">{p.name}</h3>
                <p className="province-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-btn" onClick={next}><FaChevronRight /></button>
      </div>
    </section>
  );
}
