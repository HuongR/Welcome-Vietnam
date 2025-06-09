import React, { useState, useRef, useEffect } from "react";
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaVideo,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";

// Album mẫu
const initialAlbums = [
  {
    id: 1,
    name: "Video của bạn",
    videos: [
      "/videos/vietnam-intro.mp4",
      "/videos/sample1.mp4",
      "/videos/sample2.mp4",
    ],
    type: "my",
  },
];

export default function Video() {
  const [albums, setAlbums] = useState(initialAlbums);
  const [tab, setTab] = useState("album");
  const [showAddAlbum, setShowAddAlbum] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [showEditAlbum, setShowEditAlbum] = useState(false);
  const [editAlbumName, setEditAlbumName] = useState("");
  const [editAlbumId, setEditAlbumId] = useState(null);
  const fileInputRef = useRef(null);
  const fileInputAlbumRef = useRef(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [showAddToAlbum, setShowAddToAlbum] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  // Lấy tất cả video của bạn (không trùng lặp)
  const allMyVideos = Array.from(
    new Set(albums.flatMap((album) => album.videos))
  );

  // Thêm video từ "Video của bạn" vào album
  const handleAddMyVideosToAlbum = (albumId) => {
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === albumId
          ? {
              ...album,
              videos: [
                ...album.videos,
                ...selectedVideos.filter((vid) => !album.videos.includes(vid)),
              ],
            }
          : album
      )
    );
    setShowAddToAlbum(false);
    setSelectedVideos([]);
  };

  // Thêm video từ thiết bị vào album
  const handleAddVideosFromDevice = (e, albumId) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    const urls = files.map((file) => URL.createObjectURL(file));
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === albumId
          ? { ...album, videos: [...album.videos, ...urls] }
          : album
      )
    );
    e.target.value = "";
  };

  // Xóa album
  const handleDeleteAlbum = (albumId) => {
    if ([1].includes(albumId)) return;
    setAlbums(albums.filter((a) => a.id !== albumId));
  };

  // Sửa tên album
  const handleEditAlbum = () => {
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === editAlbumId ? { ...album, name: editAlbumName } : album
      )
    );
    setShowEditAlbum(false);
    setEditAlbumId(null);
    setEditAlbumName("");
  };

  // Thêm album mới
  const handleAddAlbum = () => {
    if (!newAlbumName.trim()) return;
    const newAlbum = {
      id: Date.now(),
      name: newAlbumName,
      videos: [],
    };
    setAlbums([...albums, newAlbum]);
    setNewAlbumName("");
    setShowAddAlbum(false);
  };

  // Xóa video khỏi album
  const handleDeleteVideoFromAlbum = (albumId, vid) => {
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === albumId
          ? { ...album, videos: album.videos.filter((v) => v !== vid) }
          : album
      )
    );
  };

  // Xóa video khỏi "Video của bạn" (xóa ở tất cả album)
  const handleDeleteVideoFromMy = (vid) => {
    setAlbums((prev) =>
      prev.map((album) => ({
        ...album,
        videos: album.videos.filter((v) => v !== vid),
      }))
    );
  };

  // Chọn video từ "Video của bạn" để thêm vào album
  const handleSelectVideoToggle = (vid) => {
    setSelectedVideos((prev) =>
      prev.includes(vid) ? prev.filter((v) => v !== vid) : [...prev, vid]
    );
  };

  // Dropdown auto close khi click ngoài
  useEffect(() => {
    if (!showAddDropdown) return;
    const handler = () => setShowAddDropdown(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [showAddDropdown]);

  // UI
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow p-6 min-h-[600px] text-gray-900">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="font-bold text-xl mb-1">Video</div>
          <div className="flex gap-8">
            <button
              className={`pb-2 font-semibold ${
                tab === "my"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("my")}
            >
              Video của bạn
            </button>
            <button
              className={`pb-2 font-semibold ${
                tab === "album"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("album")}
            >
              Album
            </button>
          </div>
        </div>
        {/* Nâng cấp nút Thêm video cho album với dropdown 2 lựa chọn */}
        {tab === "album" && selectedAlbumId && (
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition font-semibold shadow"
              onClick={(e) => {
                e.stopPropagation();
                setShowAddDropdown((v) => !v);
              }}
              type="button"
            >
              <FaPlus /> Thêm video <FaChevronDown className="ml-1" />
            </button>
            {showAddDropdown && (
              <div
                className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 flex flex-col"
                style={{
                  minWidth: 320,
                  width: 320,
                  whiteSpace: "nowrap",
                  padding: 0,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="text-left px-6 py-3 hover:bg-blue-50 flex items-center gap-3 text-gray-700 w-full"
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    setShowAddDropdown(false);
                    fileInputAlbumRef.current.click();
                  }}
                  type="button"
                >
                  <FaPlus /> Thêm từ thiết bị
                </button>
                <button
                  className="text-left px-6 py-3 hover:bg-blue-50 flex items-center gap-3 text-gray-700 w-full"
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    setShowAddDropdown(false);
                    setShowAddToAlbum(true);
                    setSelectedVideos([]);
                  }}
                  type="button"
                >
                  <FaVideo /> Thêm từ video của bạn
                </button>
              </div>
            )}
            <input
              ref={fileInputAlbumRef}
              type="file"
              accept="video/*"
              multiple
              className="hidden"
              onChange={(e) => handleAddVideosFromDevice(e, selectedAlbumId)}
            />
          </div>
        )}
      </div>

      {tab === "album" && (
        <div className="mt-4">
          <div
            className="flex flex-wrap gap-6 justify-center"
            style={{ width: "100%" }}
          >
            {/* Tạo album */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: 240,
                height: 240,
                borderRadius: 16,
                background: "#f3f4f6",
                border: "2px dashed #60a5fa",
                cursor: "pointer",
                marginBottom: 8,
              }}
              onClick={() => setShowAddAlbum(true)}
            >
              <div className="text-5xl mb-2 text-blue-400">
                <FaPlus />
              </div>
              <div
                className="font-semibold text-blue-600"
                style={{ fontSize: 18 }}
              >
                Tạo album
              </div>
            </div>
            {/* Danh sách album */}
            {albums.map((album) => (
              <div
                key={album.id}
                className="relative flex flex-col bg-gray-100 shadow hover:shadow-lg group"
                style={{
                  width: 240,
                  height: 240,
                  borderRadius: 16,
                  overflow: "hidden",
                  marginBottom: 8,
                }}
              >
                <div
                  className="flex items-center justify-center bg-gray-200 cursor-pointer"
                  onClick={() => setSelectedAlbumId(album.id)}
                  style={{
                    width: 240,
                    height: 180,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  {album.videos[0] ? (
                    <video
                      src={album.videos[0]}
                      style={{
                        width: 240,
                        height: 180,
                        objectFit: "cover",
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }}
                      controls={false}
                      muted
                    />
                  ) : (
                    <span className="text-5xl text-gray-400">
                      <FaVideo />
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-between p-3">
                  <div>
                    <div className="font-semibold truncate">{album.name}</div>
                    <div className="text-xs text-gray-500">
                      {album.videos.length} mục
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="flex-1 flex items-center gap-1 px-2 py-1 rounded bg-gray-200 hover:bg-blue-100 text-blue-600 text-sm"
                      onClick={() => {
                        setEditAlbumId(album.id);
                        setEditAlbumName(album.name);
                        setShowEditAlbum(true);
                      }}
                    >
                      <FaEdit /> Đổi tên
                    </button>
                    <button
                      className="flex-1 flex items-center gap-1 px-2 py-1 rounded bg-gray-200 hover:bg-red-100 text-red-600 text-sm"
                      onClick={() => handleDeleteAlbum(album.id)}
                    >
                      <FaTrash /> Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Modal tạo album */}
          {showAddAlbum && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-full max-w-sm">
                <h3 className="text-lg font-bold mb-4">Tạo album mới</h3>
                <input
                  className="w-full px-3 py-2 rounded border bg-gray-50 text-gray-900 mb-4 outline-none"
                  placeholder="Tên album"
                  value={newAlbumName}
                  onChange={(e) => setNewAlbumName(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleAddAlbum}
                  >
                    Tạo
                  </button>
                  <button
                    className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowAddAlbum(false)}
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Modal sửa album */}
          {showEditAlbum && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-full max-w-sm">
                <h3 className="text-lg font-bold mb-4">Sửa tên album</h3>
                <input
                  className="w-full px-3 py-2 rounded border bg-gray-50 text-gray-900 mb-4 outline-none"
                  placeholder="Tên album"
                  value={editAlbumName}
                  onChange={(e) => setEditAlbumName(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleEditAlbum}
                  >
                    Lưu
                  </button>
                  <button
                    className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowEditAlbum(false)}
                  >
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal thêm video vào album - chỉ hiển thị video của bạn, nổi lên trên */}
      {showAddToAlbum && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
          <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-full max-w-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl hover:text-blue-600"
              onClick={() => setShowAddToAlbum(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">
              Chọn video từ mục video của bạn
            </h3>
            <div className="grid grid-cols-4 gap-4 mb-4 max-h-64 overflow-y-auto">
              {allMyVideos.length === 0 && (
                <div className="col-span-4 text-center text-gray-400 py-8">
                  Chưa có video nào.
                </div>
              )}
              {allMyVideos.map((vid, idx) => (
                <div
                  key={idx}
                  className={`relative rounded overflow-hidden border-2 ${
                    selectedVideos.includes(vid)
                      ? "border-blue-600"
                      : "border-transparent"
                  } cursor-pointer`}
                  onClick={() => handleSelectVideoToggle(vid)}
                  style={{ width: 180, height: 180 }}
                >
                  <video
                    src={vid}
                    className="w-full h-full object-cover"
                    style={{ width: 180, height: 180, objectFit: "cover" }}
                    controls={false}
                    muted
                  />
                  {selectedVideos.includes(vid) && (
                    <span className="absolute top-1 right-1 bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs">
                      <FaCheck />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => handleAddMyVideosToAlbum(selectedAlbumId)}
                disabled={selectedVideos.length === 0}
              >
                Thêm vào album
              </button>
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => {
                  setShowAddToAlbum(false);
                  setSelectedVideos([]);
                }}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Xem video trong album */}
      {selectedAlbumId && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-8 relative text-gray-900">
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl hover:text-blue-600"
              onClick={() => setSelectedAlbumId(null)}
            >
              ×
            </button>
            <div className="flex items-center mb-6">
              <div className="font-bold text-xl flex-1">
                {albums.find((a) => a.id === selectedAlbumId)?.name}
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAddDropdown((v) => !v);
                  }}
                >
                  <FaPlus /> Thêm video <FaChevronDown className="ml-1" />
                </button>
                {showAddDropdown && (
                  <div
                    className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50 flex flex-col"
                    style={{
                      minWidth: 320,
                      width: 320,
                      whiteSpace: "nowrap",
                      padding: 0,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="text-left px-6 py-3 hover:bg-blue-50 flex items-center gap-3 text-gray-700 w-full"
                      style={{ fontSize: 16 }}
                      onClick={() => {
                        setShowAddDropdown(false);
                        fileInputAlbumRef.current.click();
                      }}
                      type="button"
                    >
                      <FaPlus /> Thêm từ thiết bị
                    </button>
                    <button
                      className="text-left px-6 py-3 hover:bg-blue-50 flex items-center gap-3 text-gray-700 w-full"
                      style={{ fontSize: 16 }}
                      onClick={() => {
                        setShowAddDropdown(false);
                        setShowAddToAlbum(true);
                        setSelectedVideos([]);
                      }}
                      type="button"
                    >
                      <FaVideo /> Thêm từ video của bạn
                    </button>
                  </div>
                )}
                <input
                  ref={fileInputAlbumRef}
                  type="file"
                  accept="video/*"
                  multiple
                  className="hidden"
                  onChange={(e) =>
                    handleAddVideosFromDevice(e, selectedAlbumId)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {albums
                .find((a) => a.id === selectedAlbumId)
                ?.videos.map((vid, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded overflow-hidden bg-gray-100 border"
                    style={{ width: 180, height: 180 }}
                  >
                    <video
                      src={vid}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      style={{ width: 180, height: 180, objectFit: "cover" }}
                      controls
                    />
                    <button
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-1 text-gray-700 shadow hover:bg-red-100 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                      title="Xóa video"
                      onClick={() =>
                        handleDeleteVideoFromAlbum(selectedAlbumId, vid)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              {albums.find((a) => a.id === selectedAlbumId)?.videos.length ===
                0 && (
                <div className="col-span-4 text-center text-gray-400 py-8">
                  Chưa có video nào.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video của bạn */}
      {tab === "my" && (
        <div>
          <div
            className="flex flex-wrap gap-6 justify-center"
            style={{ width: "100%" }}
          >
            {/* Vùng thêm video */}
            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: 180,
                height: 180,
                borderRadius: 16,
                background: "#f3f4f6",
                border: "2px dashed #60a5fa",
                cursor: "pointer",
                marginBottom: 8,
              }}
              onClick={() => fileInputRef.current.click()}
            >
              <div className="text-4xl mb-2 text-blue-400">
                <FaPlus />
              </div>
              <div
                className="font-semibold text-blue-600 text-center"
                style={{ fontSize: 16 }}
              >
                Nhấn để thêm video
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  // Thêm video vào tất cả album (giả lập "video của bạn")
                  const files = Array.from(e.target.files);
                  if (!files.length) return;
                  const urls = files.map((file) => URL.createObjectURL(file));
                  setAlbums((prev) =>
                    prev.map((album) => ({
                      ...album,
                      videos: [...album.videos, ...urls],
                    }))
                  );
                  e.target.value = "";
                }}
              />
            </div>
            {/* Hiển thị video của bạn */}
            {allMyVideos.map((vid, idx) => (
              <div
                key={idx}
                className="relative group rounded overflow-hidden bg-gray-100 border"
                style={{ width: 180, height: 180, marginBottom: 8 }}
              >
                <video
                  src={vid}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  style={{ width: 180, height: 180, objectFit: "cover" }}
                  controls
                />
                <button
                  className="absolute top-2 right-2 bg-white/80 rounded-full p-1 text-gray-700 shadow hover:bg-red-100 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                  title="Xóa video"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    handleDeleteVideoFromMy(vid);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-2">
            Nhấn vào ô "+" để thêm video mới
          </div>
        </div>
      )}
    </div>
  );
}
