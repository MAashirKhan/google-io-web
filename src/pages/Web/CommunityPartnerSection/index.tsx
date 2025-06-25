import React, { useEffect, useState } from "react";
import { CommunityPartnersOption } from "../../../constants/PartnerSponsorsList";

const CommunityPartnerSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 5,
  };

  const totalItems = CommunityPartnersOption.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Determine how many items to show based on the screen size
  const getVisibleItems = () => {
    if (window.innerWidth >= 1024) return itemsPerPage.desktop;
    if (window.innerWidth >= 640) return itemsPerPage.tablet;
    return itemsPerPage.mobile;
  };

  const visibleItems = getVisibleItems();

  // Create a duplicated array for looping
  const duplicatedItems = [
    ...CommunityPartnersOption.slice(-visibleItems), // Take last visibleItems for looping
    ...CommunityPartnersOption,
    ...CommunityPartnersOption.slice(0, visibleItems), // Take first visibleItems for looping
  ];

  return (
    <section
      id="partners"
      className="flex w-full flex-col items-center justify-start space-y-8 bg-gray-100 py-16 lg:px-24"
    >
      <h2 className="w-full text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
        Community Partners
      </h2>
      <p className="text-md mt-2 max-w-2xl text-center text-gray-700">
        Some things are simply better when together!
      </p>
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
          }}
        >
          {duplicatedItems.map((item) => (
            <>
              <div
                key={item.name}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/5 p-2 hover:-translate-y-0.5 hover:-translate-x-0.5 group"
              >
                <a href={item.link} target="_blank">
                  <div className="bg-[#000000] border-2 border-black rounded-lg shadow-[3px_3px_0_0_#000000] p-0.5 transition-shadow duration-300 ease-in-out group-hover:shadow-[5px_5px_0_0_#000000]">
                    <div className="bg-white border-2 border-black rounded-md p-4">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="img-carousel object-contain"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnerSection;
