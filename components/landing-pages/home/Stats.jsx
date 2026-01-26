"use client";

import { Rocket, CheckSquare, Hammer, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    {
      icon: Rocket,
      value: "20+",
      label: "Years of Experience",
    },
    {
      icon: CheckSquare,
      value: "50,000+",
      label: "Site Activities",
    },
    {
      icon: Hammer,
      value: "500+",
      label: "Projects",
    },
    {
      icon: Users,
      value: "700+",
      label: "Colleagues",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // animate once
    threshold: 0.2, // trigger when 20% visible
  });

  return (
    <section ref={ref} className="py-16 bg-light-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-xl shadow-professional bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{
                  scale: 1.2,
                }}
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <stat.icon className="w-12 h-12 text-primary drop-shadow-lg" />
                </div>
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
