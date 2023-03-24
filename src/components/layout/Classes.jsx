import React from "react";
import { CardClasses } from "../assests/CardClasses";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination, Autoplay } from "swiper";

export function Classes() {
  return (
    <article className="mt-32 mb-32 ">
      <h2 className="text-center text-[#FD0054] text-xl font-bold uppercase tracking-wider">
        Nossas Aulas
      </h2>
      <p className="mt-6 mb-5 text-center text-[#2B2024] text-2xl font-bold uppercase">
        O seu bem estar em 1º lugar
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 90,
        //   },
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardClasses
            category="Emagrecimento"
            linkImg="https://i.ibb.co/YTnxJy9/treadmill-4.png"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <CardClasses
            category="Hipertofria"
            linkImg="https://i.ibb.co/PCcHgCt/muscle-1.png"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <CardClasses
            category="Saúde"
            linkImg="https://i.ibb.co/xj72D7V/energy-drink.png"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <CardClasses
            category="Recuperação"
            linkImg="https://i.ibb.co/x5HPSkS/fracture.png"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </article>
  );
}
