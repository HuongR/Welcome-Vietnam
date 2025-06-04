import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../../../styles/home/content/SearchBox.css"; // Import CSS riêng

const SearchBox = () => {
  const texts = React.useMemo(() => [
    "Khám phá Việt Nam",
    "Văn hóa & Ẩm thực",
    "Phong tục & Lễ Hội",
    "Lịch Sử Việt Nam",
  ], []);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Dừng lại 1.5s rồi bắt đầu xóa
          setTimeout(() => setIsDeleting(true), 250);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100); // Thời gian giữa các ký tự

    return () => clearInterval(interval);
  }, [texts, textIndex, charIndex, isDeleting]);

  return (
    <div className="searchbox-wrapper">
      <div className="searchbox-container">
        <span className="main-text">Cùng tìm hiểu về Việt Nam:</span>
        <input
          className="animated-input"
          placeholder={displayedText}
          
        />
        <FaSearch className="search-icon" />
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default SearchBox;
