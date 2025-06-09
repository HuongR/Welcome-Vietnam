import React, { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaHome,
  FaBirthdayCake,
  FaPhone,
  FaLock,
  FaGlobe,
  FaPen,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const initialInfo = [
  {
    icon: <FaBriefcase className="text-blue-500" />,
    label: "Làm việc tại",
    value: "Hải Dương",
    visible: true,
  },
  {
    icon: <FaBirthdayCake className="text-green-500" />,
    label: "Năm sinh",
    value: "2003",
    visible: true,
  },
  {
    icon: <FaHome className="text-yellow-500" />,
    label: "Sống tại",
    value: "Hải Dương",
    visible: true,
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500" />,
    label: "Đến từ",
    value: "Gia Lộc",
    visible: true,
  },
  {
    icon: <FaPhone className="text-gray-500" />,
    label: "",
    value: "036 482 3630",
    sub: "Di động",
    visible: false,
  },
];

export default function Information() {
  const [info, setInfo] = useState(initialInfo);
  const [editIdx, setEditIdx] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editSub, setEditSub] = useState("");

  const toggleVisibility = (idx) => {
    setInfo((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setEditValue(info[idx].value);
    setEditSub(info[idx].sub || "");
  };

  const handleSave = (idx) => {
    setInfo((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, value: editValue, sub: editSub } : item
      )
    );
    setEditIdx(null);
    setEditValue("");
    setEditSub("");
  };

  const handleCancel = () => {
    setEditIdx(null);
    setEditValue("");
    setEditSub("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
        <span>Thông tin cá nhân</span>
      </h2>
      <ul className="flex flex-col gap-4">
        {info.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center bg-gray-50 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition group"
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            <div className="flex-1">
              {editIdx === idx ? (
                <div className="flex flex-col gap-1">
                  <input
                    className="border-b border-blue-400 px-2 py-1 rounded bg-white text-gray-800 outline-none font-semibold"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  {typeof item.sub !== "undefined" && (
                    <input
                      className="border-b border-gray-300 px-2 py-1 rounded bg-white text-gray-600 outline-none text-xs"
                      value={editSub}
                      onChange={(e) => setEditSub(e.target.value)}
                      placeholder="Ghi chú"
                    />
                  )}
                </div>
              ) : (
                <span className="font-medium text-gray-800">
                  {item.label}
                  {item.label && (
                    <span className="font-semibold ml-1">{item.value}</span>
                  )}
                  {!item.label && (
                    <span className="font-semibold">{item.value}</span>
                  )}
                  {item.sub && (
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  )}
                </span>
              )}
            </div>
            <button
              className={`ml-2 flex items-center gap-1 px-2 py-1 rounded-full border transition text-xs font-medium
                ${item.visible
                  ? "bg-blue-50 border-blue-400 text-blue-600 hover:bg-blue-100"
                  : "bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200"}
              `}
              onClick={() => toggleVisibility(idx)}
              title={item.visible ? "Hiển thị với mọi người" : "Chỉ mình tôi"}
            >
              {item.visible ? <FaGlobe /> : <FaLock />}
              {item.visible ? "Công khai" : "Riêng tư"}
            </button>
            {editIdx === idx ? (
              <>
                <button
                  className="ml-2 px-2 py-1 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition"
                  title="Lưu"
                  onClick={() => handleSave(idx)}
                >
                  <FaCheck />
                </button>
                <button
                  className="ml-2 px-2 py-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
                  title="Hủy"
                  onClick={handleCancel}
                >
                  <FaTimes />
                </button>
              </>
            ) : (
              <button
                className="ml-2 opacity-0 group-hover:opacity-100 transition px-2 py-1 rounded-full hover:bg-gray-200"
                title="Chỉnh sửa"
                onClick={() => handleEdit(idx)}
              >
                <FaPen className="text-gray-500" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}