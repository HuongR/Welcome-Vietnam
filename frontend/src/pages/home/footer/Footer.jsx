import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + slogan + social */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500 text-3xl">Vietnam</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Kết nối quá khứ – Kiến tạo tương lai
          </p>
          <div className="flex gap-4 text-gray-400 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Columns */}
        <div>
          <h4 className="text-white font-semibold mb-3">Giải pháp</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Tiếp thị</li>
            <li>Phân tích dữ liệu</li>
            <li>Tự động hóa</li>
            <li>Thương mại điện tử</li>
            <li>Thông tin chi tiết</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Hỗ trợ</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Gửi yêu cầu</li>
            <li>Tài liệu hướng dẫn</li>
            <li>Hướng dẫn sử dụng</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Về chúng tôi</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Giới thiệu</li>
            <li>Blog</li>
            <li>Tuyển dụng</li>
            <li>Truyền thông</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Pháp lý</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="text-white">Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Giấy phép</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
        © 2024 Công ty của bạn. Bản quyền đã được bảo hộ.
      </div>
    </footer>
  );
}
