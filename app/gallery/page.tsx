import React from "react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative mb-16 flex  h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* all the elements in here will be placed on the background */}
      <div className="flex flex-col items-center justify-center">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Let me be on your Team!
        </p>
        <Button
          borderRadius="1.75rem"
          className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
