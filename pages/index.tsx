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
  communities,
  insights,
  communityMeetups,
  footer,
} from "data/queries";

import { HeroDataType } from "types/heroDataType";
import { ProductsDataType } from "types/productsDataType";
import { CommunitiesDataType } from "types/communitiesDataType";
import { InsightsDataType } from "types/insightsDataType";
import { MeetupsDataType } from "types/meetupsDataType";
import { FooterDataType } from "types/footerDataType";

export const getStaticProps: GetStaticProps = async () => {
  const heroData = await getData(heroSection);
  const partnersData = await getData(partners);
  const whatWeDoData = await getData(whatWeDo);
  const productsData = await getData(products);
  const communitiesData = await getData(communities);
  const insightsData = await getData(insights);
  const communityMeetupsData = await getData(communityMeetups);
  const footerData = await getData(footer);

  return {
    props: {
      heroData: heroData.data.ban_ner[0],
      partnersData: partnersData.data.trustedPartner[0].partners,
      whatWeDoData: whatWeDoData.data.work,
      productsData: productsData.data.sourceProducts,
      communitiesData: communitiesData.data.communities[0].communities,
      insightsData: insightsData.data.insights,
      communityMeetupsData:
        communityMeetupsData.data.communityMeetup[0].meetups,
      footerData: footerData.data.footer[0],
    },
  };
};

type Props = {
  heroData: HeroDataType;
  partnersData: string[];
  whatWeDoData: ProductsDataType;
  productsData: ProductsDataType;
  communitiesData: CommunitiesDataType;
  insightsData: InsightsDataType;
  communityMeetupsData: MeetupsDataType;
  footerData: FooterDataType;
};

export default function Home({
  heroData,
  partnersData,
  whatWeDoData,
  productsData,
  communitiesData,
  insightsData,
  communityMeetupsData,
  footerData,
}: Props) {
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
      <Hero data={heroData} />

      {/* trusted by */}
      <TrustedBy data={partnersData} />

      {/* what we do */}
      <WhatWeDo data={whatWeDoData} />

      {/* products */}
      <Products data={productsData} />

      {/* tech we love */}
      <Tech ref={techRef} />

      {/* communities */}
      <Communities data={communitiesData} />

      {/* insights */}
      <Insights data={insightsData} />

      {/* meetups */}
      <Meetups data={communityMeetupsData} />

      {/* let's build */}
      <LetsBuild />

      {/* footer */}
      <Footer data={footerData} />
    </>
  );
}
