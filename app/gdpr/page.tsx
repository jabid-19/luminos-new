"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gdpr from "@/components/Gdpr";
import Footer from "@/components/common/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative pt-10">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, 
              rgba(0, 0, 0, 0.2), 
              rgba(0, 0, 0, 0.3)
            ),
            url(../images/gdpr.jpg)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Gdpr />
        </div>
        <Footer />
      </div>
    </div>
  );
}
