import React from "react";
import LogoGT from "../../public/assets/LogoGT.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-10">
      <div className="flex flex-col pb-20 px-5">
          <LogoGT className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Glória e Tradição</strong> é um canal de mídia independente que foi criado por torcedores do @FortalezaEC.
          </p>
          
          <p className="text-gray-400">©{new Date().getFullYear()} - Glória e Tradição</p>
        </div>
    </div>
  );
};

export default Footer;
