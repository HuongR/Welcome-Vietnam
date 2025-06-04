import React from "react";
import Header from "../header/Header"; // đường dẫn có thể điều chỉnh theo cấu trúc project của bạn
import Footer from "../footer/Footer";

const Multimedia = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <main className="w-full h-[800px] bg-purple-200 flex justify-center items-center">
        <h2 className="text-4xl font-bold">Multimedia</h2>
      </main>

      <Footer />
    </div>
  );
};

export default Multimedia;
