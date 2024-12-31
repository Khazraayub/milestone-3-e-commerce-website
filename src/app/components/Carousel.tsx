import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative  flex flex-col overflow-hidden rounded-lg shadow-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/hero1.jpg"
                  alt="hero1"
                  className="absolute opacity-50 inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white  absolute bottom-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Chicken Chow mein
                </h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 ">
              <a
                href=""
                className="group relative  flex flex-col overflow-hidden rounded-lg shadow-lg px-4 pb-4 pt-40 mb-4 "
              >
                <img
                  src="/images/hero2.jpg"
                  alt="hero2"
                  className="absolute opacity-50 inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white  absolute bottom-0 left-0 p-4 xs:text-xl md:text-0xl">
                  chicken manchurian fried rice
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative  flex flex-col overflow-hidden rounded-lg shadow-lg px-4 pb-4 pt-40 "
                >
                  <img
                    src="/images/hero3.jpg"
                    alt="hero3"
                    className="absolute opacity-50 inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white  absolute bottom-0 left-0 p-3 xs:text-xl md:text-0xl">
                    Lasagna
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="/images/hero4.jpg"
                    alt="hero4"
                    className="absolute opacity-50 inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white  absolute bottom-0 left-0 p-3 xs:text-xl md:text-0xl">
                    Sushi
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
            <a
                href=""
                className="group relative  flex flex-col overflow-hidden rounded-lg shadow-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/hero5.jpg"
                  alt="hero5"
                  className="absolute opacity-50 inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white  absolute bottom-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Pasta
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
