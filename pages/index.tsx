import Head from "next/head";
import Hero from "components/Hero/Hero";

export default function Home() {
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

      {/* hero section */}
      <Hero />
    </>
  );
}
