import React from "react";
import { MemoriesData } from "../../../constants/MemoriesData";

const MemoriesSection: React.FC = () => {
  return (
    <section id="memories" className="w-full px-4 md:px-24 py-12">
      <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl mb-12 px-24">
        DevFest 2023 was so much fun.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {
            MemoriesData.map((item, index) => (
                <div className="relative box-container h-full w-full" key={index}>
                <div className="bg-white border-4 border-black rounded-lg p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="mb-2 relative image-container">
                    <img
                        className="w-full h-full rounded-md border-2 border-black aspect-[4/3]"
                        src={item.icon}
                        alt={item.title}
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                    />
                    </div>
                    <div className="flex items-center">
                    <img
                        src="/assets/dots.svg"
                        alt="Icon"
                        className="w-6 h-6 mr-2 object-contain"
                    />
                    <p className="text-xl text-black" style={{ fontFamily: "Architects Daughter, cursive"}}>{item.title}</p>
                    <img
                        src="/assets/dev btm.svg"
                        alt="Event Logo"
                        className="ml-auto w-10 h-10 object-contain"
                    />
                    </div>
                </div>
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default MemoriesSection;
