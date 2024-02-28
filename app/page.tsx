"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/parralax";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { InfiniteMovingCards } from "@/components/ui/infinte-moving-cards";
import know_africa from '../public/assets/Know-Africa.jpeg';
import eduford from '../public/assets/eduford2.png'
import crypto from '../public/assets/crypto.png'
import wrizzle from '../public/assets/wrizzle1.png'
import alu from "../public/assets/alu-logo.png";
import alx from "../public/assets/alx.png";
import { TextGenerateEffect } from "@/components/ui/text-reveal";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Eduford",
    link: "https://glenmiracle18.github.io/university-website.github.io/",
    thumbnail:
      eduford,
  },
  {
    title: "Know-Africa",
    link: "https://know-africa.vercel.app",
    thumbnail:
      know_africa,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Crpto Vault",
    link: "https://cryptovault.com",
    thumbnail:
      crypto,
  },
  {
    title: "WrizzleShop",
    link: "https://wrizzleshop.com",
    thumbnail:
      wrizzle,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

// testimonials array
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const content = [
  {
    title: "Teamwork",
    description:
      "I thrive in collaborative environments, actively listening to my team members, and communicating clearly to achieve common goals. I foster a positive and supportive work environment, readily sharing knowledge and collaborating effectively to solve problems together.",
  },
  {
    title: "Communication",
    description:
      "I excel at conveying technical information clearly and concisely to both technical and non-technical audiences. I write well-documented code, adeptly explain complex concepts in an understandable way, and actively listen to feedback, readily incorporating it to improve my communication and understanding.",
  },
  {
    title: "Problem-solving",
    description:
      "I possess a strong ability to identify, analyze, and solve complex technical problems creatively and efficiently. My critical thinking and analytical skills enable me to break down large problems into smaller, manageable steps and find optimal solutions.",
  },
  {
    title: "Adaptability",
    description:
      "I am a lifelong learner who readily embraces and adjusts to new technologies, tools, and methodologies. I stay up-to-date with the latest trends, remaining open to new ideas and approaches to continuously improve my skills and adapt to evolving environments.",
  },
  {
    title: "Time Management",
    description:
      "I am proficient in managing my time effectively, consistently meeting deadlines and delivering projects on time and within budget. I prioritize tasks efficiently, remain organized, and effectively manage distractions to ensure smooth workflow and successful project completion.",
  },
];


const HeroParallaxDemo = () => {

  const testword = "this is it";
  return (
    <>
      <FloatingNav navItems={navItems} />
      <HeroParallax products={products} />

      {/* background page */}
      <div className="mb-16 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        {/* all the elements in here will be placed on the background */}
        <div className="flex flex-col justify-center items-center">
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            Let me be on your Team!
          </p>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* next section  */}
      <div className="flex flex-col justify-center items-center mt-6 p-2 h-full">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Education
        </p>

      <div className="h-[40rem] w-full flex flex-col items-center justify-center gap-6 md:flex-row">
          {/* pin container */}
        <PinContainer
          title="www.alueducation.com"
          href="https://alueducation.com"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              African Leadership University
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Currently Pursuing a Bachelors degree in Software Engineering
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 items-center justify-center mb-4">
              <Image src={alu} alt="school logo" object-fint="conteaion" />
            </div>
          </div>
        </PinContainer>

        <PinContainer
          title="www.alx-africa.com"
          href="https://www.alxafrica.com/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              ALX-Africa
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Graduate of the 12 months software Enginering program and specialized in FrontEnd Development
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 items-center justify-center mb-4">
              <Image src={alx} alt="school logo" object-fint="conteaion" />
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="p-10 w-full h-full">
        <div className="flex justify-center items-center m-2">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Soft Skills
        </p>
        </div>
        <StickyScroll content={content} />
      </div>
      </div>
    </>
  );
};

export default HeroParallaxDemo;
