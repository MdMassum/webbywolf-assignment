import BenefitsSection from "@/components/LandingPage/BenefitSection";
import BrandLogoSection from "@/components/LandingPage/BrandLogoSection";
import CardSection from "@/components/LandingPage/CardSection";
import DarkHeroSection from "@/components/LandingPage/DarkHeroSection";
import FAQSection from "@/components/LandingPage/FaqSection";
import Hero from "@/components/LandingPage/Hero";
import QuoteFormSection from "@/components/LandingPage/QuoteFormSection";
import ShowcaseSection from "@/components/LandingPage/ShowcaseSection";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";
import SubscribeSection from "@/components/LandingPage/SubscribeSection";
import LimitSection from "@/components/LandingPage/LimitSection";
import TabSection from "@/components/LandingPage/TabSection";
import AppDownloadSection from "@/components/LandingPage/AppDownload";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ShowcaseSection/>
      <BenefitsSection/>
      <DarkHeroSection/>
      <BrandLogoSection/>
      <CardSection/>
      <QuoteFormSection/>
      <AppDownloadSection/>
      <LimitSection/>
      <TestimonialSection/>
      <TabSection/>
      <FAQSection/>
      <SubscribeSection/>
    </div>
  );
}
