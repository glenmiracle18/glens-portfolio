"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

// mode toggle imports
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // @ts-ignore
    let direction = current - scrollYProgress.getPrevious();

    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(true);
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}
        <button className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
          <span>Contact</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
        </button>
        <div className="mr-2">
          <ModeToggle />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
