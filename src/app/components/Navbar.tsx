import React from "react";
import { GiNoodles } from "react-icons/gi";
import { FaSearch, FaHome, FaShoppingCart } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full shadow-lg border-black bg-gradient-to-r from-purple-600 to-grey-700">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Left Section: Logo and Search */}
              <div className="flex flex-wrap justify-center items-center gap-2">
                {/* Logo */}
                <GiNoodles className="w-6 h-6 text-red-600 hover:text-purple-900" />
                {/* Search */}
                <div className="relative hidden md:block">
                  <input
                    className="rounded-3xl py-2 px-3 outline-none text-sm lg:text-base w-[200px] sm:w-[300px] lg:w-[350px] text-black pr-10"
                    placeholder="Search"
                  />
                  <FaSearch className="h-5 w-5 text-red-600 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Center Section: Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900 text-center">
                Chinese Food Restaurant!!
              </h1>

              {/* Right Section: Links and Profile */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                {/* Home Link */}
                <Link href={"/"}>
                  <FaHome className="w-6 h-6 text-red-600 hover:text-purple-900 transition-transform transform hover:scale-110" />
                </Link>
                {/* Navigation Menu */}
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-purple-200 hover:bg-pink-400 px-4 py-2 rounded-md text-sm">
                        <Link href="/">Home</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-pink-600 text-white px-5 flex flex-col gap-2">
                        <NavigationMenuLink>
                          <Link href="/aboutus" className="text-white hover:text-pink-300">AboutUs</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                          <Link href="/contactus" className="text-white hover:text-pink-300">ContactUs</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                          <Link href="/menu" className="text-white hover:text-pink-300">Menu</Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                {/* Cart */}
                <Link href={"/cart"}>
                  <FaShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 p-1 rounded-full ring-2 hover:text-pink-600 text-red-600 hover:ring-purple-600 transition-transform transform hover:scale-110" />
                </Link>
                {/* Profile */}
                <Link href={"https://www.linkedin.com/in/khazra-ayub-99b762260/"}
                target="blank">
                <img
                  className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 hover:ring-purple-600 transition-transform transform hover:scale-110"
                  src="/images/myprofile.jpg"
                  alt="myprofile"
                />
                </Link>
              </div>
            </div>

            {/* Search Bar for Small Screens */}
            <div className="mt-4 md:hidden">
              <div className="relative">
                <input
                  className="rounded-3xl py-2 px-3 outline-none text-sm w-full text-black pr-10"
                  placeholder="Search"
                />
                <FaSearch className="h-5 w-5 text-red-600 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
