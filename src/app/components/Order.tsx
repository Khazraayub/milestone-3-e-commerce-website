import React from "react";

export default function Order() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg mx-auto mt-10 mb-2 ">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex justify-center items-center rounded-full">
              <span className="text-black text-base font-bold"> 1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-purple-800"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold  text-black ">
              Step 1: Choose Your Dish
            </h6>
            <p className="text-xs text-black">Taste Our Best Menu</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex justify-center items-center rounded-full">
              <span className="text-black text-base font-bold"> 2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-purple-800"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold  text-black ">
              Step 2: Customize Your Order
            </h6>
            <p className="text-xs text-black">Taste Our Best Menu</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-red-600 p-1.5 flex justify-center items-center rounded-full">
              <span className="text-black text-base font-bold"> 3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-purple-800"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold  text-black ">
              Step 3: Place Your Order
            </h6>
            <p className="text-xs text-black">Taste Our Best Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
