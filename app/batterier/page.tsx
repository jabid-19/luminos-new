import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingDown, Sliders, BarChart } from "lucide-react";

export default function BatterySolutionsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-amber-600">
      <main>
        <section className="py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Optimera Din Energiförbrukning och Generera Intäkter
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Med Luminos Energi AB:s avancerade batterilösningar kan ditt
              företag effektivisera energiförbrukningen och delta aktivt på
              energimarknaden.
            </p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full">
              Utforska våra lösningar
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white" id="om-oss">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Våra Batterilösningar
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center">
              På Luminos Energi AB strävar vi efter att erbjuda innovativa
              energilösningar som inte bara hjälper företag att effektivisera
              sin energiförbrukning utan även att generera intäkter på
              energimarknaden. Våra avancerade batterilösningar är skräddarsydda
              för att möta dagens komplexa energibehov och ger ditt företag en
              unik möjlighet att spara kostnader och samtidigt delta i
              frekvensbalanseringsmarknaden med stödtjänster mot Svenska
              Kraftnät.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="losningar">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Fördelar med våra Batterilösningar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Kostnadsbesparingar",
                  icon: <TrendingDown className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Lagra överskottsel under perioder av låg efterfrågan och använd den när priserna är högre för att minska elkostnaderna.",
                },
                {
                  title: "Frekvensbalansering",
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Delta aktivt i frekvensbalanseringsmarknaden och generera intäkter genom att erbjuda reglerkapacitet.",
                },
                {
                  title: "Hantering av Effekttoppar",
                  icon: <BarChart className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Använd batteriet som en kraftfull buffert för att hantera interna effekttoppar och minska trycket på elnätet.",
                },
                {
                  title: "Flexibla Lösningar",
                  icon: <Sliders className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Skräddarsydda batterilösningar anpassade efter ditt företags specifika behov och mål.",
                },
              ].map((item, index) => (
                <Card key={index} className="shadow-none">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {item.icon}
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

        <section className="py-16" id="hur-det-fungerar">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">
              Hur det fungerar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-white">
                <h4 className="text-2xl font-semibold mb-4">
                  Frekvensbalanseringsmarknaden
                </h4>
                <p className="opacity-90 mb-4">
                  Frekvensbalansering är avgörande för att upprätthålla
                  stabiliteten i elsystemet. Det innebär snabba och precisa
                  åtgärder för att matcha elproduktion och elförbrukning.
                  Marknaden inkluderar segment som Frequency Containment Reserve
                  (FCR), Frequency Restoration Reserve (FRR), och Automatic
                  Generation Control (AGC).
                </p>
              </div>
              <div className="text-white">
                <h4 className="text-2xl font-semibold mb-4">
                  Kommersiella Batterier
                </h4>
                <p className="opacity-90 mb-4">
                  Kommersiella batterier består huvudsakligen av celler och
                  batterihanteringssystem (BMS). Cellerna omvandlar elektrisk
                  energi till kemisk energi och vice versa, medan BMS övervakar
                  och styr cellernas funktion för optimal prestanda och
                  livslängd.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Aggregatorers Roll
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/solar-panel.jpg"
                  alt="Aggregator illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-gray-600 mb-4">
                  Aggregatorer spelar en viktig roll i
                  frekvensbalanseringsmarknaden genom att samla och koordinera
                  olika enheter som förnybara energikällor, energilager och
                  flexibla förbrukare. De möjliggör snabb reaktion på
                  förändringar i elsystemet och bidrar till att upprätthålla
                  frekvensstabilitet.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>
                    Skapar resurspooler genom att ansluta och styra flera mindre
                    producenter eller förbrukare
                  </li>
                  <li>
                    Använder avancerad teknik för koordinering och optimering av
                    resurser
                  </li>
                  <li>Deltar aktivt på frekvensbalanseringsmarknaden</li>
                  <li>
                    Introducerar innovativa affärsmodeller för effektiv
                    energianvändning
                  </li>
                </ul>
                <Button className="bg-primary text-white hover:bg-yellow-600 rounded-full">
                  Lär dig mer om aggregatorer
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50" id="kontakt">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Ta steget mot en hållbar energiframtid
            </h3>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Kontakta oss idag för att diskutera hur våra batterilösningar kan
              optimera er energiförbrukning, öka er konkurrenskraft och generera
              intäkter på energimarknaden.
            </p>
            <Button className="rounded-full bg-primary text-white hover:bg-yellow-600 text-lg px-8 py-3">
              Kontakta Oss Nu
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
