import { ArrowLeft, ArrowRight, NumberEight } from "phosphor-react";
import React, { useState } from "react";

import { ImCalculator } from "react-icons/im";

export function CalculateIBM() {
  const [clientHeight, setCLientHeight] = useState("");
  const [clientWeight, setCLientWeight] = useState("");

  const [clientIMC, setClientIMC] = useState("00.0");

  const [showImcResult, setShowImcResult] = useState(false);

  function ChangeCustumerHeight(e) {
    if (e.target.value.length < 6) {
      setCLientHeight(e.target.value);
    }
  }

  function ChangeCustumerWeight(e) {
    setCLientWeight(e.target.value);
  }

  function CalculateIbmCustumer() {
    event.preventDefault();
    const clientHeightInMeters = clientHeight / 100;
    const valueIMC =
      clientWeight / (clientHeightInMeters * clientHeightInMeters);
    setClientIMC(valueIMC.toFixed(2));
    setShowImcResult(true);
  }

  return (
    <div className="bg-[#2B2024] text-white uppercase px-8 py-6 rounded-md shadow-2xl lg:flex lg:gap-6">
      <div className="lg:w-1/3">
        <div>
          <h2 className="text-lg text-justify font-bold relative">
            Medidor de Saúde{" "}
            <span className="block text-[#FD0054] text-xs font-bold underline tracking-wid underline-offset-4 ">
              Calcular IMC
            </span>
          </h2>
        </div>
        <div className="">
          <div className="mt-6">
            <form action="" className="flex flex-col gap-5">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="altura"
                  name="altura"
                  type="number"
                  className="bg-transparent text-white h-10 w-full border-b-2 border-gray-300  focus:outline-none focus:borer-rose-600"
                  placeholder="Digite sua altura (cm)"
                  value={clientHeight}
                  onChange={(e) => ChangeCustumerHeight(e)}
                />
                {clientHeight > 0 && (
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-zinc-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Altura
                  </label>
                )}
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="peso"
                  name="peso"
                  type="number"
                  className="bg-transparent text-white h-10 w-full border-b-2 border-gray-300  focus:outline-none focus:borer-rose-600"
                  placeholder="Digite sua peso (kg)"
                  value={clientWeight}
                  onChange={(e) => ChangeCustumerWeight(e)}
                />
                {clientWeight > 0 && (
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-zinc-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Peso
                  </label>
                )}
              </div>
              <button
                type="submit"
                onClick={CalculateIbmCustumer}
                className="bg-[#FD0054] uppercase p-2 font-semibold flex items-center gap-2 rounded-sm justify-between"
              >
                Calcular <ImCalculator />
              </button>
            </form>
          </div>
        </div>
      </div>
      {!showImcResult && (
        <div className="lg:w-2/3">
          <div>
            <h2 className="text-lg text-justify font-bold relative">
              Indice de Massa Corporal{" "}
            </h2>
            <span className="block text-[#FD0054] text-xs font-bold underline tracking-wid underline-offset-4 ">
              Veja se você está saúdavel
            </span>
            <p className="mt-6 text-sm text-zinc-200">
              O Índice de Massa Corporal (IMC) é uma medida utilizada para
              avaliar se uma pessoa está com peso saudável ou não. Ele é
              calculado a partir da relação entre a altura e o peso de uma
              pessoa.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-[#fd0054]">
                  <ArrowRight /> Abaixo de 18,5:
                  <span className="text-zinc-200"> abaixo do peso ideal</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#fd0054]">
                  <ArrowRight /> Entre 18,5 e 24,9:
                  <span className="text-zinc-200">peso saudável</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#fd0054]">
                  <ArrowRight /> Entre 25 e 29,9:
                  <span className="text-zinc-200">sobrepeso</span>
                </li>
              </div>
              <div className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-[#fd0054]">
                  <ArrowRight /> Entre 30 e 34,9
                  <span className="text-zinc-200">obesidade grau i</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#fd0054]">
                  <ArrowRight /> Entre 35 e 39,9:
                  <span className="text-zinc-200">obesidade grau ii</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#fd0054]">
                  <ArrowRight /> Acima de 40:
                  <span className="text-zinc-200">obesidade grau iii</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
      {showImcResult && (
        <div>
          <h3 className="font-bold ">
            Seu IMC é de{" "}
            <span className="text-[#FD0054] font-bold tracking-wide">
              {clientIMC}
            </span>
            {clientIMC > 20 && clientIMC < 30 && (
              <p>Você está no peso saúdavel</p>
            )}
          </h3>
        </div>
      )}
    </div>
  );
}
