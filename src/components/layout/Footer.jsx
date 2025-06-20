import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + slogan + social */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            {/* Logo có thể thay bằng hình ảnh */}
            <img src="/logo-vietnam.png" alt="Vietnam Logo" className="w-10 h-10 rounded-full border-2 border-red-500 bg-white" />
            <span className="text-red-500 text-3xl font-bold tracking-wide">Vietnam</span>
          </div>
          <p className="text-sm text-gray-400 italic">
            Kết nối quá khứ – Kiến tạo tương lai
          </p>
          <div className="flex items-center gap-3 text-gray-400 text-sm mt-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>123 Đường Lý Thường Kiệt, Hà Nội</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FaPhoneAlt className="text-red-400" />
            <span>0123 456 789</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <FaEnvelope className="text-red-400" />
            <span>info@vietnam.com</span>
          </div>
          <div className="flex gap-4 text-gray-400 text-xl mt-3">
            <FaFacebookF className="hover:text-red-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-red-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-red-400 cursor-pointer transition" />
            <FaGithub className="hover:text-red-400 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Columns */}
        <div>
          <h4 className="text-white font-semibold mb-3">Giải pháp</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-red-400 transition cursor-pointer">Tiếp thị</li>
            <li className="hover:text-red-400 transition cursor-pointer">Phân tích dữ liệu</li>
            <li className="hover:text-red-400 transition cursor-pointer">Tự động hóa</li>
            <li className="hover:text-red-400 transition cursor-pointer">Thương mại điện tử</li>
            <li className="hover:text-red-400 transition cursor-pointer">Thông tin chi tiết</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Hỗ trợ</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-red-400 transition cursor-pointer">Gửi yêu cầu</li>
            <li className="hover:text-red-400 transition cursor-pointer">Tài liệu hướng dẫn</li>
            <li className="hover:text-red-400 transition cursor-pointer">Hướng dẫn sử dụng</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Về chúng tôi</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-red-400 transition cursor-pointer">Giới thiệu</li>
            <li className="hover:text-red-400 transition cursor-pointer">Blog</li>
            <li className="hover:text-red-400 transition cursor-pointer">Tuyển dụng</li>
            <li className="hover:text-red-400 transition cursor-pointer">Truyền thông</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Pháp lý</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-red-400 transition cursor-pointer">Điều khoản sử dụng</li>
            <li className="hover:text-red-400 transition cursor-pointer">Chính sách bảo mật</li>
            <li className="hover:text-red-400 transition cursor-pointer">Giấy phép</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
        © 2024 Công ty của bạn. Bản quyền đã được bảo hộ.
      </div>
    </footer>
  );
}