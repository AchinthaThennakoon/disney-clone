import React from "react";

import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyVideo from "../assets/Videos/disney.mp4";
import marvelVideo from "../assets/Videos/marvel.mp4";
import nationalGVideo from "../assets/Videos/national-geographic.mp4";
import pixarVideo from "../assets/Videos/pixar.mp4";
import starwarVideo from "../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const howuseList = [
    {
      id: 1,
      image: disney,
      video: disneyVideo,
    },
    {
      id: 2,
      image: marvel,
      video: marvelVideo,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalGVideo,
    },
    {
      id: 3,
      image: pixar,
      video: pixarVideo,
    },
    {
      id: 1,
      image: starwar,
      video: starwarVideo,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 px-16 relative">
      {howuseList.map((item) => (
        <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
