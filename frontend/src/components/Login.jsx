import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const POWDER = "#b6e0fe";

// Component cho route /login-signin
export function SignIn() {
  return <Login modeDefault="login" />;
}

// Component cho route /login-register
export function Register() {
  return <Login modeDefault="register" />;
}

export default function Login({ modeDefault = "login" }) {
  const [mode, setMode] = useState(modeDefault); // login | register | forgot
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [forgotUser, setForgotUser] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Đồng bộ mode với url
  useEffect(() => {
    if (location.pathname === "/login-signin") setMode("login");
    if (location.pathname === "/login-register") setMode("register");
  }, [location.pathname]);

  // Lấy danh sách user từ localStorage
  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  // Lưu danh sách user vào localStorage
  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  // Đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1582003") {
      setSuccess("Đăng nhập quản trị viên thành công!");
      setError("");
      localStorage.setItem(
        "user",
        JSON.stringify({ username: "admin", role: "admin" })
      );
      setTimeout(() => navigate("/"), 800);
      return;
    }
    const users = getUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setSuccess("Đăng nhập thành công!");
      setError("");
      localStorage.setItem(
        "user",
        JSON.stringify({ username: user.username, role: "user" })
      );
      setTimeout(() => navigate("/"), 800);
    } else {
      setError("Sai tài khoản hoặc mật khẩu!");
      setSuccess("");
    }
  };

  // Đăng ký
  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password || !confirm) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      setSuccess("");
      return;
    }
    if (password !== confirm) {
      setError("Mật khẩu xác nhận không khớp!");
      setSuccess("");
      return;
    }
    if (username === "admin") {
      setError("Không thể đăng ký tài khoản này!");
      setSuccess("");
      return;
    }
    const users = getUsers();
    if (users.find((u) => u.username === username)) {
      setError("Tên tài khoản đã tồn tại!");
      setSuccess("");
      return;
    }
    users.push({ username, password });
    saveUsers(users);
    setSuccess("Đăng ký thành công! Đang chuyển hướng...");
    setError("");
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ username, role: "user" }));
      navigate("/");
    }, 1200);
  };

  // Quên mật khẩu (demo)
  const handleForgot = (e) => {
    e.preventDefault();
    if (!forgotUser) {
      setError("Vui lòng nhập tên tài khoản!");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Vui lòng liên hệ quản trị viên để lấy lại mật khẩu.");
  };

  // Animation logic
  const isLogin = mode === "login";
  const isRegister = mode === "register";
  const isForgot = mode === "forgot";

  return (
    <div
      className="w-screen h-screen flex items-stretch overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${POWDER} 0%, #e3f6fc 100%)`,
      }}
    >
      {/* Cột trái */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-white">
        {/* Form đăng nhập (trái) */}
        <div
          className={`
          absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-in-out
          ${
            isLogin
              ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
              : "opacity-0 -translate-x-full z-0 pointer-events-none"
          }
        `}
        >
          <div className="w-full max-w-md px-8 py-12">
            <h2
              className="text-4xl font-bold mb-2 text-center"
              style={{ color: POWDER }}
            >
              Đăng nhập
            </h2>
            <p className="text-gray-600 text-center mb-6 font-medium">
              Chào mừng bạn quay trở lại!<br></br> Vui lòng đăng nhập để tiếp
              tục.
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <button
                type="button"
                className="p-3 rounded-full bg-white shadow hover:bg-blue-100 transition border-2"
                style={{ borderColor: POWDER }}
                title="Google"
                onClick={() => setSuccess("Tính năng đang phát triển")}
              >
                <FaGoogle className="text-blue-400 text-xl" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full bg-white shadow hover:bg-blue-100 transition border-2"
                style={{ borderColor: POWDER }}
                title="Facebook"
                onClick={() => setSuccess("Tính năng đang phát triển")}
              >
                <FaFacebookF className="text-blue-500 text-xl" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full bg-white shadow hover:bg-blue-100 transition border-2"
                style={{ borderColor: POWDER }}
                title="Instagram"
                onClick={() => setSuccess("Tính năng đang phát triển")}
              >
                <FaInstagram className="text-pink-400 text-xl" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full bg-white shadow hover:bg-blue-100 transition border-2"
                style={{ borderColor: POWDER }}
                title="X"
                onClick={() => setSuccess("Tính năng đang phát triển")}
              >
                <FaXTwitter className="text-black text-xl" />
              </button>
            </div>
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px" style={{ background: POWDER }} />
              <span className="mx-3 text-blue-700 text-sm font-semibold">
                hoặc
              </span>
              <div className="flex-1 h-px" style={{ background: POWDER }} />
            </div>
            <form className="w-full" onSubmit={handleLogin}>
              <input
                className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:border-blue-300"
                style={{ borderColor: POWDER }}
                type="text"
                placeholder="Tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
              <input
                className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:border-blue-300"
                style={{ borderColor: POWDER }}
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  className="text-blue-700 text-sm hover:underline font-semibold"
                  onClick={() => {
                    setMode("forgot");
                    setError("");
                    setSuccess("");
                  }}
                >
                  Quên mật khẩu?
                </button>
                <button
                  type="button"
                  className="text-blue-700 text-sm hover:underline font-semibold"
                  onClick={() => {
                    setMode("register");
                    setError("");
                    setSuccess("");
                  }}
                >
                  Bạn chưa có tài khoản? Đăng ký
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#b6e0fe] text-white rounded-lg font-bold hover:bg-[#d0edfd] transition text-lg shadow"
                style={{ boxShadow: `0 2px 8px 0 ${POWDER}55` }}
              >
                Đăng nhập
              </button>
              <button
                type="button"
                className="w-full mt-2 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition text-lg shadow"
                onClick={() => navigate("/")}
              >
                Quay lại
              </button>
              {error && (
                <div className="mt-3 text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
              {success && (
                <div className="mt-3 text-green-600 text-sm text-center">
                  {success}
                </div>
              )}
              <p className="mt-6 text-xs text-gray-700 text-center">
                Khi sử dụng, bạn đồng ý với
                <a
                  href="#"
                  className="border-b border-blue-600 border-dotted text-blue-700"
                >
                  {" "}
                  Điều khoản dịch vụ{" "}
                </a>
                và
                <a
                  href="#"
                  className="border-b border-blue-600 border-dotted text-blue-700"
                >
                  {" "}
                  Chính sách bảo mật{" "}
                </a>
                của chúng tôi.
              </p>
            </form>
          </div>
        </div>
        {/* Ảnh đăng ký/quên mật khẩu (trái) */}
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Register Visual"
          className={`
            absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
            ${
              isRegister || isForgot
                ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                : "opacity-0 -translate-x-full z-0 pointer-events-none"
            }
          `}
          style={{ boxShadow: `0 0 0 0 ${POWDER}` }}
        />
      </div>
      {/* Cột phải */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-white">
        {/* Ảnh đăng nhập (phải) */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Login Visual"
          className={`
            absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
            ${
              isLogin
                ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                : "opacity-0 translate-x-full z-0 pointer-events-none"
            }
          `}
          style={{ boxShadow: `0 0 0 0 ${POWDER}` }}
        />
        {/* Form đăng ký (phải) */}
        <div
          className={`
          absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-in-out
          ${
            isRegister
              ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
              : "opacity-0 translate-x-full z-0 pointer-events-none"
          }
        `}
        >
          <div className="w-full max-w-md px-8 py-12">
            <h2
              className="text-4xl font-bold mb-2 text-center"
              style={{ color: POWDER }}
            >
              Đăng ký
            </h2>
            <p className="text-gray-600 text-center mb-6 font-medium">
              Tạo tài khoản mới để trải nghiệm đầy đủ tính năng.
            </p>
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px" style={{ background: POWDER }} />
              <span className="mx-3 text-blue-700 text-sm font-semibold">
                hoặc
              </span>
              <div className="flex-1 h-px" style={{ background: POWDER }} />
            </div>
            <form className="w-full" onSubmit={handleRegister}>
              <input
                className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:border-blue-300"
                style={{ borderColor: POWDER }}
                type="text"
                placeholder="Tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
              <input
                className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:border-blue-300"
                style={{ borderColor: POWDER }}
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <input
                className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:border-blue-300"
                style={{ borderColor: POWDER }}
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-password"
              />
              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  className="text-blue-700 text-sm hover:underline font-semibold"
                  onClick={() => {
                    setMode("login");
                    setError("");
                    setSuccess("");
                  }}
                >
                  Đã có tài khoản? Đăng nhập
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#b6e0fe] text-white rounded-lg font-bold hover:bg-[#d0edfd] transition text-lg shadow"
                style={{ boxShadow: `0 2px 8px 0 ${POWDER}55` }}
              >
                Đăng ký
              </button>
              <button
                type="button"
                className="w-full mt-2 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition text-lg shadow"
                onClick={() => navigate("/")}
              >
                Quay lại
              </button>
              {error && (
                <div className="mt-3 text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
              {success && (
                <div className="mt-3 text-green-600 text-sm text-center">
                  {success}
                </div>
              )}
              <p className="mt-6 text-xs text-gray-700 text-center">
                Khi sử dụng, bạn đồng ý với
                <a
                  href="#"
                  className="border-b border-blue-600 border-dotted text-blue-700"
                >
                  {" "}
                  Điều khoản dịch vụ{" "}
                </a>
                và
                <a
                  href="#"
                  className="border-b border-blue-600 border-dotted text-blue-700"
                >
                  {" "}
                  Chính sách bảo mật{" "}
                </a>
                của chúng tôi.
              </p>
            </form>
          </div>
        </div>
        {/* Form quên mật khẩu (phải) */}
        <div
          className={`
          absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-in-out
          ${
            isForgot
              ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
              : "opacity-0 translate-x-full z-0 pointer-events-none"
          }
        `}
        >
          <div className="w-full max-w-md px-8 py-12">
            <h2
              className="text-4xl font-bold mb-2 text-center"
              style={{ color: POWDER }}
            >
              Quên mật khẩu
            </h2>
            <p className="text-gray-600 text-center mb-6 font-medium">
              Nhập tên tài khoản để lấy lại mật khẩu (demo).
            </p>
            <div className="flex items-center mb-6">
              <div className="flex-1 h-px" style={{ background: POWDER }} />
              <span className="mx-3 text-blue-700 text-sm font-semibold">
                hoặc
              </span>
              <div className="flex-1 h-px" style={{ background: POWDER }} />
            </div>
            <form className="w-full" onSubmit={handleForgot}>
              <input
                className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:border-blue-300"
                style={{ borderColor: POWDER }}
                type="text"
                placeholder="Tên tài khoản"
                value={forgotUser}
                onChange={(e) => setForgotUser(e.target.value)}
                autoComplete="username"
              />
              <div className="flex justify-between items-center mb-4">
                <button
                  type="button"
                  className="text-blue-700 text-sm hover:underline font-semibold"
                  onClick={() => {
                    setMode("login");
                    setError("");
                    setSuccess("");
                  }}
                >
                  Quay lại đăng nhập
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#b6e0fe] text-blue-900 rounded-lg font-bold hover:bg-[#d0edfd] transition text-lg shadow"
                style={{ boxShadow: `0 2px 8px 0 ${POWDER}55` }}
              >
                Lấy lại mật khẩu
              </button>
              {error && (
                <div className="mt-3 text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
              {success && (
                <div className="mt-3 text-green-600 text-sm text-center">
                  {success}
                </div>
              )}
              <p className="mt-6 text-xs text-gray-700 text-center">
                Khi sử dụng, bạn đồng ý với
                <a
                  href="#"
                  className="border-b border-blue-600 border-dotted text-blue-700"
                >
                  {" "}
                  Điều khoản dịch vụ{" "}
                </a>
                và
                <a
                  href="#"
                  className="border-b border-blue-600 border-dotted text-blue-700"
                >
                  {" "}
                  Chính sách bảo mật{" "}
                </a>
                của chúng tôi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
