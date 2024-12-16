"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Zap, TrendingUp, BarChart2, Sun } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BatteryComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <section
          className="text-center mb-16 relative bg-cover bg-center py-20 px-6 h-[400px] flex items-center justify-center flex-col text-white"
          data-aos="fade-down"
          style={{ backgroundImage: "url('/images/battery1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="z-10 max-w-4xl">
            <h2 className="text-3xl font-semibold text-white mb-4">
              GENERERA INTÄKTER OCH OPTIMERA DIN ENERGIFÖRBRUKNING MED
              BATTERILAGER
            </h2>
            <p className="text-2xl font-medium text-white">Batterilösningar</p>
          </div>
        </section>

        <div className="container mx-auto p-8">
          <div className="mb-8" data-aos="fade-up">
            <p className="">
              Luminos Energi erbjuder innovativa gröna energilösningar som inte
              bara hjälper företag med att effektivisera sin energiförbrukning,
              utan även genererar löpande intäkter från energimarknaden.
              Tillsammans med solceller och avancerad mjukvara skapar ett
              batterilager en integrerad enhet som optimerar er fastighet och
              verksamhet utifrån ett energi- och lönsamhetsperspektiv. Ett
              batterilager är en långsiktig investering där kvaliteten på
              battericeller och styrsystem är avgörande för bästa möjliga
              resultat över tid. För att maximera kundnyttan levererar vi därför
              endast batterilager från världens främsta tillverkare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card className="shadow-none border-none" data-aos="fade-right">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-2xl font-medium text-primary">
                  <Zap className="w-8 h-8 text-primary mr-4" />
                  Delta i frekvensbalanseringsmarknaden
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="">
                  Luminos Energi ger ert företag möjlighet att aktivt delta i
                  stödtjänstmarknaderna mot Svenska kraftnät. Genom att ansluta
                  ert batterilager till elnätet kan ditt företag erbjuda
                  stödtjänster tack vare batteriets förmåga att snabbt reagera
                  på förändringar i elnätets balans. Detta genererar inte endast
                  intäkter för ditt företag utan bidrar också till stabiliteten
                  i det svenska elnätet, och därmed samhällsnyttan. Den gröna
                  omställningen och utbyggnaden av energisystemet skapar stora
                  behov av så kallad flexibilitet där utmaningen är att vid var
                  given tidpunkt matcha energiproduktionen med aktuell
                  konsumtion. Elnätet är också mycket känsligt för störningar
                  och avvikelser av olika slag och behöver därför regleras
                  kontinuerligt.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-none border-none" data-aos="fade-left">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-2xl font-medium text-primary">
                  <TrendingUp className="w-8 h-8 text-primary mr-4" />
                  Energiprisarbitrage
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="">
                  Våra batterilager gör det möjligt för ditt företag att lagra
                  överskottsel under perioder av låg efterfrågan och sedan
                  återföra den lagrade energin till nätet när priserna är högre,
                  så kallat energiprisarbitrage. Om ett par år kommer
                  batterilager också fylla en allt viktigare roll i att
                  förflytta kraftproduktion i tid och för dessa tjänster kommer
                  också nya marknader att tillkomma.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card
            className="mb-16 shadow-none border-none p-0"
            data-aos="fade-up"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center text-2xl font-medium text-primary mb-8">
                    <BarChart2 className="w-8 h-8 text-primary mr-4" />
                    Effektiv hantering av interna effekttoppar
                  </div>
                  <p className=" mb-4">
                    En annan betydande fördel med våra batterilager är
                    möjligheten att hantera interna effekttoppar i er
                    verksamhet. Under perioder av hög belastning, som vid
                    uppstart av produktionen på morgonen, kan batterilagret
                    fungera som en kraftfull buffert vilket minskar ert
                    effektuttag från elnätet och därmed effektivt kapar era
                    kostsamma effekttoppar. Denna effektreserv är också en
                    fördel i samband med elbils- eller lastbilsladdning.
                  </p>
                  <p className="">
                    Kostnad för toppar i effektuttag kommer med all sannolikhet
                    att bli högre kommande år och ett tydligt tecken på detta är
                    att Energimarknadsinspektionen givit nätägarna grönt ljus
                    att höja nätavgifterna med 100 Mdr fram till 2027.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/battery2.jpeg"
                    alt="Solceller på tak"
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="mb-16 shadow-none border-none p-0"
            data-aos="fade-up"
          >
            <CardContent className="p-0 mb-4">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="">
                  <div className="flex items-center text-2xl font-medium text-primary mb-8  ">
                    <Sun className="w-8 h-8 text-primary mr-4" />
                    Lagring av solenergi
                  </div>
                  <p className="">
                    I det fall ert företag installerar, eller redan har
                    installerat, solceller kan batterilagret lagra eventuell
                    överskottsel från solcellsanläggningen. Solcellerna
                    producerar som bekant mest el under dagen och ingenting
                    nattetid. Genom att eventuell överskottsenergi som
                    solcellerna producerar absorberas i batterilagret och sedan
                    används när solen inte lyser kan energikostnaden sänkas för
                    ert företag, alternativt att elen säljs ut i elnätet när den
                    är som dyrast vilket i stället skapar intäkter.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
