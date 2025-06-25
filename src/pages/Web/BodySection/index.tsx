import React, { useEffect, useState } from "react";

const BodySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/assets/memories/1.jpg",
      alt: "DevFest 2023 Event Photo 1",
    },
    {
      src: "/assets/memories/2.jpg",
      alt: "DevFest 2023 Event Photo 2",
    },
    {
      src: "/assets/memories/5.jpg",
      alt: "DevFest 2023 Event Photo 3",
    },
    {
      src: "/assets/memories/7.jpg",
      alt: "DevFest 2023 Event Photo 4",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Last Year at I/O Extended</h1>
          <p className="text-gray-700 mt-4">
            I/O Extended 2024 was an unforgettable experience, uniting 500+ passionate participants and 15+ expert speakers for a day filled with inspiration and learning. Attendees engaged in 20+ dynamic sessions, featuring lightning talks, workshops, and discussions on cutting-edge technologies. The event showcased the power of community, collaboration, and knowledge exchange, with participants gaining insights into the latest trends and tools in tech.
          </p>
        </div>

        <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border-2 border-red-500">
            <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)' }}>
              <img src="/assets/counter/speaker.svg" alt="Speakers" className="h-40 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 h-full text-center">
              <h1 className="text-2xl m-[5px] font-bold">20+</h1>
              <p>Speakers</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-500">
            <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#34a853,#2daeb8,#4285f4)' }}>
              <img src="/assets/counter/attendee.svg" alt="Participants" className="h-40 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 h-full text-center">
              <h1 className="text-2xl font-bold m-[5px]">4000+</h1>
              <p>Participants</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-green-500">
            <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#fbbc04,#8cc52f,#34a853)' }}>
              <img src="/assets/counter/workshop.webp" alt="Speakers" className="h-40 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 h-full text-center">
              <h1 className="text-2xl m-[5px] font-bold">3+</h1>
              <p>Workshops</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-blue-500">
            <div className="p-6 flex justify-center items-center" style={{ background: 'linear-gradient(180deg,#ea4335,#9b72cb,#4285f4)' }}>
              <img src="/assets/counter/partner.webp" alt="Speakers" className="h-40 w-auto object-contain" />
            </div>
            <div className="bg-white p-4 h-full text-center">
              <h1 className="text-2xl m-[5px] font-bold">10+</h1>
              <p>Partners</p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout: 2x2 Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 mt-6 w-full">
          {images.map((image, index) => (
            <div className="h-80" key={index}>
            <img
              key={index}
              className="w-full h-full object-cover rounded-lg border-2 border-black"
              src={image.src}
              alt={image.alt}
            />
            </div>
          ))}
        </div>

        {/* Mobile Layout: Carousel */}
        <div className="md:hidden mt-6">
          <div className="overflow-hidden relative w-full">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full p-2">
                  <img
                    className="w-full h-80 object-cover rounded-lg border-2 border-black"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodySection;
