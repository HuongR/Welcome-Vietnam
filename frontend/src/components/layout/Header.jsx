import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import logoVietnam from "../../assets/images/logo-vietnam.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastScroll = useRef(window.scrollY);
  const dropdownRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (currentScroll > lastScroll.current && currentScroll > 60) {
            setShow(false);
          } else {
            setShow(true);
          }
          lastScroll.current = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "top" } });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-500
        ${
          show
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-16 pointer-events-none"
        }
        animate-header-fade`}
      style={{ willChange: "transform, opacity", height: "4.5rem" }} // Xóa border-b
    >
      <div className="w-full flex items-center justify-between h-full px-8 max-w-none">
        <div
          className="flex items-center cursor-pointer min-w-0"
          style={{ flex: "0 0 auto" }}
          onClick={handleLogoClick}
        >
          <img src={logoVietnam} alt="Vietnam" className="h-10 w-auto mr-3" />
          <span className="font-bold text-2xl text-black select-none whitespace-nowrap">
            Welcome Vietnam
          </span>
        </div>

        <nav className="flex-1 flex items-center justify-center gap-10">
          <Link
            to="/"
            className="nav-link"
            onClick={() => handleSectionClick("province")}
          >
            Khám phá tỉnh thành
          </Link>
          <span
            className="nav-link"
            onClick={() => handleSectionClick("food-culture")}
          >
            Văn hóa & ẩm thực
          </span>
          <span
            className="nav-link"
            onClick={() => handleSectionClick("customs-festivals")}
          >
            Phong tục & lễ hội
          </span>
          <Link to="/history" className="nav-link">
            Lịch sử
          </Link>
          <Link to="/multimedia" className="nav-link">
            Checkin
          </Link>
          <span
            className="nav-link"
            onClick={() => handleSectionClick("contact")}
          >
            Liên hệ
          </span>
        </nav>

        <div
          className="flex items-center space-x-4"
          style={{ flex: "0 0 auto" }}
        >
          <div className="relative" ref={dropdownRef}>
            <img
              src={user?.avatar || "/images/multimedia/avatar1.jpg"}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50 animate-dropdown overflow-hidden">
                {!user ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login-signin");
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-5 py-3 hover:bg-gray-100 text-gray-800 font-medium text-sm transition-all duration-150"
                    >
                      <FaSignInAlt /> Đăng nhập
                    </button>
                    <button
                      onClick={() => {
                        navigate("/login-register");
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-5 py-3 hover:bg-gray-100 text-gray-800 font-medium text-sm transition-all duration-150"
                    >
                      <FaUserPlus /> Đăng ký
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-5 py-3 hover:bg-gray-100 text-gray-800 font-medium text-sm transition-all duration-150"
                    >
                      <FaUser /> Trang cá nhân
                    </button>
                    <button
                      onClick={() => {
                        navigate("/settings");
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-5 py-3 hover:bg-gray-100 text-gray-800 font-medium text-sm transition-all duration-150"
                    >
                      <FaCog /> Quản lý thông tin
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-5 py-3 hover:bg-red-100 text-red-600 font-medium text-sm transition-all duration-150"
                    >
                      <FaSignOutAlt /> Đăng xuất
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes headerFadeIn {
          0% { opacity: 0; transform: translateY(-32px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-header-fade {
          animation: headerFadeIn 0.5s cubic-bezier(.4,0,.2,1);
        }
        .nav-link {
          position: relative;
          font-size: 1.1rem;
          color: #222;
          font-weight: 500;
          transition: color 0.2s;
          cursor: pointer;
          padding: 0 0.5rem;
          white-space: nowrap;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: black;
          transition: all 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
          left: 0;
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-dropdown {
          animation: dropdownFadeIn 0.25s ease-out forwards;
        }
        `}
      </style>
    </header>
  );
}

export default Header;
