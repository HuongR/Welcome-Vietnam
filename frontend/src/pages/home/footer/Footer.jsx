import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Logo & mô tả */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Vietnam Explore</h2>
          <p className="text-gray-400">
            Hành trình khám phá văn hóa, thiên nhiên và con người Việt Nam – từ di sản đến hiện đại.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liên kết</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about" className="hover:text-white">Về chúng tôi</a></li>
            <li><a href="/contact" className="hover:text-white">Liên hệ</a></li>
            <li><a href="/privacy" className="hover:text-white">Chính sách bảo mật</a></li>
            <li><a href="/faq" className="hover:text-white">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 Vietnam Explore.
      </div>
    </footer>
  );
};

export default Footer;
