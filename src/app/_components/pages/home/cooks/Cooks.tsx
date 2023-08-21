import React from "react";

const Cooks = () => {
  return (
    <div className=" flex flex-col items-center w-full p-12">
      <h1 className=" text-stone-800 text-3xl text-center w-full font-semibold tracking-wide">
        10 Best Chefs
      </h1>

      <ul className=" w-min border-b-4">
        <li className=" bg-slate-700">
          <ul className=" flex justify-center items-center text-zinc-300 px-5 py-3 gap-3">
            <li className="">1.</li>
            <li className="w-44 flex justify-center">
              <img className=" w-20" src="./assets/images/chef.png" alt="" />
            </li>
            <li className="w-44 flex justify-center"> Tsotne Darjania</li>
            <li className="w-44 flex justify-center"> Raiting : 8233</li>
            <li className="w-44 flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Select
              </button>
            </li>
          </ul>
        </li>
        <li className=" bg-slate-800">
          <ul className=" flex justify-center items-center text-zinc-300 px-5 py-3 gap-3">
            <li className="">1.</li>
            <li className="w-44 flex justify-center">
              <img className=" w-20" src="./assets/images/chef.png" alt="" />
            </li>
            <li className="w-44 flex justify-center"> Tsotne Darjania</li>
            <li className="w-44 flex justify-center"> Raiting : 8233</li>
            <li className="w-44 flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Select
              </button>
            </li>
          </ul>
        </li>
        <li className=" bg-slate-700">
          <ul className=" flex justify-center items-center text-zinc-300 px-5 py-3 gap-3">
            <li className="">1.</li>
            <li className="w-44 flex justify-center">
              <img className=" w-20" src="./assets/images/chef.png" alt="" />
            </li>
            <li className="w-44 flex justify-center"> Tsotne Darjania</li>
            <li className="w-44 flex justify-center"> Raiting : 8233</li>
            <li className="w-44 flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Select
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Cooks;
