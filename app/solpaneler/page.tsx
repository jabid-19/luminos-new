import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, BarChart, Users, Zap, Leaf, Cpu, Settings } from "lucide-react";

export default function LuminosEnergiLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-amber-600">
      <main>
        <section className="py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solpaneler på Tak
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Utnyttja Solens Kraft med Luminos Energi AB – Din Partner för
              Hållbar Energi
            </p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full">
              Kontakta Oss
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white" id="om-oss">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Om Luminos Energi AB
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center">
              Välkommen till Luminos Energi AB, din partner för att omvandla
              solens energi till en lönsam och hållbar investering för ditt
              företag. Inom vårt omfattande B2B-segment erbjuder vi
              skräddarsydda takmonterade solpanelslösningar för kommersiella
              fastigheter. Vi strävar efter att göra övergången till solenergi
              smidig och lönsam för företag.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="tjanster">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Vår Helhetslösning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Kostnadsfri Fastighetsanalys",
                  icon: <Sun className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Vårt erfarna team av projektörer genomför en noggrann och kostnadsfri analys av ditt tak. Vi identifierar de optimala placeringarna för att maximera solenergiutvinningen.",
                },
                {
                  title: "Kostnadsfri Fallstudie",
                  icon: <BarChart className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Vi erbjuder en helt kostnadsfri fallstudie som inkluderar alla finansiella parametrar för att bedöma investeringens lönsamhet. Vi tillhandahåller detaljerad information om förväntad elproduktion och avkastning.",
                },
                {
                  title: "Högkvalitativ Projektledning",
                  icon: <Users className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Från första mötet till slutbesiktning tar vi hand om hela projektkedjan. Vår dedikerade projektledning säkerställer effektivitet och hög kvalitet genom varje steg av installationen.",
                },
                {
                  title: "Intern Konstruktionsanalys",
                  icon: <Zap className="h-8 w-8 text-yellow-500" />,
                  description:
                    "Våra interna konstruktörer analyserar fastighetens ritningar och genomför noggranna platsbesök för att garantera att takets hållfasthet är tillräcklig för montering av solpaneler.",
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

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Varför Välja Luminos Energi AB
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hållbarhet i Fokus",
                  icon: <Leaf className="h-8 w-8 text-yellow-600" />,
                  description:
                    "Vi strävar efter att göra hållbar energi tillgänglig och lönsam för företag. Genom att välja Luminos Energi AB väljer du en hållbar framtid för din verksamhet.",
                },
                {
                  title: "Teknologisk Innovation",
                  icon: <Cpu className="h-8 w-8 text-yellow-600" />,
                  description:
                    "Vi omfamnar och integrerar de senaste teknologiska innovationerna för att säkerställa att ditt företag har tillgång till toppmodern solenergiteknik.",
                },
                {
                  title: "Kundanpassade Lösningar",
                  icon: <Settings className="h-8 w-8 text-yellow-600" />,
                  description:
                    "Våra solpanelslösningar är skräddarsydda för att möta dina specifika behov och mål.",
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/solar-panel.jpg"
                  alt="Solpaneler på tak"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-white">
                <h3 className="text-3xl font-bold mb-4 ">
                  Teknologiska Framsteg och Global Tillväxt
                </h3>
                <p className="opacity-90 mb-4">
                  Teknologin bakom solenergi har gjort betydande framsteg de
                  senaste åren, vilket har lett till ökad effektivitet och
                  tillgänglighet. Moderna solpaneler har utvecklats med högre
                  verkningsgrader och sjunkande produktionskostnader, vilket gör
                  dem mer attraktiva och ekonomiskt fördelaktiga för företag
                  världen över.
                </p>
                <p className="opacity-90 mb-4">
                  Den globala solkapaciteten fortsätter att öka, och antalet
                  installerade megawatt (MW) av solenergi har nått imponerande
                  nivåer. Att utnyttja solens kraft har blivit en avgörande del
                  av den globala energiomställningen.
                </p>
                <p className="opacity-90 mb-4">
                  Luminos Energi AB är stolta över att vara en del av denna
                  solrevolution och fortsätter att erbjuda toppmodern solteknik
                  som hjälper företag att dra nytta av solens kraft.
                </p>
                <Button className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-full">
                  Läs Mer om Teknologin
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" id="kontakt">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Gör Solen till Din Mest Lönsamma Affärspartner
            </h3>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Kontakta oss idag för att inleda resan mot en grönare och mer
              ekonomiskt hållbar framtid för ditt företag.
            </p>
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600 text-lg px-8 py-3 rounded-full">
              Kontakta Oss Nu
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
