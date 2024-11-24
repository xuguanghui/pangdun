import Image from "next/image";
import homeSrc from "/public/bg_04.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Scale',
}
export default function Scale() {
  return (
    <Hero altText="home image" content="Scale page!" imgUrl={homeSrc} />
  );
}
