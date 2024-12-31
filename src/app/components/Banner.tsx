import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-3 py-3 mb-7 ">
      <div className=" insert-0 opacity-20">
        <img
          src="/images/banner.jpg"
          alt="banner"
          className="w-full h-full object-cover absolute "
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center py-6">
        <h2 className="text-white sm:text-5xl font-bold mb-4 ">
          Taste The Best
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Taste The Best Chinese Food!!
        </p>
        <Link href={"/menu"}>
        <button
          type="button"
          className="bg-red-600 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-red-950 transition duration-300"
        >
          Explore Our Delicious Food
        </button>
        </Link>
      </div>
    </div>
  );
}
