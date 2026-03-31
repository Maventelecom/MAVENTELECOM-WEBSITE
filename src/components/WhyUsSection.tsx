"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const reasons = [
  "Fast activations across all major carriers",
  "Multi-carrier access from a single platform",
  "Transparent and competitive pricing",
  "Easy-to-use platform for dealers of all sizes",
  "Scalable system built for growth",
  "Dedicated dealer support team",
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 section-padding section-dark">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for Scale. Designed for Dealers.
          </h2>
          <p className="mt-4 text-surface-dark-foreground/70 leading-relaxed">
            Maven Telecom is trusted by thousands of dealers nationwide. Our
            platform is purpose-built for the telecom distribution industry.
          </p>
        </motion.div>

        <div className="space-y-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <Check size={14} className="text-accent-foreground" />
              </div>
              <span className="text-surface-dark-foreground/90 font-medium">
                {r}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
