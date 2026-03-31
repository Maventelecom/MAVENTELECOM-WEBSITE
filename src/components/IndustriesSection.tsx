"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radio, Building2, Smartphone, Store, Truck, MapPin } from "lucide-react";

const industries = [
  { icon: Radio, label: "Wireless Dealers" },
  { icon: Building2, label: "Master Agents" },
  { icon: Smartphone, label: "MVNOs" },
  { icon: Store, label: "Retail Stores" },
  { icon: Truck, label: "Telecom Distributors" },
  { icon: MapPin, label: "Multi-Location Businesses" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="py-24 section-padding">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Who We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Trusted Across the Telecom Industry
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 border border-border rounded-lg p-6 hover:bg-muted hover:-translate-y-0.5 transition-all duration-300"
            >
              <ind.icon size={24} className="text-accent flex-shrink-0" />
              <span className="font-semibold text-foreground">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
