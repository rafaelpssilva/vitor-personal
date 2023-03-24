import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export function Clientes() {
  return (
    <div
      className="mb-20
    "
    >
      <h2 className="text-center text-[#FD0054] text-xl font-bold uppercase tracking-wider">
        Clientes
      </h2>
      <p className="mt-6 mb-5 text-center text-[#2B2024] text-2xl font-bold uppercase">
        Tudo é possível, basta acreditar
      </p>
      <div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#FD0054] p-2 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1491756975177-a13d74ed1e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
                alt="aluno"
                className="rounded-sm"
              />
            </div>
            <span className="block mt-3 text-[#2B2024] text-bold text-xl uppercase tracking-wider ">
              Roger Silva
            </span>
            <p className="mt-1 text-sm text-[#4a4949] font-light uppercase">
              Peso: 92Kg - Altura: 1.92m
            </p>

            <p className="mt-2 tracking-wide text-[#909090] text-sm opacity-80">
              Roger que saiu de 120kg e, após 7 meses alcançou sua meta de perda
              de peso de 23kg e ainda ganhou massa muscular.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FD0054] p-2 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
                alt="aluno"
                className="rounded-sm w-full"
              />
            </div>
            <span className="block mt-3 text-[#2B2024] text-bold text-lg uppercase tracking-wider ">
              Camile Teodoro
            </span>

            <p className="tracking-wide text-[#909090] text-sm opacity-80">
              Camile que saiu de 120kg e, após 7 meses alcançou sua meta de
              perda de peso de 23kg e ainda ganhou massa muscular.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
