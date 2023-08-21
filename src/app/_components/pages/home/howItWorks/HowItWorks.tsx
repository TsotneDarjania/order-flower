import React from "react";

const HowItWorks = () => {
  return (
    <div className=" w-full bg-slate-800 p-12 flex flex-col items-center">
      <h2 className=" text-white text-3xl text-center w-full font-semibold tracking-wide">
        How It Works
      </h2>
      <div className=" w-11/12 flex justify-center flex-wrap mt-16 gap-4 text-zinc-400">
        <div className=" w-1/4 min-h-[25vh] flex flex-col  items-center p-5 text-center">
          <h2 className=" font-bold text-2xl"> Step 1. </h2>
          <h2 className=" font-bold text-2xl"> Choose a cook </h2>
          <p>
            From the list of cooks, you choose the best one for you, who you
            want to cook for you
          </p>
        </div>
        <div className=" w-1/4 min-h-[25vh] flex flex-col  items-center p-5 text-center">
          <h2 className=" font-bold text-2xl"> Step 2. </h2>
          <h2 className=" font-bold text-2xl"> Write to a personal chef </h2>
          <p>
            Write to a personal chef, without other intermediaries, order
            exactly what you want and how you want it
          </p>
        </div>{" "}
        <div className=" w-1/4 min-h-[25vh] flex flex-col  items-center p-5 text-center">
          <h2 className=" font-bold text-2xl"> Step 3. </h2>
          <h2 className=" font-bold text-2xl"> Complete the order </h2>
          <p>
            The third step is very simple, after payment you just sit at home
            and wait for your favorite meal to be delivered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
