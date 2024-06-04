import React, { useState } from "react";
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
import { BsThreeDotsVertical } from "react-icons/bs";
import MenuItem from "./MenuItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
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
        <div className="hidden lg:flex flex-row items-center gap-6">
          {menuItems.map((item) => (
            <MenuItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="hidden md:flex lg:hidden flex-row items-center gap-6">
          {menuItems.map((item) => (
            <MenuItem name={""} Icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden flex flex-row items-center gap-6">
          {menuItems.map(
            (item, index) =>
              index < 3 && <MenuItem name={""} Icon={item.icon} />
          )}
          <div onClick={() => setToggle(!toggle)}>
            <MenuItem name={""} Icon={BsThreeDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] border-[1px] p-3
            border-gray-700"
              >
                {menuItems.map(
                  (item, index) =>
                    index >= 3 && <MenuItem name={item.name} Icon={item.icon} />
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <FaRegUserCircle className="w-[40px]" />
    </div>
  );
};

export default Header;
