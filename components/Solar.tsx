"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Sun, BarChart2, FileCheck, HardHat } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Solar() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <section
          className="text-center mb-16 bg-cover bg-center py-20 px-6 relative h-[400px] flex items-center justify-center flex-col"
          style={{ backgroundImage: "url('/images/solar3.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <h2
            data-aos="fade-down"
            className="text-4xl font-semibold text-white mb-4 max-w-4xl"
          >
            MINSKA DINA ENERGIKOSTNADER OCH KOLDIXIDAVTRYCK MED SOLCELLER
          </h2>
          <p data-aos="fade-down" className="text-2xl font-medium text-white">
            Utnyttja Solens Kraft
          </p>
        </section>

        <div className="container mx-auto p-8">
          <div className="flex flex-col md:flex-row gap-10">
            <p className="text-gray-700 mb-4" data-aos="fade-right">
              Genom att installera solceller på er fastighet, eller på ett
              markområde med markstativ, minskar ni era elkostnader betydligt
              över tid. Dessutom förbättras er verksamhets koldioxidavtryck
              vilket blir allt viktigare för företag inom EU i enlighet med den
              nya hållbarhetsredovisningen CSRD (Corporate Sustainability
              Reporting Directive). För fastighetsägare påverkar solcellerna
              även fastighetens energiklassificering vilket också ökar alltmer i
              betydelse eftersom det i förlängningen indirekt även påverkar
              försäkringsmöjligheter, finansieringskostnader m.m.
            </p>
            <div className="gap-10">
              <p
                className="text-gray-700 mb-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Solceller är en mycket lönsam investering för både
                industriföretag och renodlade fastighetsägare. Och för att
                lönsamheten ska bli optimal är det viktigt att solcellernas
                effekt anpassas utifrån era specifika förutsättningar. En
                solcellsanläggning ska nämligen i möjligaste mån dimensioneras
                utifrån er elförbrukningsprofil för att på så sätt minimera
                mängden el som går tillbaka ut i nätet. Via solceller som täcker
                egen elkonsumtion slipper ni nämligen både nätavgifter samt
                energiskatt givet att anläggningen understiger 500 kWp.
                Eventuell överskottsel genererar i stället endast intäkter i
                förhållande till rådande spotpris vilket sänker anläggningens
                lönsamhet.
              </p>
              <p
                className="text-gray-700 mb-4"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                För större installationer överstigande 500 kWp, där
                energiskatten inte undviks, har våra kunder ofta reducerad
                energiskatt vilket gör att skatten inte påverkar kalkylen i
                nämnvärd utsträckning. Om så inte är fallet gör vi i stället en
                särskild lönsamhetsanalys för er som kund där samtliga
                parametrar inklusive energiskatten tas i beaktande. I dessa
                analyser visar det sig allt som oftast att en större
                solcellsanläggning ändå lönar sig i jämförelse med en mindre som
                är skattebefriad.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start mt-20">
            <div className="">
              <p className="text-gray-700 mb-4" data-aos="fade-right">
                Vi på Luminos Energi följer kontinuerligt teknikutvecklingen
                inom grön energi och tillser att våra kunder alltid har tillgång
                till det senaste och bästa tillgängliga komponenterna på
                marknaden. För oss är kvalitet helt avgörande eftersom en bra
                solcellsanläggning idag har en livslängd överstigande 30 år.
                Vilka garantier som erbjuds och hur mycket effekten degraderas
                över tid är exempel på faktorer som vi beaktar noga i vår
                urvalsprocess.
              </p>
              <p
                className="text-gray-700"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Förutom kvalitet på solceller, växelriktare samt montagesystem
                ser vi även till att erbjuda de senaste och bästa
                mjukvarulösningarna till våra kunder. Här händer för närvarande
                mycket inom främst hållbarhets- och lönsamhetsoptimering via AI
                (artificiell intelligens), liksom verktyg för
                produktionsövervakning samt återrapportering till övergripande
                hållbarhetssystem.
              </p>
            </div>
            <div className="w-11/12" data-aos="fade-left">
              <Image
                src="/images/solar1.jpeg"
                alt="Luminos Energi team"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>

          <section className="my-16">
            <h2
              className="text-3xl font-semibold text-primary mb-4"
              data-aos="fade-up"
            >
              Vår arbetsmodell
            </h2>
            <div>
              <p
                className="text-gray-700 mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                För att kunna rekommendera en kund vilken solcellslösning som är
                optimal givet de projektspecifika förutsättningarna arbetar vi
                analysbaserat och strukturerat från dag ett. Vår arbetsmodell
                för solcellsprojekt inkluderar över 170 punkter från initial
                kontakt fram till att anläggningen är driftsatt och
                slutbesiktigad. Vi lämnar inget år slumpen och nedan följer
                några exempel på vad vi gör under våra kundprojekt.
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    icon: Sun,
                    title: "Kostnadsfri Fastighetsanalys",
                    description:
                      "Vårt erfarna team av projektörer genomför en noggrann och kostnadsfri analys av ditt tak eller markområde där solcellerna ska placeras. Vi identifierar redan på ett tidigt stadium eventuella utmaningar eller begränsningar som kan komma att påverka projektet senare i produktionsprocessen. För oss är det viktigt att allt blir korrekt anpassat och dimensionerat redan från början för på så sätt säkerställa att ni som kund upplever den kommande produktionsprocessen så smidig som möjligt. I de flesta fall ritar vi därför också upp taket eller markområdet med solceller i CAD vilket minimerar eventuella fel i projekteringen.",
                  },
                  {
                    icon: BarChart2,
                    title: "Kostnadsfritt förslag",
                    description:
                      "För att hjälpa er att fatta ett så välgrundat beslut som möjligt gällande att eventuellt installera solceller erbjuder vi våra kunder en helt kostnadsfri fallstudie. Vi presenterar alltså inte endast en offert utan inkluderar exempelvis även en grundlig ekonomisk analys för att ni ska kunna göra en så välgrundad bedömning som möjligt utifrån investeringens lönsamhet över tid. För oss är det i alla avseenden viktigt med tydlighet och öppenhet gentemot våra kunder och vi kommer aldrig att rekommendera er en lösning som inte föregåtts av ett gediget grundarbete.",
                  },
                  {
                    icon: HardHat,
                    title: "Intern konstruktionsanalys",
                    description:
                      "Innan ett solcellsprojekt startar ser vi också alltid till att vår konstruktör vid behov kontrollräknar takets hållfasthet. Detta gör vi både för våra kunders, samt vår egen säkerhet. Varje tak är unikt och i hållfasthetsberäkningen utgår vi både från ritningar samt fotodokumentation från platsbesök.",
                  },
                  {
                    icon: FileCheck,
                    title: "Högkvalitativ Projektledning",
                    description:
                      "Från första mötet fram till slutbesiktning tar vi för våra kunders räkning alltid hand om hela projektkedjan. Efter det grundläggande analysarbetet tar vår projektgrupp över projektet och de har stor vana av att hantera större och komplexa projekt. De säkerställer att hela produktionsprocessen sker enligt våra högt ställda kvalitetskrav och att ingenting missas på vägen. Projektgruppen sköter även kontinuerlig återrapportering till er som kund vilket gör att ni alltid har nödvändig information och därmed har möjlighet att få svar på eventuella frågor som uppkommer. Vidare tillser Projektgruppen även att projektplanen hålls och meddelar er i god tid om några avvikelser skulle uppkomma. Vi tror på öppenhet och dialog med våra kunder och vårt personliga arbetssätt utgör själva grunden i vår verksamhet.",
                  },
                ].map((step, index) => (
                  <Card
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="shadow-none border-none"
                  >
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center text-xl font-semibold text-white">
                        <step.icon className="w-8 h-8 text-primary mr-4" />
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
