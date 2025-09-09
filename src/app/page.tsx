"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 2,
      textAnimation: 'highlight',
    }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="MemeLoop Logo"
        className="mx-auto"
        buttonText="Join the Memeverse"
        onButtonClick={() => { /* Add your join logic here */ }}
      />
      <div id="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to MemeLoop"
          subtitle="Your ultimate meme hub!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" className="scroll-mt-24">
        <SocialsAbout
          title="About MemeLoop"
          descriptions={[
            "MemeLoop is a hub to celebrate and create the best memes.",
            "Join a community of meme enthusiasts and share your creativity.",
          ]}
        />
      </div>
      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Select your meme", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete the purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Community Tokenomics"
          description="Here's a glance at our token distribution and stats."
          kpiItems={[
            { value: "100K", description: "Total Supply" },
            { value: "60%", description: "Community Rewards" },
            { value: "20%", description: "Team Allocation" },
            { value: "20%", description: "Marketing Fund" },
          ]}
        />
      </div>
      <div id="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeLoop Logo"
          logoText="MemeLoop"
          className="bg-white"
          columns={[
            { title: "Links", items: [
              { label: "Privacy Policy", onClick: () => { /* Handle privacy policy */ } },
              { label: "Terms of Service", onClick: () => { /* Handle terms */ } },
            ] },
            { title: "Social", items: [
              { label: "Twitter", onClick: () => { /* Handle Twitter */ } },
              { label: "Reddit", onClick: () => { /* Handle Reddit */ } }
            ] },
            { title: "Support", items: [
              { label: "Contact Us", onClick: () => { /* Handle contact */ } },
            ] },
          ]}
          copyrightText="© 2023 MemeLoop. All rights reserved."
          onPrivacyClick={() => { /* Handle privacy click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}
