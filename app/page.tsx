"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Solar from "@/components/Solar";
import BatteryComponent from "@/components/Battery";
import CompletedProjects from "@/components/CompletedProjects";

export default function SolarSystemsSwedish() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="mx-auto">
        {/* Hero Section */}
        <div
          className="min-h-screen relative overflow-hidden bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 py-36">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                data-aos="fade-down"
              >
                LUMINOS <span className="text-primary">ENERGI AB</span>
              </h1> */}
              <p
                className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                På Luminos Energi AB är vi stolta över att vara en del av den
                gröna omställningen. Tillsammans med våra kunder bidrar vi inte
                bara till ett mer hållbart samhälle utan säkerställer även att
                kapital används på bästa möjliga sätt. Grön energi är idag en av
                de bästa investeringar ett företag eller en fastighetsägare kan
                göra.
              </p>
            </div>
          </div>
        </div>

        <div id="solar" className="pt-0">
          <Solar />
        </div>
        <div id="battery" className="pt-20">
          <BatteryComponent />
        </div>
        <div id="references" className="pt-20">
          <CompletedProjects />
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center bg-gray-900 text-white py-12">
        <p>&copy; 2024 Luminos Energi AB. Alla rättigheter förbehållna.</p>
      </div>
    </div>
  );
}
