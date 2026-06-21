import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Petal = ({ delay, duration, xStart, xEnd }: any) => {
  return (
    <motion.div
      initial={{ y: "-10vh", x: `${xStart}vw`, opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        x: `${xEnd}vw`,
        opacity: [0, 1, 1, 0],
        rotate: 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="fixed z-0 pointer-events-none w-6 h-6 rounded-full opacity-50 blur-[1px]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-lavender-pink), var(--color-soft-lilac))",
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
      }}
    />
  );
};

export const FloatingElements = () => {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch if SSR is used
    const generatedPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 15,
      xStart: Math.random() * 100,
      xEnd: Math.random() * 100,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
};
