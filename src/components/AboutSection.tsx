"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="py-24 section-padding bg-surface-subtle">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            About Maven Telecom
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            The Complete Telecom Distribution Platform
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We provide prepaid wireless solutions designed to accelerate dealer
            growth. Our multi-carrier platform gives you access to the tools,
            inventory, and commission structures you need to scale — all from a
            single dashboard.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Multi-Carrier Access",
              desc: "Activate on all major carriers from one unified platform, reducing complexity and boosting sales.",
            },
            {
              title: "Dealer Growth Engine",
              desc: "Tools built to help you recruit, manage, and scale your dealer network with transparent commissions.",
            },
            {
              title: "Enterprise Ready",
              desc: "Reliable infrastructure handling thousands of daily activations with 99.9% uptime SLA.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
