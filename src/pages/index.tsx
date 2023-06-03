import { Inter, Poppins } from "next/font/google";

import IntroductSection from "@/components/sections/introductSection";
import CardsSection from "@/components/sections/cardsSection";

export default function Home() {
  return (
    <>
      <IntroductSection />
      <CardsSection />
    </>
  );
}
