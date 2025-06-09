import React from "react";
import Header from "../../../components/layout/Header";
import VideoBackground from "../../../components/ui/VideoBackground";
import SearchBox from "../../../components/ui/SearchBox";
import ProvinceSection from "../province/ProvinceSection";
import FoodCulture from "../foodculture/FoodCulture";
import Customs from "../customfestival/CustomFestival";
import Footer from "../../../components/layout/Footer";
import VietnamMap from "./VietnamMap";

function Home() {
  return (
    <div className="w-full">
      {/* Section Video Intro */}
      <section className="relative w-full overflow-hidden">
        <VideoBackground />
        <div className="absolute inset-0 flex flex-col justify-start items-center text-white">
          <Header />
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center mt-15 mb-5">
              Việt Nam - Đất nước của những điều kỳ diệu
            </h1>
            <SearchBox />
          </div>
        </div>
      </section>

      {/* Các Section chính với id */}
      <section id="province">
        <ProvinceSection />
      </section>

      <section id="VietnamMap">
        <VietnamMap />
      </section>

      <section id="food-culture">
        <FoodCulture />
      </section>

      <section id="customs-festivals">
        <Customs />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
