import React from "react";
import { SponsorsOption } from "../../../constants/PartnerSponsorsList";

const SponsorSection: React.FC = () => {
  return (
    <section className="mt-24">
      <h1 className="text-3xl font-bold">Past Sponsors and Partners</h1>
      <p className="mt-2">Sponsors dedicated to building remarkable experience!</p>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
        {SponsorsOption?.map((sponsor, index) => (
          <div key={index} className="items-center bg-gray-100 cursor-pointer rounded-lg border border-black w-full h-full p-2 flex justify-center">
            <div className="relative" aria-label="sponsor-logo" role="img">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="object-contain w-full h-full"
                  src={sponsor.icon}
                  alt={sponsor.name}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
