import React from "react";
import logo from "../assets/images/logo.png";
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaStar,
  FaRegUserCircle,
} from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevision } from "react-icons/pi";
import MenuItem from "./MenuItem";

const Header = () => {
  const menuItems = [
    {
      name: "HOME",
      icon: FaHome,
    },
    {
      name: "SEARCH",
      icon: FaSearch,
    },
    {
      name: "WATCHLIST",
      icon: FaPlus,
    },
    {
      name: "ORIGINALS",
      icon: FaStar,
    },
    {
      name: "MOVIES",
      icon: RiMovie2Fill,
    },
    {
      name: "SERIES",
      icon: PiTelevision,
    },
  ];
  return (
    <div className="p-2.5 text-white flex flex-row items-center	justify-between">
      <div className="flex flex-row items-center gap-6">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        {menuItems.map((item) => (
          <MenuItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <FaRegUserCircle className="w-[40px]"/>
    </div>
  );
};

export default Header;
