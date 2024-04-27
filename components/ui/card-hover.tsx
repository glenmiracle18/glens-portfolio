import { cn } from "@/utils/cn";
import { IconBadge } from "@/app/wrappers/icon-badge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import { Progress } from "@/components/ui/progress";
import { ThemeProvider } from "next-themes";

interface HoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
    icon: IconType;
    progress: number;
  }[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ThemeProvider>
      <div
        className={cn(
          "grid grid-cols-2 py-10  md:grid-cols-4  lg:grid-cols-4 overflow-hidden",
          className,
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item?.link}
            key={item?.link}
            className="group relative  block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle className="flex flex-row items-center">
                <IconBadge Icon={item.icon} />
                {item.title}
              </CardTitle>
              {/* <CardDescription>{item.description}</CardDescription> */}
              <div className="flex justify-between items-center mt-4">
                <Progress value={item.progress} className="w-[60%]" />
                <h1 className="text-xl font-bold dark:text-white text-gray-500">
                  {item.progress}%
                </h1>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </ThemeProvider>
  );
};

// main card
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent dark:bg-black p-2 group-hover:border-slate-700 dark:border-white/[0.2] md:[h-full/2] md:[w-full/2] bg-white border-dark/[0.2]",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// card title
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 font-bold tracking-wide  dark:text-white text-gray-900",
        className,
      )}
    >
      {children}
    </h4>
  );
};

// card description
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide dark:text-white text-gray-900",
        className,
      )}
    >
      {children}
    </p>
  );
};
