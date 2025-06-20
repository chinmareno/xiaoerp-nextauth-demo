"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

type Props = {
  children: React.ReactNode;
};
export const HideOnScrollWrapper = ({ children }: Props) => {
  const { scrollY } = useScroll();
  const [scrollDownTwice, setScrollDownTwice] = useState(false);
  let scrollDownDistance = 0;
  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    if (prev === undefined) return;
    if (current > prev) {
      scrollDownDistance++;
    } else {
      scrollDownDistance = 0;
      setScrollDownTwice(false);
    }
    if (scrollDownDistance >= 60) setScrollDownTwice(true);
    else if (Math.abs(current - prev) >= 40) setScrollDownTwice(true);
  });
  return (
    <div
      className={`w-full transition-transform duration-300 ${
        scrollDownTwice ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </div>
  );
};
