import React, { useEffect, useRef, useState } from "react";

export default function VietnamMapEmbed() {
  const sectionRef = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const scriptData = document.createElement("script");
    scriptData.src = "/mapdata.js";
    scriptData.async = true;

    const scriptMap = document.createElement("script");
    scriptMap.src = "/countrymap.js";
    scriptMap.async = true;

    document.body.appendChild(scriptData);
    document.body.appendChild(scriptMap);

    return () => {
      document.body.removeChild(scriptData);
      document.body.removeChild(scriptMap);
    };
  }, []);

  // Animation: detect when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setShowText(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger once in case already in view
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="font-sans flex flex-col md:flex-row bg-white max-w-7xl mx-auto p-6 gap-8 items-start"
    >
      {/* Bên phải - Bản đồ (đưa lên trước) */}
      <div className="md:w-1/2 w-full relative order-1 md:order-2">
        <div id="map" className="w-full h-[600px] border rounded shadow-sm" />
      </div>

      {/* Bên trái - Giới thiệu */}
      <div
        className={`md:w-1/2 flex flex-col gap-4 order-2 md:order-1 
    ${showText ? "animate-slide-in-left" : "opacity-0 -translate-x-16"}
    transition-all duration-700 font-[Poppins,sans-serif]`}
      >
        <p className="uppercase text-sm tracking-wider text-gray-500 font-[Poppins,sans-serif]">
          Hôm nay
        </p>
        <h1 className="text-4xl font-bold text-black font-[Poppins,sans-serif]">
          Bản Đồ Việt Nam
        </h1>
        <h2 className="text-xl font-semibold text-red-600 font-[Poppins,sans-serif]">
          Khám phá 63 tỉnh thành – Một Việt Nam sống động
        </h2>
        <p className="text-gray-700 leading-relaxed font-[Poppins,sans-serif]">
          Trên dải đất hình chữ S thân thương, mỗi vùng miền đều lưu giữ một
          phần hồn dân tộc. Từ núi rừng Tây Bắc mờ sương, thác ghềnh hùng vĩ của
          Hà Giang, tới cánh đồng lúa bát ngát ở đồng bằng Bắc Bộ, qua miền
          Trung đầy nắng gió với di sản nghìn năm như Huế, Hội An, đến những
          vườn trái cây trù phú và sông nước mênh mông ở miền Tây Nam Bộ.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2 font-[Poppins,sans-serif]">
          Mỗi tỉnh thành là một câu chuyện – về con người, phong tục, di sản và
          ký ức lịch sử. Bản đồ này không chỉ là hình ảnh địa lý, mà là tấm
          gương phản chiếu tâm hồn đất nước: kiên cường, đa dạng và luôn chuyển
          động.
        </p>
        <p className="italic text-gray-500 text-sm mt-2 font-[Poppins,sans-serif]">
          “Hoàng Sa, Trường Sa là của Việt Nam”
        </p>
      </div>
      <style>
        {`
        .animate-slide-in-left {
          opacity: 1 !important;
          transform: translateX(0) !important;
          transition: all 0.7s cubic-bezier(.4,0,.2,1);
        }
        `}
      </style>
    </div>
  );
}
