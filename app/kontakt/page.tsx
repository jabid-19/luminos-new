import React from "react";

interface ContactCardProps {
  name: string;
  title: string;
  phone: string;
  email?: string; // Email is optional
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  phone,
  email,
}) => (
  <div className="flex flex-col">
    <h2 className="text-2xl font-medium mb-2">{name}</h2>
    <p className="text-xl font-medium mb-2">{title}</p>
    <a href={`tel:${phone}`} className="text-lg" aria-label={`Call ${name}`}>
      {phone}
    </a>
    {email && (
      <a
        href={`mailto:${email}`}
        className="text-lg"
        aria-label={`Email ${name}`}
      >
        {email}
      </a>
    )}
  </div>
);

const page = () => {
  return (
    <div className="bg-black/50 bg-blend-overlay text-white">
      <div
        className="flex flex-wrap items-start justify-center gap-10 py-12 px-8"
        style={{
          backgroundImage: "url(../images/ny-bild.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl text-[#fab300] mb-8">KONTAKT</h1>
          <div className="flex flex-col gap-12">
            {/* Contact cards */}
            <ContactCard
              name="Christian von Koch"
              title="VD"
              phone="0733 83 01 00"
              email="christian@luminos.se"
            />
            <div className="flex flex-wrap gap-12">
              <ContactCard
                name="Fredrik Johansson"
                title="Marknad"
                phone="0733 83 01 01"
                email="fredrik@luminos.se"
              />
              <ContactCard
                name="Severin Martinov"
                title="Projektsamordnare"
                phone="0733 83 01 02"
              />
              <ContactCard
                name="Gabriel Eriksson"
                title="Marknad"
                phone="0733 83 01 04"
                email="gabriel@luminos.se"
              />
              <ContactCard
                name="Ola Hörnelius"
                title="Marknad"
                phone="0733 83 01 03"
                email="ola@luminos.se"
              />
            </div>
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Bolagsuppgifter</h2>
              <p className="text-xl font-medium mb-2">
                Företagsnamn: Luminos Energi AB
              </p>
              <p className="text-lg">Karlavägen 18</p>
              <p className="text-lg">114 31 Stockholm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
