import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link } from "react-scroll";
import MainImg from "../public/assets/LogoGT.svg";

const Hero = ({
  listUser = [
    {
      name: "Inscritos",
      number: "38K",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Videos",
      number: "1.8K",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Nacionais",
      number: "1",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Um canal e podcast dedicado ao <strong>Fortaleza Esporte Clube</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Feito por e <strong>para tricolores</strong>! <strong>Análises</strong> sobre os jogos e <strong>debates</strong> sobre diversos assuntos que envolvem o time, dentro e fora das quatro linhas.
              </p>
              <a href="https://www.youtube.com/@GloriaeTradicao/featured" target="_blank"><ButtonPrimary>Acesse o canal</ButtonPrimary></a>
              
            </div>
            <div className="flex justify-center">
              <motion.div className="flex align-center justify-center" variants={scrollAnimation}>
                <MainImg
                  src="../public/assets/Image.png"
                  alt="GT Ilustrate"
                  quality={100}
                  width={325}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
