import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "components/Navbar/Navbar";
import Hero from "components/Hero/Hero";
import Tech from "components/Tech/Tech";
import Communities from "components/Communities/Communities";
import Insights from "components/Insights/Insights";
import Footer from "components/Footer/Footer";

export default function Home() {
  const techRef = useRef<HTMLDivElement | null>(null);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleWindowScrollAndResize = () => {
    if (!techRef.current) return;

    const techRefTop = techRef.current.getBoundingClientRect().top;

    // check if the navbar is about to overlap with the tech section
    if (techRefTop <= 80) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScrollAndResize);
    window.addEventListener("resize", handleWindowScrollAndResize);

    return () => {
      window.removeEventListener("scroll", handleWindowScrollAndResize);
      window.removeEventListener("resize", handleWindowScrollAndResize);
    };
  }, [handleWindowScrollAndResize]);

  return (
    <>
      <Head>
        <title>
          GeekyAnts - App Design and Development Studio Turning Ideas Into
          Reality | Research. Collaborate. Build.
        </title>
        <meta
          name="description"
          content="GeekyAnts is a global leading web and mobile app development company that offers design and development services to help your business transform digitally."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="GeekyAnts - App Design and Development Studio Turning Ideas Into Reality | Research. Collaborate. Build."
        ></meta>
        <meta
          property="og:description"
          content="GeekyAnts is a global leading web and mobile app development company that offers design and development services to help your business transform digitally."
        ></meta>
      </Head>

      {/* navbar */}
      <Navbar showNavbar={showNavbar} />

      {/* hero section */}
      <Hero />

      {/* tech we love */}
      <Tech ref={techRef} />

      {/* communities */}
      <Communities />

      {/* insights */}
      <Insights />

      {/* footer */}
      <Footer />
    </>
  );
}
