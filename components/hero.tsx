import Image, { StaticImageData } from "next/image";
import homeSrc from "/public/bg_01.jpg";

interface IProps {
    imgUrl: StaticImageData;
    altText: string;
    content: string;
}
export default function Hero(props: IProps) {
  return (
    <main className=" min-h-screen ">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          alt={props.altText}
          fill
          className="object-cover"
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500"></div>
      </div>
      <div className="flex justify-center  pt-48">
        <h1 className="text-4xl text-white">{props.content}</h1>
      </div>
    </main>
  );
}
