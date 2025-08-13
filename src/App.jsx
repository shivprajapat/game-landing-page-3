import React, { useEffect, useState } from "react";
import { Footer, Header, Loader } from "./components";
import {
  About,
  Banner,
  DownloadCashApp,
  EnjoyGames,
  FAQ,
  InstallApp,
  WhatWeOffer,
  Winners,
} from "./sections";
import { useIsMobile } from "./hooks/useIsMobile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollArrow from "./components/ScrollArrow";

const App = () => {
  const isMobile = useIsMobile(680);

  let [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      // Optional configuration options
      duration: 1000, // Animation duration in milliseconds
      // once: true, // Whether animation should only happen once
      offset: 200, // Offset (in px) from the top of the screen
    });
    AOS.refresh();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="pt-5 sm:pt-8 p-4 container mx-auto">
          <Header />
          <Banner />
          <EnjoyGames />
          <About />
          <Winners />
          <DownloadCashApp />
          <InstallApp />
          <WhatWeOffer />
          <FAQ />
          {!isMobile && <ScrollArrow />}
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;
