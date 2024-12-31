import React from "react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-700">
      <footer className="flex flex-col space-y-8 justify-center items-center p-6 md:p-10">
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center space-x-5 mt-5">
          <a
            href="https://www.linkedin.com/in/khazra-ayub-99b762260/"
            target="_blank"
            rel="nofollow noopener"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=ffffff"
              alt="LinkedIn"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
          <a
            href="https://github.com/Khazraayub"
            target="_blank"
            rel="nofollow noopener"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=ffffff"
              alt="GitHub"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="nofollow noopener"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src="https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=ffffff"
              alt="Facebook"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="nofollow noopener"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <img
              src="https://img.icons8.com/?size=100&id=vzeEiquVUR7e&format=png&color=ffffff"
              alt="Twitter"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center hover:text-red-600 text-amber-400 font-medium mb-4 text-sm md:text-lg">
          Khazra Ayub 2024, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
