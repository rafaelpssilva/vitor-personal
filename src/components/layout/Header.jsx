import {
  Barbell,
  CaretDoubleRight,
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
import { useState } from "react";

export function Header() {
  const [showIsNavbar, setShowIsNavbar] = useState(true);
  return (
    <header className="font-RobotoCondensed">
      <nav className=" bg-transparent text-white">
        <ul className="flex hidden">
          <li className="flex items-center">
            <MapPinLine /> Addres: Sydney Australia
          </li>
          <li>
            <Phone /> Call: +614 434 333
          </li>
          <li>
            <Envelope /> Email: info@angelclub.com
          </li>
        </ul>
        {showIsNavbar && (
          <div className="flex items-center justify-between ">
            <ul className="flex items-center gap-4 py-3 text-2xl text-[#FAFAFA]">
              <li>
                <WhatsappLogo />
              </li>
              <li>
                <FacebookLogo />
              </li>
              <li>
                <InstagramLogo />
              </li>
              <li>
                <LinkedinLogo />
              </li>
              <li>
                <TwitterLogo />
              </li>
              <li>
                <YoutubeLogo />
              </li>
            </ul>
            <div
              onClick={() => setShowIsNavbar(!showIsNavbar)}
              className="text-2xl p-1"
            >
              <X />
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <div className="bg-[#FD0054] flex flex-col items-center w-[20%]">
            <Barbell size={40} />
            <p>Vitor</p>
          </div>
          <div className="w-full flex items-center">
            <ul className="w-full flex items-center justify-around uppercase transition-all duratisNaon-700">
              <li className="hover:border-b">Home</li>
              <li className="hover:border-b">Planos</li>
              <li className="hover:border-b">Contato</li>
            </ul>
          </div>
          <div className="bg-[#FD0054] text-2xl flex justify-center items-center w-[20%]">
            <span className="hover:animate-pulse">
              <CaretDoubleRight />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
