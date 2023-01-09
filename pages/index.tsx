import React, { useRef, useEffect, useState } from "react";

import { GetStaticProps } from "next";
import Head from "next/head";

import Navbar from "components/Navbar/Navbar";
import Hero from "components/Hero/Hero";
import TrustedBy from "components/TrustedBy/TrustedBy";
import WhatWeDo from "components/WhatWeDo/WhatWeDo";
import Products from "components/Products/Products";
import Tech from "components/Tech/Tech";
import Communities from "components/Communities/Communities";
import Insights from "components/Insights/Insights";
import Meetups from "components/Meetups/Meetups";
import LetsBuild from "components/LetsBuild/LetsBuild";
import Footer from "components/Footer/Footer";

import { getData } from "data/getData";
import {
  heroSection,
  partners,
  whatWeDo,
  products,
  tech,
  communities,
  insights,
  meetups,
  letsBuild,
  footer,
} from "data/queries";

import { HeroDataType } from "types/heroDataType";
import { PartnersDataType } from "types/partnersDataType";
import { WhatWeDoDataType } from "types/whatWeDoDataType";
import { ProductsDataType } from "types/productsDataType";
import { TechDataType } from "types/techDataType";
import { CommunitiesDataType } from "types/communitiesDataType";
import { InsightsDataType } from "types/insightsDataType";
import { MeetupsDataType } from "types/meetupsDataType";
import { LetsBuildDataType } from "types/letsBuildDataType";
import { FooterDataType } from "types/footerDataType";

export const getStaticProps: GetStaticProps = async () => {
  const heroData = await getData(heroSection);
  const partnersData = await getData(partners);
  const whatWeDoData = await getData(whatWeDo);
  const productsData = await getData(products);
  const techData = await getData(tech);
  const communitiesData = await getData(communities);
  const insightsData = await getData(insights);
  const meetupsData = await getData(meetups);
  const letsBuldData = await getData(letsBuild);
  const footerData = await getData(footer);

  return {
    props: {
      heroData: heroData.data.hero[0],
      partnersData: partnersData.data.trusted_by[0],
      whatWeDoData: whatWeDoData.data.what_we_do[0],
      productsData: productsData.data.products[0],
      techData: techData.data.tech[0],
      communitiesData: communitiesData.data.communities[0],
      insightsData: insightsData.data.insights[0],
      meetupsData: meetupsData.data.meetups[0],
      letsBuildData: letsBuldData.data.lets_build[0],
      footerData: footerData.data.footer[0],
    },
  };
};

type Props = {
  heroData: HeroDataType;
  partnersData: PartnersDataType;
  whatWeDoData: WhatWeDoDataType;
  productsData: ProductsDataType;
  techData: TechDataType;
  communitiesData: CommunitiesDataType;
  insightsData: InsightsDataType;
  meetupsData: MeetupsDataType;
  letsBuildData: LetsBuildDataType;
  footerData: FooterDataType;
};

export default function Home({
  heroData,
  partnersData,
  whatWeDoData,
  productsData,
  letsBuildData,
  techData,
  communitiesData,
  insightsData,
  meetupsData,
  footerData,
}: Props) {
  const trustedRef = useRef<HTMLDivElement | null>(null);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleWindowScrollAndResize = () => {
    if (!trustedRef.current) return;

    const trustedRefTop = trustedRef.current.getBoundingClientRect().top;

    // check if the navbar is about to overlap with the tech section
    if (trustedRefTop <= 80) {
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
      <Hero data={heroData} />

      {/* trusted by */}
      <TrustedBy ref={trustedRef} data={partnersData} />

      {/* what we do */}
      <WhatWeDo data={whatWeDoData} />

      {/* products */}
      <Products data={productsData} />

      {/* tech we love */}
      <Tech data={techData} />

      {/* communities */}
      <Communities data={communitiesData} />

      {/* insights */}
      <Insights data={insightsData} />

      {/* meetups */}
      <Meetups data={meetupsData} />

      {/* let's build */}
      <LetsBuild data={letsBuildData} />

      {/* footer */}
      <Footer data={footerData} />
    </>
  );
}
