import React from "react";
import { motion, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";
type Slide = { direction?: Direction; amount?: number };

type MotionEffectProps = {
  children: React.ReactNode;
  slide?: Slide;
  fade?: boolean;
  zoom?: boolean;
  delay?: number;
  duration?: number;
  inView?: boolean; // anima al entrar al viewport
  once?: boolean;   // solo una vez
  className?: string;
  style?: React.CSSProperties;
};

export const MotionEffect: React.FC<MotionEffectProps> = ({
  children,
  slide = { direction: "down", amount: 24 },
  fade = true,
  zoom = true,
  delay = 0,
  duration = 0.45,
  inView = true,
  once = false,
  className,
  style,
}) => {
  const amount = slide.amount ?? 24;
  const dir = slide.direction ?? "down";

  const from: { x?: number; y?: number; opacity?: number; scale?: number } = {};
  if (dir === "up") from.y = amount;
  if (dir === "down") from.y = -amount;
  if (dir === "left") from.x = amount;
  if (dir === "right") from.x = -amount;
  if (fade) from.opacity = 0;
  if (zoom) from.scale = 0.96;

  const to = { x: 0, y: 0, opacity: 1, scale: 1 };

  const variants: Variants = { hidden: from, show: to };
  const transition = { duration, delay, ease: "easeOut" as const };

  if (inView) {
    return (
      <motion.div
        className={className}
        style={style}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.45 }}
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      animate="show"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
export default MotionEffect;