"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Solar from "@/components/Solar";
import BatteryComponent from "@/components/Battery";
import CompletedProjects from "@/components/CompletedProjects";
import Gdpr from "@/components/Gdpr";
import Link from "next/link";

export default function SolarSystemsSwedish() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen text-gray-800">
      <div className="mx-auto text-gray-700">
        {/* Hero Section */}
        <div
          className="min-h-screen relative overflow-hidden bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 py-36">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                data-aos="fade-down"
              >
                LUMINOS <span className="text-primary">ENERGI AB</span>
              </h1>
              <p
                className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                På Luminos Energi AB är vi stolta över att vara en del av den
                gröna omställningen. Tillsammans med våra kunder bidrar vi inte
                bara till ett mer hållbart samhälle utan säkerställer även att
                kapital används på bästa möjliga sätt.
              </p>
              <Link href="/kontakt">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white mt-8 px-8 py-3 text-lg rounded-full transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  Boka Konsultation
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: "15 000+",
                  subtitle: "Installationer",
                  description: "Nöjda kunder",
                },
                {
                  title: "25 år",
                  subtitle: "Garanti",
                  description: "På alla solpaneler",
                },
                {
                  title: "70%",
                  subtitle: "Besparing",
                  description: "På energikostnader",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {stat.subtitle}
                  </p>
                  <p className="text-gray-200 text-sm">{stat.description}</p>
                </div>
              ))}
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
        <div id="gdpr" className="pt-20">
          <Gdpr />
        </div>
      </div>
    </div>
  );
}
