import Image from "next/image";
import homeSrc from "/public/bg_01.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
}
export default function Home() {
  return (
    <Hero altText="home image" content="Next.js is awesome!" imgUrl={homeSrc} />
  );
}
