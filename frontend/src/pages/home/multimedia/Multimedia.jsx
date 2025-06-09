import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/layout/Header";
import {
  FaRegThumbsUp,
  FaRegCommentDots,
  FaRegShareSquare,
  FaRegHeart,
  FaRegLaughSquint,
  FaRegSurprise,
  FaRegSadTear,
  FaRegAngry,
  FaPaperclip,
  FaRegImage,
  FaRegSmile,
} from "react-icons/fa";
import { BsMessenger, BsInstagram, BsLink45Deg } from "react-icons/bs";

// --- Utility Functions ---
const getTimeAgo = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 60000);
  if (diff < 1) return "Vừa xong";
  if (diff < 60) return `${diff} phút trước`;
  if (diff < 1440) return `${Math.floor(diff / 60)} giờ trước`;
  return `${Math.floor(diff / 1440)} ngày trước`;
};

const formatNumber = (num) => {
  if (num >= 1_000_000_000)
    return (
      (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + "T"
    );
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "Tr";
  if (num >= 1_000)
    return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "k";
  return num;
};

const getSortedUsedEmojis = (reactions, emojiList) =>
  emojiList
    .filter((e) => reactions && reactions[e.key] > 0)
    .sort((a, b) => (reactions[b.key] || 0) - (reactions[a.key] || 0));

const getSortedComments = (post, commentSort) => {
  const sortType = commentSort[post.id] || "newest";
  let arr = [...post.comments];
  if (sortType === "mostLiked") {
    arr.sort((a, b) => (b.reactions?.like || 0) - (a.reactions?.like || 0));
  } else {
    arr.sort((a, b) => b.createdAt - a.createdAt);
  }
  const idToComment = {};
  arr.forEach((c) => (idToComment[c.id] = c));
  const result = [];
  arr.forEach((c) => {
    if (!c.parentId) {
      result.push({ ...c, level: 0 });
      let replies = arr.filter((r) => r.parentId === c.id);
      while (replies.length > 0) {
        const nextReplies = [];
        replies.forEach((r) => {
          result.push({ ...r, level: 1 });
          nextReplies.push(...arr.filter((x) => x.parentId === r.id));
        });
        replies = nextReplies;
      }
    }
  });
  return result;
};

// --- Constants ---
const initialPosts = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    avatar: "/images/multimedia/avatar1.jpg",
    content: "Chào mọi người! Đây là ảnh mình vừa chụp.",
    createdAt: new Date(Date.now() - 1000 * 60 * 10),
    media: [{ type: "image", url: "/images/multimedia/swimming.jpg" }],
    likes: 2,
    reactions: { like: 2, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
    userReaction: null,
    comments: [
      {
        id: 1,
        user: "Trần B",
        avatar: "/images/multimedia/avatar2.jpg",
        text: "Đẹp quá!",
        likes: 2,
        createdAt: new Date(Date.now() - 1000 * 60 * 8),
        reactions: { like: 2, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
        userReaction: null,
        parentId: null,
      },
      {
        id: 2,
        user: "Lê C",
        avatar: "/images/multimedia/avatar3.jpg",
        text: "Ảnh chất lượng thật.",
        likes: 1,
        createdAt: new Date(Date.now() - 1000 * 60 * 7),
        reactions: { like: 1, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
        userReaction: null,
        parentId: null,
      },
    ],
    shares: 0,
  },
  {
    id: 2,
    user: "Lê Thị B",
    avatar: "/images/multimedia/avatar2.jpg",
    content: "Video kỷ niệm chuyến đi Đà Lạt.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    media: [{ type: "video", url: "/videos/vietnam-intro.mp4" }],
    likes: 1,
    reactions: { like: 1, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
    userReaction: null,
    comments: [],
    shares: 0,
  },
];

const emojiList = [
  {
    key: "like",
    icon: <FaRegThumbsUp className="text-blue-600" />,
    label: "Thích",
  },
  {
    key: "love",
    icon: <FaRegHeart className="text-red-500" />,
    label: "Yêu thích",
  },
  {
    key: "haha",
    icon: <FaRegLaughSquint className="text-yellow-400" />,
    label: "Haha",
  },
  {
    key: "wow",
    icon: <FaRegSurprise className="text-yellow-400" />,
    label: "Wow",
  },
  {
    key: "sad",
    icon: <FaRegSadTear className="text-blue-400" />,
    label: "Buồn",
  },
  {
    key: "angry",
    icon: <FaRegAngry className="text-orange-600" />,
    label: "Phẫn nộ",
  },
];

const commentEmojiList = [...emojiList];

const commentSortOptions = [
  { key: "newest", label: "Mới nhất" },
  { key: "mostLiked", label: "Like nhiều nhất" },
];

// --- Main Component ---
const Multimedia = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newContent, setNewContent] = useState("");
  const [newMedia, setNewMedia] = useState([]);
  const [commentInputs, setCommentInputs] = useState({});
  const [showEmoji, setShowEmoji] = useState({});
  const [showShare, setShowShare] = useState({});
  const [commentSort, setCommentSort] = useState({});
  const [showCommentEmoji, setShowCommentEmoji] = useState({});
  const [commentMedia, setCommentMedia] = useState({});
  const [replyTo, setReplyTo] = useState({});
  const emojiPopupRefs = useRef({});
  const commentEmojiPopupRefs = useRef({});
  const emojiTimeouts = useRef({});
  const commentEmojiTimeouts = useRef({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // --- Handlers ---
  const handlePost = () => {
    if (!newContent && newMedia.length === 0) return;
    setPosts([
      {
        id: Date.now(),
        user: "Bạn",
        avatar: "/images/avatar-default.png",
        content: newContent,
        createdAt: new Date(),
        media: newMedia,
        likes: 0,
        reactions: { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
        userReaction: null,
        comments: [],
        shares: 0,
      },
      ...posts,
    ]);
    setNewContent("");
    setNewMedia([]);
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    const mediaArr = files
      .map((file) => {
        if (file.type.startsWith("image/")) {
          return { type: "image", url: URL.createObjectURL(file) };
        }
        if (file.type.startsWith("video/")) {
          return { type: "video", url: URL.createObjectURL(file) };
        }
        return null;
      })
      .filter(Boolean);
    setNewMedia(mediaArr);
  };

  const handleReaction = (postId, type) => {
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post;
        let newReactions = { ...post.reactions };
        if (post.userReaction === type) {
          newReactions[type]--;
          return { ...post, reactions: newReactions, userReaction: null };
        }
        if (post.userReaction) newReactions[post.userReaction]--;
        newReactions[type]++;
        return { ...post, reactions: newReactions, userReaction: type };
      })
    );
    setShowEmoji({ ...showEmoji, [postId]: false });
  };

  const handleCommentReaction = (postId, commentId, type) => {
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post;
        return {
          ...post,
          comments: post.comments.map((c) => {
            if (c.id !== commentId) return c;
            let newReactions = { ...c.reactions };
            if (c.userReaction === type) {
              newReactions[type]--;
              return { ...c, reactions: newReactions, userReaction: null };
            }
            if (c.userReaction) newReactions[c.userReaction]--;
            newReactions[type]++;
            return { ...c, reactions: newReactions, userReaction: type };
          }),
        };
      })
    );
    setShowCommentEmoji({ ...showCommentEmoji, [commentId]: false });
  };

  const handleShare = (id) => {
    setShowShare({ ...showShare, [id]: !showShare[id] });
  };

  const handleCommentMediaChange = (postId, e) => {
    const files = Array.from(e.target.files);
    setCommentMedia({
      ...commentMedia,
      [postId]: files.map((file) => ({
        type: file.type.startsWith("image/") ? "image" : "file",
        url: URL.createObjectURL(file),
        name: file.name,
      })),
    });
  };

  const handleAddEmojiToComment = (postId, emoji) => {
    setCommentInputs({
      ...commentInputs,
      [postId]: (commentInputs[postId] || "") + emoji,
    });
  };

  const handleReply = (postId, comment) => {
    setReplyTo({ ...replyTo, [postId]: comment.id });
    setCommentInputs({
      ...commentInputs,
      [postId]: `@${comment.user} `,
    });
  };

  const handleComment = (postId) => {
    if (!commentInputs[postId] && !commentMedia[postId]) return;
    setPosts(
      posts.map((post) => {
        if (post.id !== postId) return post;
        if (replyTo[postId]) {
          const parentIdx = post.comments.findIndex(
            (c) => c.id === replyTo[postId]
          );
          if (parentIdx === -1) return post;
          const parentComment = post.comments[parentIdx];
          const replyComment = {
            id: Date.now(),
            user: "Bạn",
            avatar: "/images/avatar-default.png",
            text: commentInputs[postId],
            media: commentMedia[postId] || [],
            likes: 0,
            createdAt: new Date(),
            reactions: { like: 0, love: 0, haha: 0, wow: 0, sad: 0, angry: 0 },
            userReaction: null,
            parentId: parentComment.id,
          };
          let insertIdx = parentIdx + 1;
          while (
            insertIdx < post.comments.length &&
            post.comments[insertIdx].parentId === parentComment.id
          ) {
            insertIdx++;
          }
          const newComments = [
            ...post.comments.slice(0, insertIdx),
            replyComment,
            ...post.comments.slice(insertIdx),
          ];
          return { ...post, comments: newComments };
        } else {
          return {
            ...post,
            comments: [
              {
                id: Date.now(),
                user: "Bạn",
                avatar: "/images/avatar-default.png",
                text: commentInputs[postId],
                media: commentMedia[postId] || [],
                likes: 0,
                createdAt: new Date(),
                reactions: {
                  like: 0,
                  love: 0,
                  haha: 0,
                  wow: 0,
                  sad: 0,
                  angry: 0,
                },
                userReaction: null,
                parentId: null,
              },
              ...post.comments,
            ],
          };
        }
      })
    );
    setCommentInputs({ ...commentInputs, [postId]: "" });
    setCommentMedia({ ...commentMedia, [postId]: undefined });
    setReplyTo({ ...replyTo, [postId]: null });
  };

  // --- Emoji Hover Handlers ---
  const handleEmojiMouseEnter = (postId) => {
    if (emojiTimeouts.current[postId]) {
      clearTimeout(emojiTimeouts.current[postId]);
      emojiTimeouts.current[postId] = null;
    }
    setShowEmoji((prev) => ({ ...prev, [postId]: true }));
  };

  const handleEmojiMouseLeave = (postId) => {
    emojiTimeouts.current[postId] = setTimeout(() => {
      setShowEmoji((prev) => ({ ...prev, [postId]: false }));
    }, 200);
  };

  const handleCommentEmojiMouseEnter = (commentId) => {
    if (commentEmojiTimeouts.current[commentId]) {
      clearTimeout(commentEmojiTimeouts.current[commentId]);
      commentEmojiTimeouts.current[commentId] = null;
    }
    setShowCommentEmoji((prev) => ({ ...prev, [commentId]: true }));
  };

  const handleCommentEmojiMouseLeave = (commentId) => {
    commentEmojiTimeouts.current[commentId] = setTimeout(() => {
      setShowCommentEmoji((prev) => ({ ...prev, [commentId]: false }));
    }, 200);
  };

  // --- Render Functions ---
  const renderComment = (c, post) => {
    const isChild = !!c.parentId;
    const usedEmojis = getSortedUsedEmojis(c.reactions, commentEmojiList);
    return (
      <div
        key={c.id}
        className="w-full"
        style={{
          fontSize: isChild ? "75%" : "100%",
          marginLeft: isChild ? 32 : 0,
        }}
      >
        <div
          className={`flex items-start gap-2 w-full ${
            isChild ? "" : "bg-[#f5f6fa]"
          }`}
          style={{
            borderRadius: 8,
            marginBottom: 2,
            padding: isChild ? "2px 0" : "8px 8px",
            background: isChild ? "transparent" : "#f5f6fa",
          }}
        >
          <img
            src={c.avatar}
            alt={c.user}
            className="w-8 h-8 rounded-full object-cover border"
          />
          <div className="flex-1 relative">
            <div
              className="rounded-xl px-3 py-2 shadow-sm backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.85)",
                boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)",
                border: "1px solid #e5e7eb",
                marginBottom: 2,
              }}
            >
              <span className="font-semibold">{c.user}</span>
              <span className="ml-2 text-xs text-gray-500">
                {getTimeAgo(c.createdAt)}
              </span>
              <div className="text-sm break-words mt-1">{c.text}</div>
              {c.media &&
                c.media.map((m, idx) =>
                  m.type === "image" ? (
                    <img
                      key={idx}
                      src={m.url}
                      alt="img"
                      className="w-24 h-24 object-cover rounded-lg mt-1"
                    />
                  ) : (
                    <a
                      key={idx}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-blue-600 mt-1"
                    >
                      <FaPaperclip className="inline mr-1" />
                      {m.name}
                    </a>
                  )
                )}
            </div>
            <div className="flex items-center gap-1 mt-1 ml-1">
              {usedEmojis.map((e) => (
                <span key={e.key} className="text-base">
                  {e.icon}
                </span>
              ))}
              {c.reactions &&
                Object.values(c.reactions).reduce((a, b) => a + b, 0) > 0 && (
                  <span className="text-xs text-gray-700 font-semibold ml-1">
                    {formatNumber(
                      Object.values(c.reactions).reduce((a, b) => a + b, 0)
                    )}
                  </span>
                )}
              <div
                className="relative inline-block"
                onMouseEnter={() => handleCommentEmojiMouseEnter(c.id)}
                onMouseLeave={() => handleCommentEmojiMouseLeave(c.id)}
              >
                {showCommentEmoji[c.id] && (
                  <div
                    ref={(el) => (commentEmojiPopupRefs.current[c.id] = el)}
                    className="absolute bottom-7 left-0 bg-white rounded-full shadow-lg px-2 py-1 flex gap-1 z-20 animate-fade-in"
                    style={{ fontSize: "0.9rem" }}
                    onMouseEnter={() => handleCommentEmojiMouseEnter(c.id)}
                    onMouseLeave={() => handleCommentEmojiMouseLeave(c.id)}
                  >
                    {commentEmojiList.map((e) => (
                      <button
                        key={e.key}
                        className="hover:scale-125 transition-transform"
                        onClick={() =>
                          handleCommentReaction(post.id, c.id, e.key)
                        }
                        title={e.label}
                        type="button"
                        tabIndex={-1}
                        style={{ fontSize: "1em" }}
                      >
                        {e.icon}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  className={`text-xs font-semibold flex items-center gap-1 px-2 py-0.5 rounded-2xl transition
                    ${
                      c.userReaction
                        ? "text-blue-600 bg-blue-50"
                        : "hover:bg-gray-100"
                    }
                  `}
                  onClick={() => handleCommentReaction(post.id, c.id, "like")}
                >
                  <FaRegThumbsUp className="text-base" />
                  Thích
                </button>
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {getTimeAgo(c.createdAt)}
              </span>
              <button
                className="hover:underline text-blue-600 font-semibold text-xs ml-2"
                onClick={() => handleReply(post.id, c)}
              >
                Trả lời
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Main Render ---
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5] font-sans">
      <Header />
      <div className="h-20 md:h-24"></div>
      <main className="flex-1 w-full max-w-[600px] mx-auto py-4">
        {/* Đăng bài mới */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-6 border border-gray-200">
          <div className="flex items-center mb-2">
            <img
              src="/src/assets/images/logo-vietnam.png"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover mr-3 border"
            />
            <textarea
              className="flex-1 border-none outline-none bg-[#f0f2f5] rounded-3xl px-4 py-1.5 resize-none text-base"
              rows={1}
              placeholder="Bạn đang nghĩ gì?"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              style={{ fontFamily: "inherit", minHeight: 36, maxHeight: 80 }}
            />
          </div>
          {newMedia.length > 0 && (
            <div className="flex gap-2 mb-2 flex-wrap">
              {newMedia.map((m, idx) =>
                m.type === "image" ? (
                  <img
                    key={idx}
                    src={m.url}
                    alt="preview"
                    className="w-full max-w-full h-auto object-cover rounded-lg border"
                    style={{ maxHeight: 320 }}
                  />
                ) : (
                  <video
                    key={idx}
                    src={m.url}
                    className="w-full max-w-full h-auto object-cover rounded-lg border"
                    style={{ maxHeight: 320 }}
                    controls
                  />
                )
              )}
            </div>
          )}
          <div className="flex items-center gap-2 mt-2">
            <label className="cursor-pointer flex items-center gap-1 px-3 py-1 rounded-lg bg-[#e4e6eb] hover:bg-[#d8dadf] text-sm font-medium">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-green-600"
              >
                <path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm0 2h12v10H4V5zm2 2v2h2V7H6zm4 0v2h2V7h-2z" />
              </svg>
              Ảnh/Video
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={handleMediaChange}
              />
            </label>
            <button
              className="ml-auto px-5 py-1.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={handlePost}
            >
              Đăng
            </button>
          </div>
        </div>

        {/* Danh sách bài đăng */}
        <div className="flex flex-col gap-6">
          {posts.map((post) => {
            const usedEmojis = getSortedUsedEmojis(post.reactions, emojiList);
            const totalReactions = Object.values(post.reactions).reduce(
              (a, b) => a + b,
              0
            );
            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-4"
              >
                {/* Avatar, tên, thời gian */}
                <div className="flex items-center mb-2">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-10 h-10 rounded-full object-cover mr-3 border"
                  />
                  <div>
                    <span className="font-semibold text-base">{post.user}</span>
                    <div className="text-xs text-gray-500">
                      {getTimeAgo(post.createdAt)}
                    </div>
                  </div>
                </div>
                <div className="mb-2 text-[15px] whitespace-pre-line break-words">
                  {post.content}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.media.map((m, idx) =>
                    m.type === "image" ? (
                      <img
                        key={idx}
                        src={m.url}
                        alt="media"
                        className="w-full max-w-full h-auto object-cover rounded-lg border"
                        style={{ maxHeight: 400 }}
                      />
                    ) : (
                      <video
                        key={idx}
                        src={m.url}
                        className="w-full max-w-full h-auto object-cover rounded-lg border"
                        style={{ maxHeight: 400 }}
                        controls
                      />
                    )
                  )}
                </div>
                {/* Reaction bar */}
                <div className="flex items-center justify-between px-1 pb-1">
                  <div className="flex items-center gap-1">
                    {usedEmojis.map((e) => (
                      <span key={e.key} className="text-xl">
                        {e.icon}
                      </span>
                    ))}
                    {totalReactions > 0 && (
                      <span className="ml-1 text-sm text-gray-700">
                        {formatNumber(totalReactions)}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 flex gap-4">
                    <span>{post.comments.length} bình luận</span>
                    <span>{post.shares} lượt chia sẻ</span>
                  </div>
                </div>
                {/* Nút Like, Share, Comment */}
                <div className="flex items-center justify-between text-gray-600 text-[15px] mb-2 border-b border-gray-100 pb-2 pt-1">
                  {/* Like button with emoji popup */}
                  <div
                    className="relative flex-1 flex items-center justify-center"
                    tabIndex={0}
                    onMouseEnter={() => handleEmojiMouseEnter(post.id)}
                    onMouseLeave={() => handleEmojiMouseLeave(post.id)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-1.5 rounded-lg font-semibold transition
                        ${
                          post.userReaction
                            ? "text-blue-600 bg-blue-50"
                            : "hover:bg-gray-100"
                        }
                      `}
                      onClick={() => handleReaction(post.id, "like")}
                      onMouseDown={(e) => e.preventDefault()}
                      aria-label="Like"
                    >
                      <FaRegThumbsUp className="text-lg" />
                      Thích
                    </button>
                    {showEmoji[post.id] && (
                      <div
                        ref={(el) => (emojiPopupRefs.current[post.id] = el)}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-full shadow-lg px-5 py-3 flex gap-4 z-20 animate-fade-in"
                        style={{ fontSize: "1.1rem" }}
                        onMouseEnter={() => handleEmojiMouseEnter(post.id)}
                        onMouseLeave={() => handleEmojiMouseLeave(post.id)}
                      >
                        {emojiList.map((e) => (
                          <button
                            key={e.key}
                            className="hover:scale-150 transition-transform"
                            onClick={() => handleReaction(post.id, e.key)}
                            title={e.label}
                            type="button"
                            tabIndex={-1}
                            style={{ fontSize: "1em" }}
                          >
                            {e.icon}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Bình luận */}
                  <div className="flex-1 flex items-center justify-center">
                    <button
                      className="flex items-center gap-1 px-4 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition"
                      tabIndex={-1}
                      style={{ pointerEvents: "none" }}
                    >
                      <FaRegCommentDots className="text-lg" />
                      Bình luận
                    </button>
                  </div>
                  {/* Chia sẻ */}
                  <div className="relative flex-1 flex items-center justify-center">
                    <button
                      className="flex items-center gap-1 px-4 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition"
                      onClick={() => handleShare(post.id)}
                    >
                      <FaRegShareSquare className="text-lg" />
                      Chia sẻ
                    </button>
                    {showShare[post.id] && (
                      <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-lg py-2 px-3 z-30 animate-fade-in">
                        <button
                          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                          onClick={() => {
                            setShowShare({ ...showShare, [post.id]: false });
                            alert("Chia sẻ qua Messenger!");
                          }}
                        >
                          <BsMessenger className="text-blue-500" /> Messenger
                        </button>
                        <button
                          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                          onClick={() => {
                            setShowShare({ ...showShare, [post.id]: false });
                            alert("Chia sẻ qua Instagram!");
                          }}
                        >
                          <BsInstagram className="text-pink-500" /> Instagram
                        </button>
                        <button
                          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                          onClick={() => {
                            setShowShare({ ...showShare, [post.id]: false });
                            navigator.clipboard.writeText(window.location.href);
                            alert("Đã sao chép liên kết!");
                          }}
                        >
                          <BsLink45Deg className="text-gray-700" /> Sao chép
                          liên kết
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {/* Bình luận ở giữa */}
                <div className="mt-2 flex flex-col items-center">
                  <div className="w-full max-w-[90%]">
                    {/* Bộ lọc */}
                    <div className="flex justify-start mb-1">
                      <select
                        className="px-2 py-1 text-sm bg-transparent outline-none focus:ring-0 focus:outline-none"
                        style={{ border: "none", boxShadow: "none" }}
                        value={commentSort[post.id] || "newest"}
                        onChange={(e) =>
                          setCommentSort({
                            ...commentSort,
                            [post.id]: e.target.value,
                          })
                        }
                      >
                        {commentSortOptions.map((opt) => (
                          <option key={opt.key} value={opt.key}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Hiển thị bình luận */}
                    {getSortedComments(post, commentSort).length > 0 && (
                      <div
                        className="overflow-y-auto pr-1 flex flex-col gap-2"
                        style={{
                          maxHeight: "320px",
                          transition: "background 0.2s",
                        }}
                      >
                        {getSortedComments(post, commentSort).map((c) =>
                          renderComment(c, post)
                        )}
                        {getSortedComments(post, commentSort).length > 10 && (
                          <div className="text-center text-xs text-gray-500 mt-1">
                            Cuộn để xem thêm bình luận...
                          </div>
                        )}
                      </div>
                    )}
                    {/* Bình luận input */}
                    <div className="flex gap-2 mt-2 items-end">
                      <img
                        src="/images/avatar-default.png"
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover border"
                      />
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="flex gap-1">
                          <input
                            type="text"
                            className="flex-1 border rounded-3xl px-3 py-1 bg-[#f0f2f5] focus:outline-none"
                            placeholder={
                              replyTo[post.id]
                                ? `Trả lời @${
                                    post.comments.find(
                                      (c) => c.id === replyTo[post.id]
                                    )?.user || ""
                                  }...`
                                : "Viết bình luận..."
                            }
                            value={commentInputs[post.id] || ""}
                            onChange={(e) =>
                              setCommentInputs({
                                ...commentInputs,
                                [post.id]: e.target.value,
                              })
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleComment(post.id);
                            }}
                          />
                          <input
                            type="file"
                            accept="image/*,application/pdf,.doc,.docx"
                            multiple
                            className="hidden"
                            id={`comment-media-${post.id}`}
                            onChange={(e) =>
                              handleCommentMediaChange(post.id, e)
                            }
                          />
                          <label
                            htmlFor={`comment-media-${post.id}`}
                            className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-200"
                          >
                            <FaRegImage
                              className="text-lg"
                              title="Gửi ảnh/file"
                            />
                          </label>
                          <button
                            type="button"
                            className="px-2 py-1 rounded-full hover:bg-gray-200"
                            onClick={() =>
                              handleAddEmojiToComment(post.id, "😊")
                            }
                          >
                            <FaRegSmile className="text-lg" title="Gửi emoji" />
                          </button>
                        </div>
                        {/* Hiển thị media/file preview */}
                        {commentMedia[post.id] &&
                          commentMedia[post.id].length > 0 && (
                            <div className="flex gap-2 mt-1">
                              {commentMedia[post.id].map((m, idx) =>
                                m.type === "image" ? (
                                  <img
                                    key={idx}
                                    src={m.url}
                                    alt="img"
                                    className="w-12 h-12 object-cover rounded"
                                  />
                                ) : (
                                  <span
                                    key={idx}
                                    className="flex items-center text-xs text-blue-600"
                                  >
                                    <FaPaperclip className="mr-1" />
                                    {m.name}
                                  </span>
                                )
                              )}
                            </div>
                          )}
                      </div>
                      <button
                        className="px-4 py-1 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 font-semibold"
                        onClick={() => handleComment(post.id)}
                      >
                        Gửi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <style>
        {`
        .animate-fade-in {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </div>
  );
};

export default Multimedia;
