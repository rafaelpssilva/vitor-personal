import {
  ArrowCircleUpLeft,
  ArrowElbowLeft,
  ArrowSquareLeft,
  ArrowSquareRight,
  Barbell,
  CaretDoubleRight,
  CaretRight,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPinLine,
  Phone,
  TwitterLogo,
  WhatsappLogo,
  X,
  YoutubeLogo,
} from "phosphor-react";
import React, { useState } from "react";
import { CalculateIBM } from "./components/assests/CalculateIBM";
import { Header } from "./components/layout/Header";
import { Home } from "./components/layout/Home";

export function App() {
  return (
    <div>
      <div className="h-[100vh] bg-hero-pattern bg-cover md:px-8 bg-no-repeat overflow-hidden">
        <Header />
        <Home />
      </div>
      <div className=" mt-[-70px] px-8">
        <CalculateIBM />
      </div>
    </div>
  );
}

// <div className="absolute left-0 top-1/2 text-white">
//             <ArrowSquareLeft size={40} />
//           </div>
//           <div className="absolute right-0 top-1/2 text-white">
//             <ArrowSquareRight size={40} />
//           </div>
