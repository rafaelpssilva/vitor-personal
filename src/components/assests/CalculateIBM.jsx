import React, { useState } from "react";

export function CalculateIBM() {
  const [clientHeight, setCLientHeight] = useState("00.0");

  function ChangeCustumerHeight() {
    setCLientHeight(event.target.value);
  }

  function CalculateIbmCustumer() {
    e.preventDefault();
    console.log("a");
  }

  return (
    <div className="bg-[#2B2024] text-white uppercase px-8 py-6 ">
      <div>
        <h2 className="text-2xl text-justify font-bold relative">
          Indície de massa corporal{" "}
          <span className="text-[#FD0054] text-xs font-bold absolute right-2 bottom-2 underline underline-offset-2">
            Calcular IBM
          </span>
        </h2>
      </div>
      <div className="mt-6">
        <form action="" className="flex flex-col gap-3">
          <input type="text" placeholder="PESO" className="bg-[#544C4F] p-1" />
          <input
            type="text"
            placeholder="ALTURA"
            className="bg-[#544C4F] p-1"
            value={clientHeight}
            onChange={ChangeCustumerHeight}
          />
          <button
            type="button"
            onClick={CalculateIbmCustumer}
            className="bg-[#FD0054] uppercase p-2"
          >
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
}
