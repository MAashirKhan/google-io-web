import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { FAQItems } from "../../../constants/CardData";

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("1");

  // Define the gradient colors array (same as team section)
  const gradients = [
    "linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)", // Yellow to orange to red
    "linear-gradient(180deg,#34a853,#2daeb8,#4285f4)", // Green to teal to blue
    "linear-gradient(180deg,#fbbc04,#8cc52f,#34a853)", // Yellow to light green to green
    "linear-gradient(180deg,#ea4335,#9b72cb,#4285f4)"  // Red to purple to blue
  ];

  const toggleFAQ = (key: string) => {
    setActiveIndex(activeIndex === key ? null : key);
  };

  return (
    <div className="flex justify-center items-center px-4 pt-32 pb-16">
      <div className="flex flex-col justify-center h-auto max-w-4xl w-full">
        <h1 className="text-3xl md:text-6xl font-bold text-black mb-0">
        Frequently asked questions
        </h1>
        
        <p className="mt-2 text-base">
          Need Answers? Everything you need to know
        </p>
        
        <div className="mt-8 space-y-4">
          {FAQItems?.map((item, index) => (
            <div
              key={item.key}
              className="rounded-xl shadow-lg transform transition-all duration-300 p-1"
              style={{
                background: gradients[index % gradients.length],
              }}
            >
              <div className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(item.key as string)}
                  onTouchStart={() => {}} // Ensure touch events work on mobile
                  className="w-full p-4 md:p-6 bg-white hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 flex justify-between items-center text-left touch-manipulation"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-800 pr-4">
                    {item.label}
                  </span>
                  <div className="flex-shrink-0">
                    {activeIndex === item.key ? (
                      <MdRemove size={24} className="text-gray-600" />
                    ) : (
                      <MdAdd size={24} className="text-gray-600" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`bg-white overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === item.key 
                      ? 'max-h-screen opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-4 md:px-6 pb-4 md:pb-6 pt-2 transform transition-all duration-500 ease-in-out ${
                    activeIndex === item.key 
                      ? 'translate-y-0 opacity-100' 
                      : '-translate-y-4 opacity-0'
                  }`}>
                    <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {item.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
