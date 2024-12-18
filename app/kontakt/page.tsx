"use client";

import React, { useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/common/Footer";

interface ContactCardProps {
  name: string;
  title: string;
  phone: string;
  email?: string;
}

// Utility function to encode contact information
const encodeContactInfo = (text: string): string => {
  return text
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
};

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  phone,
  email,
}) => (
  <Card className="w-[230px] bg-white/10 backdrop-blur-md border-none text-white hover:bg-white/15 transition-all duration-300">
    <CardContent className="pt-6">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
          <p className="text-lg text-gray-300">{title}</p>
        </div>
        <div className="space-y-3">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center space-x-2 text-gray-300 hover:text-[#fab300] transition-colors duration-200"
            aria-label={`Call ${name}`}
          >
            <Phone size={18} />
            <span
              dangerouslySetInnerHTML={{ __html: encodeContactInfo(phone) }}
            />
          </a>
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center space-x-2 text-gray-300 hover:text-[#fab300] transition-colors duration-200"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
              <span
                dangerouslySetInnerHTML={{ __html: encodeContactInfo(email) }}
              />
            </a>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

// const CompanyInfo = () => (
//   <Card className="w-full max-w-xl bg-white/10 backdrop-blur-md border-none text-white">
//     <CardContent className="pt-6">
//       <h2 className="text-2xl font-normal mb-6 text-[#fab300]">
//         Bolagsuppgifter
//       </h2>
//       <div className="space-y-4">
//         <div className="flex items-center space-x-3">
//           <Building2 className="text-gray-300" />
//           <div>
//             <p className="text-xl font-medium">Luminos Energi AB</p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-3">
//           <MapPin className="text-gray-300" />
//           <div>
//             <p className="text-lg">Box 50385,</p>
//             <p className="text-lg">102 48 Stockholm Sweden</p>
//             <p className="text-lg">VAT number: 556428-8578</p>
//           </div>
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// );

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative pt-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, 
              rgba(0, 0, 0, 0.95), 
              rgba(250, 179, 0, 0.15),
              rgba(0, 0, 0, 0.90)
            ),
            url(../images/ny-bild.jpg)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="space-y-16">
            <div className="text-center" data-aos="fade-down">
              <h1 className="text-5xl md:text-6xl font-normal text-[#fab300] mb-4 [text-shadow:_0_1px_12px_rgb(250_179_0_/_20%)]">
                KONTAKT
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Välkommen att kontakta oss för mer information om våra tjänster
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div data-aos="fade-up" data-aos-delay="200">
                <ContactCard
                  name="Christian von Koch"
                  title="VD"
                  phone="0733 83 01 00"
                  email="christian@luminos.se"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <ContactCard
                  name="Fredrik Johansson"
                  title="Energirådgivare"
                  phone="0733 83 01 01"
                  email="fredrik@luminos.se"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <ContactCard
                  name="Severin Martinov"
                  title="Projektsamordnare"
                  phone="0733 83 01 02"
                  email="severin@luminos.se"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <ContactCard
                  name="Gabriel Eriksson"
                  title="Affärsrådgivare"
                  phone="0733 83 01 04"
                  email="gabriel@luminos.se"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <ContactCard
                  name="Ola Hörnelius"
                  title="Affärsrådgivare"
                  phone="0733 83 01 03"
                  email="ola@luminos.se"
                />
              </div>
            </div>

            {/* Company Info */}
            {/* <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <CompanyInfo />
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
