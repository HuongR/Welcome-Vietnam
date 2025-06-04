import React, { useEffect, useRef, useState } from "react";
import "../../../styles/home/content/FoodCulture.css";

const FoodCulture = () => {
  const vanhoaRef = useRef(null);
  const amthucRef = useRef(null);
  const [vanhoaVisible, setVanhoaVisible] = useState(false);
  const [amthucVisible, setAmthucVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === vanhoaRef.current) {
              setVanhoaVisible(true);
              observer.unobserve(vanhoaRef.current); // Chỉ chạy 1 lần
            }
            if (entry.target === amthucRef.current) {
              setAmthucVisible(true);
              observer.unobserve(amthucRef.current); // Chỉ chạy 1 lần
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } // Tinh chỉnh để dễ trigger hơn
    );

    if (vanhoaRef.current) observer.observe(vanhoaRef.current);
    if (amthucRef.current) observer.observe(amthucRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="food-culture-container">
      {/* Văn hóa */}
      <div className="section-block">
        <div className="image-half">
          <div className="image-grid">
            <div className="square">
              <img src="/images/vanhoa/aodai.jpg" alt="Áo dài" />
            </div>
            <div className="square">
              <img src="/images/vanhoa/tet.jpg" alt="Tết" />
            </div>
            <div className="square">
              <img src="/images/vanhoa/nghethuat.jpg" alt="Nghệ thuật" />
            </div>
            <div className="square">
              <img src="/images/vanhoa/langnghe.jpg" alt="Làng nghề" />
            </div>
            <div className="square">
              <img src="/images/vanhoa/lehoi.jpg" alt="Lễ hội" />
            </div>
            <div className="transparent"></div>
            <div className="square">
              <img src="/images/vanhoa/tinnguong.jpg" alt="Tín ngưỡng" />
            </div>
          </div>
        </div>
        <div
          ref={vanhoaRef}
          className={`intro-half vanhoa ${vanhoaVisible ? "animate" : ""}`}
        >
          <div>
            <h2>Văn Hóa Việt Nam</h2>
          </div>
          <div>
            <p>
              Việt Nam – dải đất hình chữ S bên bờ Biển Đông – là nơi lưu giữ và
              tỏa sáng một kho tàng văn hóa đa dạng và đậm đà bản sắc. Từ tà áo
              dài thướt tha, những câu hát dân ca ngọt ngào, đến lễ hội truyền
              thống rộn ràng sắc màu, mỗi nét văn hóa đều kể một câu chuyện về
              lịch sử, con người và niềm tự hào dân tộc. Văn hóa Việt Nam không
              chỉ được gìn giữ qua từng thế hệ mà còn không ngừng phát triển,
              hòa quyện giữa truyền thống và hiện đại, tạo nên một bức tranh rực
              rỡ sắc màu mà bất kỳ ai đặt chân đến đều không thể quên.
            </p>
          </div>
        </div>
      </div>

      {/* Ẩm thực */}
      <div className="section-block">
          <div
            ref={amthucRef}
            className={`intro-half amthuc ${amthucVisible ? "animate" : ""}`}
          >
            <div>
              <h2>Ẩm Thực Việt Nam</h2>
            </div>
            <div>
              <p>
                Ẩm thực Việt Nam – bức tranh sống động được dệt nên từ những
                nguyên liệu tươi ngon, cách chế biến tinh tế và sự kết hợp hài
                hòa của hương vị. Mỗi vùng miền đều mang đến những món ăn đặc
                trưng, phản ánh phong tục, tập quán và tâm hồn của người Việt.
                Từ những gánh hàng rong bình dị đến bàn tiệc sang trọng, ẩm thực
                Việt Nam luôn để lại dấu ấn khó phai với thực khách, là bản giao
                hưởng tuyệt vời của vị giác và văn hóa.
              </p>
            </div>
          </div>
        <div className="image-half">
          <div className="image-grid">
            <div className="transparent"></div>
            <div className="transparent"></div>
            <div className="square">
              <img src="/images/amthuc/pho.jpg" alt="Phở" />
            </div>
            <div className="transparent"></div>
            <div className="square">
              <img src="/images/amthuc/buncha.jpg" alt="Bún chả" />
            </div>
            <div className="square">
              <img src="/images/amthuc/comtam.jpg" alt="Cơm tấm" />
            </div>
            <div className="square">
              <img src="/images/amthuc/bunbohue.jpg" alt="Bún bò Huế" />
            </div>
            <div className="square">
              <img
                src="/images/amthuc/bundaumamtom.jpg"
                alt="Bún đậu mắm tôm"
              />
            </div>
            <div className="square">
              <img src="/images/amthuc/banhmi.jpg" alt="Bánh mì" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCulture;
