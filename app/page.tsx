"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/parralax";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-reveal";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import {
  IconHome,
  IconMessage,
  IconPhotoPin,
  IconUser,
} from "@tabler/icons-react";
// projects
import know_africa from "../public/assets/Know-Africa.jpeg";
import eduford from "../public/assets/eduford2.png";
import crypto from "../public/assets/crypto.png";
import wrizzle from "../public/assets/wrizzle1.png";
import alu from "../public/assets/alu-logo.png";
import alx from "../public/assets/alx.png";

import { Button } from "@/components/ui/moving-border";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

// wrappers
import { IconContainer } from "./wrappers/IconContainer";

// icons for the languages section
import {
  FaAws,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

import { Radar } from "@/components/ui/radar";
import { IoGitBranch } from "react-icons/io5";
import {
  SiNextdotjs,
  SiPostman,
  SiSvelte,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { CiGrid42 } from "react-icons/ci";
import { FaServer } from "react-icons/fa";
import { HoverEffect } from "@/components/ui/card-hover";
import { TimelineComponent } from "@/components/ui/timeline";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";

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
    icon: <IconPhotoPin className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Eduford",
    link: "https://glenmiracle18.github.io/university-website.github.io/",
    thumbnail: eduford,
  },
  {
    title: "Know-Africa",
    link: "https://know-africa.vercel.app",
    thumbnail: know_africa,
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
    thumbnail: crypto,
  },
  {
    title: "WrizzleShop",
    link: "https://wrizzleshop.com",
    thumbnail: wrizzle,
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

const languages = [
  {
    title: "JavaScript",
    description:
      "A versatile scripting language commonly used for web development and beyond. It adds interactivity to web pages and enables complex functionality.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: FaJs,
    progress: 97,
  },
  {
    title: "TypeScript",
    description:
      "A superset of JavaScript that adds optional static typing, improving code maintainability and catching errors early in development.",
    link: "https://www.typescriptlang.org/docs/",
    icon: SiTypescript,
    progress: 79,
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework that provides a low-level, class-based approach to styling web applications. It offers rapid development with pre-built classes and customization options.",
    link: "https://tailwindcss.com/docs/",
    icon: SiTailwindcss,
    progress: 88,
  },
  {
    title: "Python",
    description:
      "A general-purpose, interpreted programming language known for its readability, simplicity, and extensive libraries. It's widely used in web development, data science, scripting, machine learning, and various other domains.",
    link: "https://docs.python.org/3/",
    icon: FaPython,
    progress: 81,
  },
  {
    title: "React",
    description:
      "A JavaScript library for building user interfaces. It's known for its component-based architecture, virtual DOM, and unidirectional data flow, making it efficient and scalable for complex web applications.",
    link: "https://reactjs.org/docs/getting-started.html",
    icon: FaReact,
    progress: 90,
  },
  {
    title: "Svelte",
    description:
      "A component-based web framework that compiles code at build time, resulting in smaller bundle sizes and improved performance. It offers a reactive approach to data handling and a familiar JavaScript syntax.",
    link: "https://svelte.dev/docs",
    icon: SiSvelte,
    progress: 70,
  },
  {
    title: "C#",
    description:
      "C# is a Microsoft-developed, object-oriented language used for web services, desktop apps, and games, prized for its strong typing, garbage collection, and .NET framework integration.",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    icon: TbBrandCSharp,
    progress: 45,
  },
  {
    title: "Java",
    description:
      "Java is a versatile, object-oriented programming language with platform independence and a rich library of frameworks. Its ability to run on various operating systems without modification makes it ideal for enterprise and web development.",
    link: "https://docs.oracle.com/en/java/javase/latest/docs/index.html",
    icon: FaJava,
    progress: 60,
  },
  {
    title: "HTML & CSS",
    description:
      "The fundamental building blocks of web pages. HTML defines the structure and content of a web page, while CSS controls the visual presentation. Together, they provide a standardized way to create and style web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: FaHtml5,
    progress: 97,
  },
];

const MainPage = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <HeroParallax products={products} />

      {/* background page */}
      <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-blue dark:bg-blue relative  mb-16 flex h-[50rem] w-full items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        {/* all the elements in here will be placed on the background */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-7xl">
            Let me be on your Team!
          </p>
          <TextGenerateEffect
            className="mt-2 text-center font-meduim lg:px-20 text-nuetral-500 hidden lg:block"
            words="Dynamic and innovative web developer with a passion for crafting immersive digital experiences. Proficient in leveraging cutting-edge technologies such as JavaScript, TypeScript, Vue.js, and Nuxt.js to build responsive and user-friendly web applications. Adept at translating complex concepts into elegant and efficient code, with a strong focus on usability and scalability."
          />
          <div className="mt-8">
            <Button
              borderRadius="1.75rem"
              className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* work history */}
      <div className="lg:px-28 mt-8 ml-8 w-50 mb-8 px-2">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl text-center">
          Work History
        </p>
        <TimelineComponent />
      </div>

      {/* education  */}
      <div className="mt-6 flex h-full flex-col items-center justify-center p-2">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl mb-4">
          Education
        </p>

        <RecentProjects />

        <div className="h-full w-full p-10">
          <div className="m-2 flex items-center justify-center">
            <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
              Soft Skills
            </p>
          </div>
          <StickyScroll content={content} />
        </div>

        {/* radar */}
        <div className="mt-6 p-2">
          <p className="text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            Tech Stack and Cloud
          </p>

          <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  text="SSR"
                  delay={0.2}
                  icon={<FaServer className="h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  delay={0.4}
                  text="Docker"
                  icon={<FaDocker className=" h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  text="TensorFlow"
                  delay={0.3}
                  icon={<SiTensorflow className=" h-8 w-8 text-slate-600" />}
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  text="Postman API's"
                  delay={0.5}
                  icon={<SiPostman className=" h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  text="NextJs"
                  icon={<SiNextdotjs className=" h-8 w-8 text-slate-600" />}
                  delay={0.8}
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.6}
                  text="Git/Github"
                  icon={<IoGitBranch className=" h-8 w-8 text-slate-600" />}
                />
                <IconContainer
                  delay={0.7}
                  text="Cloud (AWS)"
                  icon={<FaAws className=" h-8 w-8 text-slate-600" />}
                />
              </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mt-12 flex flex-col items-center justify-center">
        <p className="text-center relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Proficient Languages
        </p>
        <div className="mx-auto max-w-5xl px-8">
          <HoverEffect items={languages} />
        </div>
      </div>
      <Approach />
    </>
  );
};

export default MainPage;
