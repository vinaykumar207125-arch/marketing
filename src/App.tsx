import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import { DifferenceSection } from "./components/DifferenceSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { ProcessSection } from "./components/ProcessSection";
import { PricingSection } from "./components/PricingSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { AiAssistant } from "./components/AiAssistant";
import { ProjectCaseStudy } from "./data/content";

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [caseStudyNotes, setCaseStudyNotes] = useState<string>("");

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    scrollToContact();
  };

  const handleStartSimilar = (projectTitle: string) => {
    setCaseStudyNotes(projectTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] apple-mesh-bg text-[#1d1d1f] selection:bg-[#6A1B29] selection:text-[#FFF8E7] pb-14 lg:pb-0 font-sans">
      {/* 3-Zone Apple Liquid Glass Top Bar Navigation */}
      <Navbar onStartProject={scrollToContact} />

      <main>
        {/* Section 3: Hero Section */}
        <Hero onStartProject={scrollToContact} onViewWork={scrollToWork} />

        {/* Section 4: Intro Section */}
        <IntroSection />

        {/* Section 7 & 8: Selected Work / Portfolio Section */}
        <PortfolioSection onSelectProject={(project) => setActiveCaseStudy(project)} />

        {/* Section 5: Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 6: The Aura Captures Difference */}
        <DifferenceSection />

        {/* Section 9: Industries Section */}
        <IndustriesSection onTalkToUs={scrollToContact} />

        {/* Section 10: Process Section */}
        <ProcessSection />

        {/* Section 11: Pricing / Packages Section */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* Section 12 & 13: About Page & Meet The Team (Apple Liquid Glass Theme) */}
        <AboutSection onConnectFounder={scrollToContact} />

        {/* Section 14: Testimonials */}
        <TestimonialsSection />

        {/* Section 15: FAQ Section */}
        <FaqSection />

        {/* Section 16: Contact Section */}
        <ContactSection
          initialService={selectedService}
          initialPackage={selectedPackage}
          initialNotes={caseStudyNotes}
        />
      </main>

      {/* Section 17: Minimal Apple Liquid Glass Editorial Footer */}
      <Footer />

      {/* Section 20: Mobile Sticky Bar (WhatsApp & Call) */}
      <MobileStickyBar />

      {/* AI Studio Assistant */}
      <AiAssistant
        onSelectPackage={handleSelectPackage}
        onNavigateContact={scrollToContact}
      />

      {/* Section 8: Case Study Detail Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={handleStartSimilar}
      />
    </div>
  );
}
