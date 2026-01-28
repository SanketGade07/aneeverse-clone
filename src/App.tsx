import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import WhatWeCreate from "./components/WhatWeCreate";
import CommandCenter from "./components/CommandCenter";
import HiringSection from "./components/HiringSection";
import OurWorks from "./components/OurWorks";
import Testimonials from "./components/Testimonials";

import Blog from "./components/Blog";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#073742] to-[#062d33]">
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhatWeCreate />
      <CommandCenter />
      <HiringSection />
      <OurWorks />
      <Testimonials />
      <Blog />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
