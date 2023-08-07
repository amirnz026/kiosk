"use client";
import Kiosk from "@/components/svgs/Kiosk";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Header() {
  const ref = useRef(null);

  const mobileScroll = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    mobileScroll.scrollYProgress,
    [0.5, 0.53],
    ["#262626", "#ffffff"]
  );
  useMotionValueEvent(mobileScroll.scrollYProgress, "change", (value) => {
    console.log(value);
  });

  return (
    <>
      <div className="h-[300vh] flex items-center justify-center " ref={ref}>
        <Kiosk backgroundColor={backgroundColor} />
      </div>
    </>
  );
}
