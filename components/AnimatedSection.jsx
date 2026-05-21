"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export default function AnimatedSection({ children, className, id, delay = 0 }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        className={className}
        id={id}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
