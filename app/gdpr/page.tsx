"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gdpr from "@/components/Gdpr";

export default function PrivacyPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#4B6364] pt-20">
      {/* Hero Section */}
      <Gdpr />
      <div className="border-t border-gray-800 mt-8 pt-8 text-center bg-gray-900 text-white py-12">
        <p>&copy; 2024 Luminos Energi AB. Alla rättigheter förbehållna.</p>
      </div>
    </div>
  );
}
