import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="  w-full flex fixed top-0 items-center justify-between text-cyan-950 px-11 py-5 list-none">
      <li>
        <img
          className=" w-16 grayscale cursor-pointer"
          src="/assets/images/logo.png"
          alt="website logo"
        />
      </li>
      <ul className="flex justify-between gap-11 text-lg font-semibold">
        <li className="cursor-pointer hover:text-orange-800 transition">
          Chefs
        </li>
        <li className="cursor-pointer hover:text-orange-800 transition">
          Feedback
        </li>
        <li className="cursor-pointer hover:text-orange-800 transition">
          About
        </li>
        <li className="cursor-pointer hover:text-orange-800 transition">
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
