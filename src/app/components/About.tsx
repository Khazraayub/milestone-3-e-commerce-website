import React from "react";

export default function AboutUs() {
  return (
    <div className="relative py-16 px-6 md:px-12 lg:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 min-h-screen"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/overhead-shot-ingredients-classic-italian-spaghetti-pasta-with-tomato-sauce-copy-space_67155-5967.jpg?w=826')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.3,
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Image */}
        <div className="flex justify-center items-center">
          <img
            src="/images/bg.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg object-cover h-72 w-full md:h-96 lg:h-full"
          />
        </div>

        {/* Right Column: Text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            Welcome to{" "}
            <span className="font-semibold text-red-600">Chinese Restaurant</span>, 
            where we bring authentic Chinese flavors to your plate. Our chefs specialize 
            in crafting traditional dishes with a modern twist, ensuring every meal is 
            a culinary experience.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-6">
            From hand-rolled dumplings to sizzling stir-fries, every dish is prepared 
            with the freshest ingredients and a passion for excellence. Whether you're 
            here for a family dinner or a quick bite, we promise you a taste of China 
            like never before.
          </p>
          <a
            href="/menu"
            className="inline-block text-center mt-4 bg-red-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow hover:bg-red-700 transition duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </div>
  );
}
