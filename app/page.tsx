"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SolarSystemsSwedish() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen text-gray-800 ">
      <div className="floating-circle w-full md:w-[800px] h-[800px] rounded-full blur-3xl bg-[#ffa916] opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="min-h-[400px] md:h-[600px] h-[700px] p-4 rounded-2xl relative overflow-hidden my-4">
          <div className="absolute inset-0 p-4 md:p-20">
            <section className="text-center mb-8 md:mb-16 flex flex-col items-center z-20">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-800 max-w-4xl"
                data-aos="fade-down"
              >
                Framtidens Energi Börjar Här
              </h1>
              <p
                className="text-base sm:text-lg mb-6 md:mb-8 text-yellow-700 max-w-4xl px-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Upptäck kraften i solenergi med våra moderna solpaneler och
                batterilagringslösningar. Hållbar energi för ditt hem och din
                framtid.
              </p>
              <Button
                className="bg-primary text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Boka Konsultation
              </Button>
            </section>

            <section className="z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 md:mb-16 rounded-3xl overflow-hidden">
              {[
                { title: "15 000+ Installationer", subtitle: "Nöjda kunder" },
                { title: "25 års garanti", subtitle: "På alla solpaneler" },
                { title: "70% Besparing", subtitle: "På energikostnader" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/60 shadow-none rounded-lg sm:rounded-none text-center border-none"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-xl md:text-2xl text-yellow-700">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-yellow-600 text-sm md:text-base">
                      {stat.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </div>

        <div className="bg-white text-gray-900 flex flex-col items-center py-16 md:py-32 mb-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-yellow-800"
              data-aos="fade-down"
            >
              Ledande inom Solenergi
            </p>
            <p
              className="text-center mb-8 text-base md:text-lg text-yellow-800 px-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Vi är Sveriges ledande leverantör av solpaneler och
              energilagringslösningar. Med över ett decennium av erfarenhet
              erbjuder vi högkvalitativa solcellsinstallationer för både
              privatpersoner och företag.
            </p>
            <div
              className="rounded-lg overflow-hidden shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src="/images/solar-panel.jpg"
                alt="Solpaneler installation"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Core Products Section */}
        <section className="mb-20 md:mb-40 px-2">
          <p
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-yellow-800"
            data-aos="fade-down"
          >
            Våra Produkter
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: (
                  <Sun className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Solpaneler",
                description:
                  "Högeffektiva solpaneler med den senaste teknologin för maximal energiproduktion året runt.",
              },
              {
                icon: (
                  <Battery className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Batterilager",
                description:
                  "Smarta batterilösningar som lagrar överskottsenergi för användning när solen inte skiner.",
              },
              {
                icon: (
                  <Zap className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />
                ),
                title: "Smart Styrning",
                description:
                  "Avancerade styrsystem som optimerar din energianvändning och maximerar besparingarna.",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-none text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <CardHeader className="p-4 md:p-6 items-center">
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle className="text-lg md:text-xl text-yellow-700">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <p className="text-yellow-600 text-sm md:text-base">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-40 px-2">
          <div data-aos="fade-right">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-yellow-800">
              Börja Din Resa Mot Grön Energi
            </p>
            <p className="mb-6 text-yellow-700 text-sm md:text-base">
              Ta det första steget mot en mer hållbar framtid. Våra experter
              hjälper dig att hitta den perfekta solenergilösningen för ditt hem
              eller företag.
            </p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto">
              Kontakta Oss
            </Button>
          </div>
          <div
            className="rounded-lg overflow-hidden shadow-lg mt-4 md:mt-0"
            data-aos="fade-left"
          >
            <Image
              src="/images/solar-panel.jpg"
              alt="Solpaneler installation"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section className="relative py-12 md:py-20 mb-20 md:mb-40 px-4 md:px-10 bg-gradient-to-b to-white rounded-xl flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-2 md:px-4 text-center z-10 relative">
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-yellow-600"
              data-aos="fade-down"
            >
              Framtidssäkra Din Energiförsörjning
            </p>
            <p
              className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 text-yellow-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Med stigande energipriser har det aldrig varit ett bättre
              tillfälle att investera i solenergi. Låt oss hjälpa dig att ta
              kontrollen över dina energikostnader och bidra till en grönare
              planet.
            </p>
            <Button
              className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full w-full sm:w-auto"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Beräkna Din Besparing
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
