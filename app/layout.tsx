"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer, Header } from "./components";
import Preloader from "./components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munira Akter",
  description: "Full Stack Web Developer",
  authors: [{ name: "Munira Akter", url: "muniraakter.com" }],
  applicationName: "Munira &apos; s Portfolio",
  keywords: [
    "Frontend-developer, full-stack-developer, munira-akter , react, next.js",
  ],
  icons: "",
  twitter: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <html lang="en">
        <head>
          <title>{"Munira Akter"}</title>
          <link rel="icon" type="image/x-icon" href={"images/favicon.png"} />
        </head>
        <body className="mx-0 px-0 !w-full">
          {loading === false && (
            <>
              <Header></Header>
              {children}
              <Footer></Footer>
              <AnimatedCursor
                innerSize={12}
                outerSize={15}
                color="39, 158, 255"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                outerStyle={{
                  border: "1px solid var(--cursor-color)",
                }}
                innerStyle={{
                  backgroundColor: "var(--cursor-color)",
                }}
                clickables={[
                  "a",
                  'input[type="text"]',
                  'input[type="email"]',
                  'input[type="number"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                  "label[for]",
                  "select",
                  "textarea",
                  "button",
                  ".link",
                  "div",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                ]}></AnimatedCursor>
            </>
          )}

          {loading === true && <Preloader></Preloader>}
        </body>
      </html>
    </>
  );
}
