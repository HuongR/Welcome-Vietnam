import React, { useState, useRef } from "react";
import Header from "../../../components/layout/Header";
import Post from "./Post";
import Information from "./Information";
import Images from "./Images";
import Video from "./Video";

export default function Profile() {
  const [tab, setTab] = useState("posts");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/300");
  const [cover, setCover] = useState(
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
  );
  const [name, setName] = useState("Đỗ Hưởng");

  // Cover position state
  const [coverPosition, setCoverPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imgStart, setImgStart] = useState({ x: 0, y: 0 });
  const [showCoverEdit, setShowCoverEdit] = useState(false);
  const [tempCover, setTempCover] = useState(null);

  const coverRef = useRef();

  // Đổi avatar
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  // Đổi cover (mở modal chỉnh vị trí)
  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTempCover(url);
      setShowCoverEdit(true);
      setCoverPosition({ x: 0, y: 0 });
    }
  };

  // Lưu vị trí cover
  const handleSaveCover = () => {
    setCover(tempCover);
    setShowCoverEdit(false);
  };

  // Hủy chỉnh sửa cover
  const handleCancelCover = () => {
    setTempCover(null);
    setShowCoverEdit(false);
    setCoverPosition({ x: 0, y: 0 });
  };

  // Kéo ảnh cover
  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setImgStart({ ...coverPosition });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setCoverPosition({
      x: imgStart.x + dx,
      y: imgStart.y + dy,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    setDragging(true);
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setImgStart({ ...coverPosition });
  };

  const handleTouchMove = (e) => {
    if (!dragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.x;
    const dy = e.touches[0].clientY - dragStart.y;
    setCoverPosition({
      x: imgStart.x + dx,
      y: imgStart.y + dy,
    });
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  // Chiều cao header (ví dụ 100px), cover sẽ chạm sát header
  const HEADER_HEIGHT = 100;
  const AVATAR_OVERLAP = 72;

  // Cover hiển thị
  const COVER_HEIGHT = 450;

  return (
    <div
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center"
      style={{ paddingTop: HEADER_HEIGHT - 30 }}
    >
      <Header />
      {/* Cover */}
      <div
        className="relative rounded-b-xl overflow-hidden shadow"
        style={{
          height: COVER_HEIGHT,
          marginTop: 0,
          width: 1250,
          minWidth: 320,
          maxWidth: 1250,
        }}
      >
        <img
          ref={coverRef}
          src={cover}
          alt="cover"
          className="w-full h-full object-cover"
          style={{
            objectPosition: `${coverPosition.x}px ${coverPosition.y}px`,
            transition: dragging ? "none" : "object-position 0.2s",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Nút chỉnh sửa ảnh nền */}
        <label
          htmlFor="cover-upload"
          className="absolute bottom-4 right-4 bg-black/80 rounded-full p-2 cursor-pointer transition hover:bg-blue-600 hover:scale-110"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            pointerEvents: "auto",
          }}
          title="Đổi ảnh nền"
        >
          <svg
            width={22}
            height={22}
            fill="none"
            stroke="white"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M15.232 5.232l3.536 3.536M9 13l6-6m2-2a2.828 2.828 0 114 4L7.5 21H3v-4.5L17 5z"></path>
          </svg>
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleCoverChange}
            tabIndex={-1}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </label>
        {/* Modal chỉnh vị trí cover */}
        {showCoverEdit && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 relative flex flex-col items-center">
              <div className="font-bold text-lg mb-4">Chỉnh vị trí ảnh nền</div>
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  width: 1250,
                  height: COVER_HEIGHT,
                  background: "#eee",
                  maxWidth: "100vw",
                  touchAction: "none",
                  cursor: dragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <img
                  src={tempCover}
                  alt="cover-edit"
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: `${coverPosition.x}px ${coverPosition.y}px`,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                  onClick={handleSaveCover}
                >
                  Lưu
                </button>
                <button
                  className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 font-semibold"
                  onClick={handleCancelCover}
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Avatar + Name */}
      <div
        className="relative flex items-center px-8"
        style={{
          marginTop: `-${AVATAR_OVERLAP}px`,
          width: "80%",
          minWidth: 320,
          maxWidth: 1200,
        }}
      >
        <div className="relative">
          <img
            src={avatar}
            alt="avatar"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover bg-white"
          />
          <label className="absolute bottom-2 right-2 bg-black/70 rounded-full p-1 cursor-pointer hover:bg-blue-600 transition">
            <svg
              width={18}
              height={18}
              fill="none"
              stroke="white"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M15.232 5.232l3.536 3.536M9 13l6-6m2-2a2.828 2.828 0 114 4L7.5 21H3v-4.5L17 5z"></path>
            </svg>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        </div>
        {/* Tên và bạn bè */}
        <div
          className="flex flex-col justify-center ml-6"
          style={{ minHeight: 100 }}
        >
          <div style={{ marginTop: 80, minWidth: 260 }}>
            <input
              className="text-3xl font-bold bg-transparent border-none outline-none text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", background: "transparent" }}
            />
            <div className="text-gray-700 mt-1 text-lg">436 người bạn</div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div
        className="mt-8 px-8"
        style={{
          width: "80%",
          minWidth: 320,
          maxWidth: 1200,
        }}
      >
        <div className="flex gap-4 border-b">
          <button
            className={`py-2 px-4 font-semibold ${
              tab === "posts"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-700"
            }`}
            onClick={() => setTab("posts")}
          >
            Bài viết
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              tab === "info"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-700"
            }`}
            onClick={() => setTab("info")}
          >
            Thông tin cá nhân
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              tab === "photos"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-700"
            }`}
            onClick={() => setTab("photos")}
          >
            Kho ảnh
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              tab === "videos"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-700"
            }`}
            onClick={() => setTab("videos")}
          >
            Kho video
          </button>
        </div>
        <div className="bg-white rounded-b-xl shadow min-h-[200px]">
          {tab === "posts" && <Post />}
          {tab === "info" && <Information />}
          {tab === "photos" && <Images />}
          {tab === "videos" && <Video />}
        </div>
      </div>
    </div>
  );
}
