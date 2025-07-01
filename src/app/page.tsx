import BenefitsSection from "@/components/LandingPage/BenefitSection";
import BrandLogoSection from "@/components/LandingPage/BrandLogoSection";
import CardSection from "@/components/LandingPage/CardSection";
import DarkHeroSection from "@/components/LandingPage/DarkHeroSection";
import Hero from "@/components/LandingPage/Hero";
import QuoteFormSection from "@/components/LandingPage/QuoteFormSection";
import ShowcaseSection from "@/components/LandingPage/ShowcaseSection";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <ShowcaseSection/>
      <BenefitsSection/>
      <DarkHeroSection/>
      <BrandLogoSection/>
      <CardSection/>
      <QuoteFormSection/>
    </div>
  );
}
