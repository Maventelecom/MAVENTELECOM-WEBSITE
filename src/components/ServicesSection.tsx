"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor, Layers, Wallet, Users,
  BarChart3, Search, Code, ShoppingBag,
} from "lucide-react";

const services = [
  { icon: Monitor, title: "POS System", desc: "Streamlined point-of-sale for activations, top-ups, and SIM management." },
  { icon: Layers, title: "Multi-Carrier Portal", desc: "Access T-Mobile, AT&T, Verizon, and more from one dealer dashboard." },
  { icon: Wallet, title: "Wallet & Commissions", desc: "Real-time commission tracking, payouts, and wallet management." },
  { icon: Users, title: "Subdealer Management", desc: "Recruit, onboard, and manage subdealers with hierarchical controls." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Comprehensive reports on activations, revenue, and dealer performance." },
  { icon: Search, title: "Number & IMEI Lookup", desc: "Instant number portability checks and IMEI verification tools." },
  { icon: Code, title: "API Integrations", desc: "RESTful APIs for seamless integration with your existing systems." },
  { icon: ShoppingBag, title: "B2B Marketplace", desc: "Source devices, SIM kits, and accessories at competitive wholesale pricing." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="services" className="py-24 section-padding">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Everything You Need to Run Your Telecom Business
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group border border-border rounded-lg p-6 hover:bg-muted hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon
                size={28}
                className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
