import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStack } from "@/components/sections/MarqueeStack";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stack } from "@/components/sections/Stack";
import { Method } from "@/components/sections/Method";
import { Strengths } from "@/components/sections/Strengths";
import { Distinctions } from "@/components/sections/Distinctions";
import { Experiences } from "@/components/sections/Experiences";
import { Education } from "@/components/sections/Education";
import { Positioning } from "@/components/sections/Positioning";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Socials } from "@/components/sections/Socials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main>
          <Hero />
          <MarqueeStack />
          <Portfolio />
          <Stack />
          <Method />
          <Strengths />
          <Distinctions />
          <Experiences />
          <Education />
          <Positioning />
          <SoftSkills />
          <Socials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
