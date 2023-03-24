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
import { Classes } from "./components/layout/Classes";
import AboutMe from "./components/layout/AboutMe";
import { Clientes } from "./components/layout/Clientes";

export function App() {
  return (
    <div className="">
      <div className="h-[100vh] bg-hero-pattern bg-cover md:px-8 bg-no-repeat overflow-hidden">
        <Header />
        <Home />
      </div>
      <div className=" mt-[-70px] px-8">
        <CalculateIBM />
      </div>
      <div className="md:px-8">
        <div className="px-8">
          <Classes />
          <AboutMe />
          <Clientes />
        </div>
      </div>
    </div>
  );
}
