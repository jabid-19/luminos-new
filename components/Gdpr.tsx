import React from "react";

const Gdpr = () => {
  return (
    <div
      className="relative bg-cover bg-center md:h-[600px] flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/images/gdpr.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10"></div>

      <div className="relative z-10 text-white container max-w-2xl md:px-16 px-8 py-20">
        <p className="text-3xl mb-2 font-semibold">
          HANTERING AV PERSONUPPGIFTER
        </p>
        <p data-aos="fade-up">
          Luminos Energi hanterar personuppgifter, dock bara de personuppgifter
          som är relevanta och nödvändiga, och vi behåller dem endast så länge
          det är nödvändigt för de syften de behövs till.
          Personuppgiftshanteringen följer gällande regler och bestämmelser.
        </p>
        <p data-aos="fade-up" className="py-4">
          Vi delar inte dina personuppgifter till annonsörer eller andra
          organisationer. Men om det behövs kommer vi att dela med oss av dina
          kontaktuppgifter till tredje part om det är nödvändigt för att t.ex.
          kunna uppfylla våra skyldigheter gentemot dig som kund.
        </p>
        <p data-aos="fade-up">
          Har du frågor om dina personuppgifter, vad vi sparat eller om du vill
          att vi ska radera dessa? Hör av dig till info@luminos.se.
        </p>
      </div>
    </div>
  );
};

export default Gdpr;
