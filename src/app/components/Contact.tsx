import React from "react";

export default function Contact() {
  return (
    <div className=" py-16 px-8 md:px-16 lg:px-32">
        
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-pink-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                
                  className="mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Location
              </h2>
              <p className="text-gray-600">
                 Chinese Restaurant <br />
                123 Foodie Street <br />
                City, State, ZIP Code
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Call Us
              </h2>
              <p className="text-gray-600">
                Phone: <a href="tel:+1234567890" className="text-red-600">+1 234 567 890</a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Email Us
              </h2>
              <p className="text-gray-600">
                Email: <a href="mailto:info@goldendragon.com" className="text-red-600">info@123restaurant.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
