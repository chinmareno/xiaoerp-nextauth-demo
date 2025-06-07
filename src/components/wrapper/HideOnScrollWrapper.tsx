"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

type Props = {
  children: React.ReactNode;
};
export const HideOnScrollWrapper = ({ children }: Props) => {
  const { scrollY } = useScroll();
  const [ScrollingDown, setScrollingDown] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    if (prev === undefined) return;
    setScrollingDown(current > prev);
  });
  return (
    <div
      className={`fixed w-full transition-transform duration-300 ${
        ScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </div>
  );
};
