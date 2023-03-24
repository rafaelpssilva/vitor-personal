import React from "react";

function AboutMe() {
  return (
    <div className="mb-10">
      <h2 className="text-center text-[#FD0054] text-xl font-bold uppercase tracking-wider">
        Sobre Mim
      </h2>
      <p className="mt-6 mb-5 text-center text-[#2B2024] text-2xl font-bold uppercase">
        Pesronal Trainer, com a maior satifação dos clientes
      </p>
      <p className="text-[20px] tracking-wide text-slate-900 text-justify">
        Olá, meu nome é Vitor Aranda e sou um Personal Trainer comprometido em
        ajudar meus clientes a atingirem seus objetivos de forma saudável e
        eficiente. Com minha vasta experiência no mercado e metodologias únicas,
        sou capaz de adaptar o treinamento e a nutrição para cada pessoa de
        forma individualizada, considerando seu estilo de vida, histórico médico
        e metas pessoais.
      </p>
      <div className="relative w-full h-96 ">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=100"
            alt=""
            className="border  object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-40%] shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=100"
            alt=""
            className="border  object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
