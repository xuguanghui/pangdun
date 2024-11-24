import Image from "next/image";
import homeSrc from "/public/bg_02.jpeg";
import Hero from "@/components/hero";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Performance',
}
export default function Performance() {
  return (
    <Hero altText="home image" content="Performance page!" imgUrl={homeSrc} />
  );
}
