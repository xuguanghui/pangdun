import Image from "next/image";
import homeSrc from "/public/bg_03.jpg";
import Hero from "@/components/hero";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Reliability() {
  return (
    <Hero altText="home image" content="Reliability page!" imgUrl={homeSrc} />
  );
}
