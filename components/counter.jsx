"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2 }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: end, transition: { duration } });
    }
  }, [inView, controls, end, duration]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ count: 0 }}
      onUpdate={(latest) => setCount(Math.round(latest.count))}
      className="text-4xl font-bold text-center"
    >
      {count}+
    </motion.div>
  );
};

export default Counter;