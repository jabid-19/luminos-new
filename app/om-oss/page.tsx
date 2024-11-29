"use client";

import React, { useEffect } from "react";
import { Sun, Users, Target, Zap, Battery, Cpu } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/common/Footer";

export default function ModernAboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="relative bg-cover bg-center md:h-[600px] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-semibold mb-4" data-aos="fade-down">
            LUMINOS ENERGI AB
          </h1>
          <p className="text-2xl" data-aos="fade-up">
            Framtidens energilösningar
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-primary mb-8">Om Oss</h2>
          <div className="grid  gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Luminos Energi grundades 2023 av Christian von Koch. Bolaget
                utgår från en analysbaserad och strukturerad arbetsmodell
                avseende förnybara energilösningar där kundens projektspecifika
                förutsättningar samt förväntningar grundligt gås igenom innan vi
                skräddarsyr varje enskilt projekt.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vi tror på ett kundnära arbetssätt med hög grad av personlig
                service för att på så sätt säkerställa högsta kvalitet och
                kundnöjdhet. Vi ser också till att kontinuerligt ligga i
                framkant med att hitta marknadens främsta produkter och
                lösningar inom såväl teknik, material samt mjukvara.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-primary mb-8 flex items-center">
            <Sun className="mr-4 text-yellow-500" /> Vår filosofi
          </h2>
          <div className="bg-white rounded-lg">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Luminos Energis grundfilosofi är rotad i vårt engagemang för att
              medverka i omställningen till ett hållbart samhälle för kommande
              generationer. Vi tror på kraften i grön energi, både ur ett
              hållbarhets- och lönsamhetsperspektiv.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vi strävar efter att alltid leverera högsta kvalitet och
              professionell service till våra kunder redan från första kontakt
              fram till installation, slutbesiktning och löpande service. Vi tar
              hand om hela kedjan och via oss är det enkelt att ställa om er
              verksamhet eller fastighet för framtiden.
            </p>
          </div>
        </section>

        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-primary mb-8 flex items-center">
            <Target className="mr-4 text-red-500" /> Målgrupp
          </h2>
          <div className="grid  gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vår arbetsmodell lämpar sig bäst för företag, exempelvis
                fastighetsbolag samt industrier, och vi tar därför inga uppdrag
                från privatpersoner. Bland våra kunder återfinns flera större
                noterade och onoterade bolag, Asset Managers samt välkända
                industriföretag.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vi har via vårt strukturerade arbetssätt stor vana vid att
                hantera större projektportföljer vilket är särskilt viktigt för
                våra större fastighetskunder, där flera projekt ofta behöver
                analyseras och genomföras samtidigt.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-primary mb-8 flex items-center">
            <Zap className="mr-4 text-yellow-500" /> Våra Produkter och Tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solcellsanläggningar",
                icon: Sun,
                description:
                  "Större anläggningar för mark- och takinstallationer.",
              },
              {
                title: "Batterilösningar",
                icon: Battery,
                description:
                  "Nyckelfärdiga lösningar för lagring och energioptimering.",
              },
              {
                title: "AI-baserad Mjukvara",
                icon: Cpu,
                description:
                  "Intelligent styrning för optimal energianvändning.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <service.icon className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-semisemibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-primary mb-4 flex items-center">
            <Users className="mr-4 text-primary" /> Vårt Team
          </h2>
          <div className="bg-white rounded-lg p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Utöver grundaren Christian von Koch inkluderar vårt team personer
              med spetskompetens inom olika områden. Vi har i företaget en väl
              avvägd blandning av gedigen erfarenhet inom exempelvis
              energiteknik, analys, kalkylering, projekt- och arbetsledning,
              samt kvalitetsarbete.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Luminos Energi har valt en arbetsmodell där vi samarbetar med
              rigoröst utvalda underentreprenörer. Orsaken till detta är att vi
              vill säkerställa att vi alltid har de duktigaste teamen inom sitt
              område på respektive del i produktionsprocessen.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
