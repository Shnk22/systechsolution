import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import SectionDivider from "./components/SectionDivider";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Reveal from "./components/Reveal";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2800);

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);
  return (
    <>
      {showSplash ? (
        <SplashScreen fadeOut={fadeOut} />
      ) : (
        <div>
          <Navbar />

          <Hero />

          <SectionDivider />

          <Reveal>
            <TrustBar />
          </Reveal>
          <SectionDivider />
          <Reveal>
            <About />
          </Reveal>
          <SectionDivider />
          <Reveal>
            <Solutions />
          </Reveal>
          <SectionDivider />
          <Reveal>
            <Industries />
          </Reveal>
          <SectionDivider />
          <Reveal>
            <Clients />
          </Reveal>
          <SectionDivider />
          <Reveal>
            <Contact />
          </Reveal>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
