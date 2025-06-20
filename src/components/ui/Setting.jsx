import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaShieldAlt,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaTrash,
} from "react-icons/fa";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const SIDEBAR = [
  { key: "login", label: "Thông tin đăng nhập", icon: <FaLock /> },
  { key: "connect", label: "Thông tin kết nối", icon: <FaUser /> },
  { key: "security", label: "Bảo vệ tài khoản", icon: <FaShieldAlt /> },
];

export default function Setting() {
  const [tab, setTab] = useState("login");
  const [username] = useState("test123123");
  const [password, setPassword] = useState("123456");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const [facebookConnected, setFacebookConnected] = useState(false);
  const [zaloConnected, setZaloConnected] = useState(false);
  const [instagramConnected, setInstagramConnected] = useState(false);

  const [cmnd, setCmnd] = useState("***********");
  const [email, setEmail] = useState("r*********@gmail.com");
  const [phone, setPhone] = useState("032****789");
  const [showDelete, setShowDelete] = useState(false);

  // State cho đổi mật khẩu mới
  const [oldPasswordInput, setOldPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [changeError, setChangeError] = useState("");

  return (
    <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 min-h-screen flex flex-col">
      <Header />
      <div
        className="flex flex-1 w-full items-start mt-20"
        style={{
          minHeight: "calc(100vh - 64px - 56px)",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          gap: "5vw",
        }}
      >
        {/* Sidebar */}
        <aside
          className="bg-white/60 backdrop-blur-md border border-blue-200 shadow-2xl flex flex-col py-10 px-0 relative z-10 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-blue-300/60"
          style={{
            width: "25vw",
            minWidth: 240,
            maxWidth: 400,
            height: "calc(100vh - 64px - 56px - 4vw)",
            marginTop: "2vw",
            marginBottom: "2vw",
            display: "flex",
          }}
        >
          <div className="flex flex-col gap-3">
            {SIDEBAR.map((item) => (
              <button
                key={item.key}
                className={`flex items-center gap-4 px-10 py-5 rounded-l-2xl font-semibold text-lg transition-all duration-200
                  ${
                    tab === item.key
                      ? "bg-gradient-to-r from-blue-500 via-indigo-400 to-pink-400 text-white shadow-xl scale-105 ring-2 ring-pink-300"
                      : "text-blue-700 hover:bg-blue-100/60 hover:scale-105"
                  }`}
                onClick={() => setTab(item.key)}
              >
                <span
                  className={`text-2xl transition-all duration-200 ${
                    tab === item.key ? "animate-bounce" : "text-blue-500"
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex-1" />
          <div className="px-10 py-4 text-xs text-gray-400">
            © 2025 Vietnam App
          </div>
        </aside>
        {/* Main content */}
        <main
          className="flex items-start justify-center p-0"
          style={{
            width: "50vw",
            minWidth: 320,
            maxWidth: 800,
            height: "calc(100vh - 64px - 56px - 4vw)",
            marginTop: "2vw",
            marginBottom: "2vw",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div className="w-full h-full bg-white/90 rounded-3xl shadow-2xl border-2 border-pink-200 p-12 animate-fade-in transition-all duration-300 hover:shadow-pink-200/80 hover:scale-[1.02] flex flex-col">
            {/* Thông tin đăng nhập */}
            {tab === "login" && (
              <div>
                <div className="font-extrabold text-3xl mb-8 text-blue-700 flex items-center gap-3">
                  <FaLock className="text-blue-500" /> Thông tin đăng nhập
                </div>
                <div className="flex flex-col gap-6 max-w-xl">
                  {/* Tên đăng nhập */}
                  <div className="flex items-center gap-6">
                    <span className="w-48 text-gray-600 font-medium">
                      Tên đăng nhập:
                    </span>
                    <input
                      className="border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      style={{ width: 432 }}
                      value={username}
                      disabled
                      readOnly
                    />
                  </div>
                  {/* Mật khẩu + Đổi mật khẩu */}
                  <div className="flex items-center gap-6">
                    <span className="w-48 text-gray-600 font-medium">
                      Mật khẩu:
                    </span>
                    <div className="flex items-center" style={{ width: 432 }}>
                      <input
                        className="border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        style={{ width: 225 }}
                        type="password"
                        value={password}
                        disabled
                        readOnly
                      />
                      <button
                        className="ml-[10px] px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-bold shadow hover:scale-105 transition h-full"
                        style={{ minWidth: 150 }}
                        onClick={() => setShowChangePassword((v) => !v)}
                      >
                        Đổi mật khẩu
                      </button>
                    </div>
                  </div>
                  {/* Đổi mật khẩu */}
                  {showChangePassword && (
                    <form
                      className="flex flex-col gap-6 animate-fade-in"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (oldPasswordInput !== password) {
                          setChangeError("Mật khẩu cũ không đúng!");
                          return;
                        }
                        setPassword(newPasswordInput);
                        setNewPasswordInput("");
                        setOldPasswordInput("");
                        setShowChangePassword(false);
                        setChangeError("");
                      }}
                    >
                      <div className="flex items-center gap-6">
                        <span className="w-48 text-gray-600 font-medium">
                          Mật khẩu cũ:
                        </span>
                        <input
                          className="border-2 border-blue-200 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          type="password"
                          value={oldPasswordInput}
                          onChange={(e) => setOldPasswordInput(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex gap-6 items-center">
                        <span className="w-48 text-gray-600 font-medium">
                          Mật khẩu mới:
                        </span>
                        <div className="flex flex-1 gap-4">
                          <input
                            className="border-2 border-green-200 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                            type="password"
                            value={newPasswordInput}
                            onChange={(e) =>
                              setNewPasswordInput(e.target.value)
                            }
                            required
                          />
                          <button
                            type="submit"
                            className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-lg font-bold shadow hover:scale-105 transition h-full"
                            style={{ minWidth: 100 }}
                          >
                            Lưu
                          </button>
                        </div>
                      </div>
                      {changeError && (
                        <div className="text-red-500 font-semibold ml-48">
                          {changeError}
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* Thông tin kết nối */}
            {tab === "connect" && (
              <div>
                <div className="font-extrabold text-3xl mb-8 text-blue-700 flex items-center gap-3">
                  <FaUser className="text-blue-500" /> Thông tin kết nối
                </div>
                <div className="flex flex-col gap-6 max-w-lg">
                  <div className="flex items-center gap-6">
                    <FaFacebook className="text-blue-600 text-3xl" />
                    <span className="flex-1 font-medium text-lg">Facebook</span>
                    <button
                      className={`px-6 py-2 rounded-lg font-bold shadow transition ${
                        facebookConnected
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:scale-105"
                      }`}
                      onClick={() => setFacebookConnected((v) => !v)}
                      disabled={facebookConnected}
                    >
                      {facebookConnected ? "Đã kết nối" : "Kết nối"}
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                      alt="Zalo"
                      className="w-8 h-8"
                    />
                    <span className="flex-1 font-medium text-lg">Zalo</span>
                    <button
                      className={`px-6 py-2 rounded-lg font-bold shadow transition ${
                        zaloConnected
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:scale-105"
                      }`}
                      onClick={() => setZaloConnected((v) => !v)}
                      disabled={zaloConnected}
                    >
                      {zaloConnected ? "Đã kết nối" : "Kết nối"}
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <FaInstagram className="text-pink-500 text-3xl" />
                    <span className="flex-1 font-medium text-lg">
                      Instagram
                    </span>
                    <button
                      className={`px-6 py-2 rounded-lg font-bold shadow transition ${
                        instagramConnected
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:scale-105"
                      }`}
                      onClick={() => setInstagramConnected((v) => !v)}
                      disabled={instagramConnected}
                    >
                      {instagramConnected ? "Đã kết nối" : "Kết nối"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bảo vệ tài khoản */}
            {tab === "security" && (
              <div>
                <div className="font-extrabold text-3xl mb-8 text-blue-700 flex items-center gap-3">
                  <FaShieldAlt className="text-blue-500" /> Bảo vệ tài khoản
                </div>
                <div className="flex flex-col gap-6 max-w-xl">
                  <div className="flex items-center gap-4">
                    <FaIdCard className="text-gray-500 text-2xl" />
                    <span className="w-48 text-gray-600 font-medium">
                      CMND:
                    </span>
                    <input
                      className="border-2 border-blue-200 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      value={cmnd}
                      onChange={(e) => setCmnd(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-gray-500 text-2xl" />
                    <span className="w-48 text-gray-600 font-medium">
                      Email bảo vệ:
                    </span>
                    <input
                      className="border-2 border-blue-200 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-gray-500 text-2xl" />
                    <span className="w-48 text-gray-600 font-medium">
                      SĐT bảo vệ:
                    </span>
                    <input
                      className="border-2 border-blue-200 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    <FaTrash className="text-red-500 text-2xl" />
                    <span className="w-48 text-gray-600 font-medium">
                      Xóa tài khoản:
                    </span>
                    <button
                      className="px-6 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-lg font-bold shadow hover:scale-105 transition"
                      onClick={() => setShowDelete(true)}
                    >
                      Xóa tài khoản
                    </button>
                  </div>
                  {showDelete && (
                    <div className="mt-6 bg-red-50 border border-red-300 rounded-xl p-6 shadow animate-fade-in">
                      <div className="mb-4 text-red-700 font-semibold text-lg">
                        Bạn có chắc chắn muốn xóa tài khoản không? Hành động này
                        không thể hoàn tác.
                      </div>
                      <div className="flex gap-4">
                        <button
                          className="px-6 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-lg font-bold shadow hover:scale-105 transition"
                          onClick={() => {
                            setShowDelete(false);
                            // Thực hiện xóa tài khoản ở đây
                          }}
                        >
                          Xác nhận xóa
                        </button>
                        <button
                          className="px-6 py-2 bg-gray-200 rounded-lg font-bold hover:bg-gray-300 transition"
                          onClick={() => setShowDelete(false)}
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}