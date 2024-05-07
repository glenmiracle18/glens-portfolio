"use client";
import { ParallaxScroll } from "@/components/ui/parralx-scrolling";
import Photo1 from "@/public/assets/photo1.jpg";
import Photo2 from "@/public/assets/photo2.jpg";
import Photo3 from "@/public/assets/photo2.jpg";
import Photo4 from "@/public/assets/photo4.jpg";
import Photo5 from "@/public/assets/photo5.jpg";
import Photo6 from "@/public/assets/photo6.jpg";
import Photo7 from "@/public/assets/photo7.jpg";
import Photo8 from "@/public/assets/photo8.jpg";
import Photo9 from "@/public/assets/photo9.jpg";
import Photo10 from "@/public/assets/photo10.jpg";
import Photo11 from "@/public/assets/photo11.jpg";
import Photo12 from "@/public/assets/photo12.png";
import Photo13 from "@/public/assets/photo13.png";
import Photo14 from "@/public/assets/photo14.png";
import Photo15 from "@/public/assets/photo15.jpg";
import Photo16 from "@/public/assets/photo16.jpg";
import Photo17 from "@/public/assets/photo17.jpg";
import Photo18 from "@/public/assets/photo18.jpg";
import Photo19 from "@/public/assets/photo19.jpg";
import Photo20 from "@/public/assets/photo20.jpg";

const Gallery = () => {
  return (
    <>
      <div className="mt-4">
        <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl text-center">
          Welcome to my photography catalog
        </h1>
      </div>
      <ParallaxScroll images={images} />;
    </>
  );
};

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
  Photo15,
  Photo16,
  Photo17,
  Photo18,
  Photo19,
  Photo20,
];

export default Gallery;
