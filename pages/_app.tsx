import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const font = localFont({
  src: [
    {
      path: "../fonts/SFProDisplay-Bold1.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SFProDisplay-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SFProDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SFProDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/SFProDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

const fontLight = localFont({
  src: [
    {
      path: "../fonts/SFProDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-display-light",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${fontLight.variable} ${font.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
