"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 section-padding overflow-hidden">
    <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground text-balance">
          Powering the Future of Telecom Distribution
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
          Maven Telecom builds a complete ecosystem for dealers, master agents,
          and wireless retailers.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Become a Dealer <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-muted transition-colors"
          >
            Request a Demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold px-4 py-3.5 hover:underline underline-offset-4"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:block"
      >
        <div className="bg-muted rounded-xl border border-border p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-foreground/10" />
            <div className="w-3 h-3 rounded-full bg-foreground/10" />
            <div className="w-3 h-3 rounded-full bg-foreground/10" />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Active Dealers", value: "2,847" },
              { label: "Activations Today", value: "1,203" },
              { label: "Revenue (MTD)", value: "$482K" },
            ].map((s) => (
              <div key={s.label} className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-xl font-bold text-foreground mt-1">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[85, 62, 94, 45].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-20 text-xs text-muted-foreground">
                  {["T-Mobile", "AT&T", "Verizon", "Dish"][i]}
                </div>
                <div className="flex-1 bg-border rounded-full h-2">
                  <div
                    className="bg-accent rounded-full h-2"
                    style={{ width: `${w}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-foreground w-8">{w}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
