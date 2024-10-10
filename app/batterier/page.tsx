"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingDown, Sliders, BarChart } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BatterySolutionsLanding() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen ">
      <main>
        <section className="py-20 text-center text-yellow-800 bg-gradient-to-b from-amber-500 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              Optimera Din Energiförbrukning och Generera Intäkter
            </h2>
            <p
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Med Luminos Energi AB:s avancerade batterilösningar kan ditt
              företag effektivisera energiförbrukningen och delta aktivt på
              energimarknaden.
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full transform transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Utforska våra lösningar
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white" id="om-oss">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              Våra Batterilösningar
            </h3>
            <p
              className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              På Luminos Energi AB strävar vi efter att erbjuda innovativa
              energilösningar som inte bara hjälper företag att effektivisera
              sin energiförbrukning utan även att generera intäkter på
              energimarknaden.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="losningar">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              Fördelar med våra Batterilösningar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Kostnadsbesparingar",
                  icon: <TrendingDown className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Lagra överskottsel under perioder av låg efterfrågan och använd den när priserna är högre för att minska elkostnaderna.",
                  animation: "flip-left",
                },
                {
                  title: "Frekvensbalansering",
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Delta aktivt i frekvensbalanseringsmarknaden och generera intäkter genom att erbjuda reglerkapacitet.",
                  animation: "flip-up",
                },
                {
                  title: "Hantering av Effekttoppar",
                  icon: <BarChart className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Använd batteriet som en kraftfull buffert för att hantera interna effekttoppar och minska trycket på elnätet.",
                  animation: "flip-down",
                },
                {
                  title: "Flexibla Lösningar",
                  icon: <Sliders className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Skräddarsydda batterilösningar anpassade efter ditt företags specifika behov och mål.",
                  animation: "flip-right",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="shadow-none border-none transform transition-transform hover:scale-105 duration-300"
                  data-aos={item.animation}
                  data-aos-delay={index * 150}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="transform transition-transform hover:rotate-12 duration-300">
                        {item.icon}
                      </div>
                      <span className="ml-2">{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-16 bg-gradient-to-r from-yellow-500 to-amber-600 relative overflow-hidden"
          id="hur-det-fungerar"
        >
          <div
            className="absolute inset-0 opacity-10"
            data-aos="fade"
            data-aos-duration="1500"
          />
          <div className="container mx-auto px-4 relative">
            <h3
              className="text-3xl font-bold mb-8 text-center text-white"
              data-aos="zoom-in-up"
            >
              Hur det fungerar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div
                className="text-white"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h4 className="text-2xl font-semibold mb-4">
                  Frekvensbalanseringsmarknaden
                </h4>
                <p className="opacity-90 mb-4">
                  Frekvensbalansering är avgörande för att upprätthålla
                  stabiliteten i elsystemet. Det innebär snabba och precisa
                  åtgärder för att matcha elproduktion och elförbrukning.
                </p>
              </div>
              <div
                className="text-white"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <h4 className="text-2xl font-semibold mb-4">
                  Kommersiella Batterier
                </h4>
                <p className="opacity-90 mb-4">
                  Kommersiella batterier består huvudsakligen av celler och
                  batterihanteringssystem (BMS).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h3
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              data-aos="fade-down"
            >
              Aggregatorers Roll
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0" data-aos="zoom-in-right">
                <Image
                  src="/images/solar-panel.jpg"
                  alt="Aggregator illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div
                className="md:w-1/2 md:pl-8"
                data-aos="zoom-in-left"
                data-aos-delay="200"
              >
                <p className="text-gray-600 mb-4">
                  Aggregatorer spelar en viktig roll i
                  frekvensbalanseringsmarknaden genom att samla och koordinera
                  olika enheter.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {[
                    "Skapar resurspooler genom att ansluta och styra flera mindre producenter eller förbrukare",
                    "Använder avancerad teknik för koordinering och optimering av resurser",
                    "Deltar aktivt på frekvensbalanseringsmarknaden",
                    "Introducerar innovativa affärsmodeller för effektiv energianvändning",
                  ].map((item, index) => (
                    <li
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={400 + index * 100}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-primary text-white hover:bg-yellow-600 rounded-full transform transition-transform hover:scale-105"
                  data-aos="flip-up"
                  data-aos-delay="800"
                >
                  Lär dig mer om aggregatorer
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-amber-50 relative overflow-hidden"
          id="kontakt"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #fbbf24 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
            data-aos="fade"
            data-aos-duration="1500"
          />
          <div className="container mx-auto px-4 text-center relative">
            <h3
              className="text-3xl font-bold mb-4 text-gray-800"
              data-aos="zoom-in"
            >
              Ta steget mot en hållbar energiframtid
            </h3>
            <p
              className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Kontakta oss idag för att diskutera hur våra batterilösningar kan
              optimera er energiförbrukning.
            </p>
            <Button
              className="rounded-full bg-primary text-white hover:bg-yellow-600 text-lg px-8 py-3 transform transition-transform hover:scale-110"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              Kontakta Oss Nu
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
