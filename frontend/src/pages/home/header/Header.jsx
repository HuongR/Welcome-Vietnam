import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoVietnam from '../../../assets/images/logo-vietnam.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'top' } });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-[5rem] max-w-6xl bg-white rounded-full shadow-md flex items-center justify-between px-6 py-2 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
        <img src={logoVietnam} alt="Vietnam" className="ml-5 h-10 w-auto scale-[1.35]" />
      </div>

      {/* Menu */}
      <nav className="hidden md:flex space-x-8">
        {[
          { id: 'province', label: 'Khám phá Tỉnh Thành' },
          { id: 'food-culture', label: 'Văn Hóa & Ẩm Thực' },
          { id: 'customs-festivals', label: 'Phong Tục & Lễ Hội' }
        ].map((item) => (
          <span
            key={item.id}
            onClick={() => handleSectionClick(item.id)}
            className="relative text-xl text-gray-800 hover:text-gray-600 transition duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[3px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 cursor-pointer"
          >
            {item.label}
          </span>
        ))}

        {/* Route items */}
        <Link to="/history" className="relative text-xl text-gray-800 hover:text-gray-600">Lịch Sử</Link>
        <Link to="/multimedia" className="relative text-xl text-gray-800 hover:text-gray-600">Chia Sẻ</Link>

        <span
          onClick={() => handleSectionClick('contact')}
          className="relative text-xl text-gray-800 hover:text-gray-600 cursor-pointer"
        >
          Liên Hệ
        </span>
      </nav>

      {/* Avatar */}
      <div className="flex items-center space-x-2">
        <Link to="/profile">
          <img
            src="/assets/images/avatar-placeholder.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-600 hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
