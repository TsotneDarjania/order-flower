import React from "react";
import style from "./style.module.css";
import Fire from "./components/fire/Fire";

const Introduce = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-screen gap-5 ">
      <div className="w-max h-max">
        <Fire />
      </div>
      <p className=" text-xl w-4/6 text-center">
        Welcome to{" "}
        <span className=" text-orange-700 font-extrabold"> OrderFlower </span> –
        where you connect directly with skilled bakers to order customized
        cookies. Enjoy the delight of freshly baked treats, tailored to your
        cravings and preferences
      </p>
      <button
        className="bg-yellow-700 text-xl hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded"
        type="button"
      >
        Order
      </button>
    </div>
  );
};

export default Introduce;
