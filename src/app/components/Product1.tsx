import React from "react";

const Products = [
  {
    id: 1,
    title: "Chinese Soup",
    category: "Tasty",
    price: "500.00",
    imageUrl: "/images/product4.jpg",
    bgColor: "bg-cyan-800",
  },
  {
    id: 2,
    title: "Shashlik with Rice",
    category: "Delights",
    price: "900.00",
    imageUrl: "/images/product5.jpg",
    bgColor: "bg-teal-800",
  },
  {
    id: 3,
    title: "Cheese Balls",
    category: "Delicious",
    price: "600.00",
    imageUrl: "/images/product6.jpg",
    bgColor: "bg-cyan-800",
  },
];

export default function Product1() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="relative w-52"
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-red-600 text-xs font-bold px-3 py-2 leading-none items-center justify-center">
                Rs:{product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
