import React from "react";
import { NavLink } from "react-router-dom";
import { MdCalendarMonth, } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5"

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-transparent items-center justify-center space-y-6 md:space-y-0 md:space-x-6 mt-24 mb-20">
        <div className="md:w-1/2 w-full md:text-left order-2 sm:order-2 md:order-1 lg:order-1 xl:order-1">
          <div className="my-6">
            {/* Google I/O Extended Logo */}
            <div className="mb-2">
              <img
                src="/assets/logo-hero.svg"
                alt="Google I/O Extended"
                className="h-16 md:h-auto object-fill"
              />
            </div>
            {/* Karachi 2025 Text */}
            <h1 className="my-0 text-3xl md:text-5xl font-bold text-[#202124]">
              Karachi 2025
            </h1>
          </div>
          <p className="max-w-[90%]">
            Google I/O Extended is a global community-driven tech conference, hosted by the Google Developer Groups (GDG) community. Each Google I/O event is crafted by its GDG organizers to fit the learning needs and interests of their local developer community, with a strong focus on knowledge exchange, networking, and learning about Google developer technologies.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-2 w-full font-semibold mt-3">
            <div className="flex items-center text-lg gap-1">
              <MdCalendarMonth size={30} color="#727272" />
              <p className="text-sm">12th July, 2025</p>
            </div>
            <div className="flex items-center text-lg gap-1">
              <IoLocationSharp size={30} color="#727272" />
              <p className="text-sm">NASTP, Karachi</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-3">
            <NavLink
              to={"https://forms.gle/QXFMk4nqhxgLs6xn7"}
              target="_blank"
              className="rounded-3xl font-medium text-white text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
               style={{ background: 'linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)' }}
            >
              Register Now
            </NavLink>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center order-1 sm:order-1 md:order-2 lg:order-2 xl:order-2">
          <img
            className="object-contain"
            src="/assets/hero-img-new.svg"
            alt="logo"
          />
        </div>
      </div>

    </>
  );
};
export default HeroSection;
