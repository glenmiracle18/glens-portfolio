"use client";
// import { WavyBackground } from "@/components/ui/wavy-background";
import { EvervaultCard, Icon } from "@/components/ui/evervalut-card";
import { PinContainer } from "@/components/ui/3d-pin";
import { TextGenerateEffect } from "@/components/ui/text-reveal";
import { LampContainer } from "@/components/ui/lamp-effect";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover";

// import Image from "next/image";
// import { TracingBeam } from "@/components/ui/tracing-bin";
// dummy content
// const dummyContent = [
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Sit duis est minim proident non nisi velit non consectetur. Esse
//           adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
//           Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
//           incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
//           fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
//           nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
//           occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
//           officia sint labore. Tempor consectetur excepteur ut fugiat veniam
//           commodo et labore dolore commodo pariatur.
//         </p>
//         <p>
//           Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
//           veniam in commodo id reprehenderit adipisicing. Proident duis
//           exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
//         </p>
//         <p>
//           Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
//           reprehenderit deserunt amet laborum consequat adipisicing officia qui
//           irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
//           Amet culpa officia aliquip deserunt veniam deserunt officia
//           adipisicing aliquip proident officia sunt.
//         </p>
//       </>
//     ),
//     badge: "React",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//         <p>
//           In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
//           veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
//           reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
//           cillum ut mollit.
//         </p>
//       </>
//     ),
//     badge: "Changelog",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const AboutPage = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>

      <div className="mx-auto max-w-5xl px-8">
        <HoverEffect items={projects} />
      </div>

      {/* <WavyBackground className="mx-auto max-w-4xl pb-40">
        <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Kachi Made this
        </p>
        <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
          Leverage the power of canvas to create a beautiful hero section
        </p>
      </WavyBackground> */}

      <TextGenerateEffect words={words} className="w-full p-6" />

      <div className="flex gap-2">
        <div className="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
          <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

          <EvervaultCard text="hover" />

          <h2 className="mt-4 text-sm font-light text-black dark:text-white">
            Hover over this card to reveal an awesome effect. Running out of
            copy here.
          </h2>
          <p className="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">
            Watch me hover
          </p>
        </div>

        {/* pin container */}
        <div className="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
          <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
          <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

          <EvervaultCard text="hover" />

          <h2 className="mt-4 text-sm font-light text-black dark:text-white">
            Hover over this card to reveal an awesome effect. Running out of
            copy here.
          </h2>
          <p className="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">
            Watch me hover
          </p>
        </div>
      </div>

      <div className="flex h-[40rem] w-full items-center justify-center ">
        <PinContainer title="/glenmiracle.com" href="https://google.com">
          <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">
              Glen UI
            </h3>
            <div className="!m-0 !p-0 text-base font-normal">
              <span className="text-slate-500 ">
                Welcome to your world of possibilities.
              </span>
            </div>
            <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>

      {/* <TracingBeam className="">
        <div className="relative mx-auto max-w-2xl pt-4 antialiased">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white">
                {item.badge}
              </h2>

              <p className="mb-4 text-xl">{item.title}</p>

              <div className="prose  prose-sm dark:prose-invert text-sm">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="mb-10 rounded-lg object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam> */}
    </>
  );
};

export default AboutPage;
