"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tabs = [
  {
    label: "Wallet",
    content: {
      title: "Wallet Overview",
      rows: [
        { label: "Available Balance", value: "$12,450.00" },
        { label: "Pending Commissions", value: "$3,200.00" },
        { label: "Last Payout", value: "$8,750.00" },
      ],
    },
  },
  {
    label: "Activations",
    content: {
      title: "Today's Activations",
      rows: [
        { label: "Total Activations", value: "147" },
        { label: "T-Mobile", value: "62" },
        { label: "AT&T", value: "45" },
      ],
    },
  },
  {
    label: "Dealers",
    content: {
      title: "Dealer Network",
      rows: [
        { label: "Active Dealers", value: "342" },
        { label: "Pending Approvals", value: "18" },
        { label: "Top Performer", value: "DLR-2847" },
      ],
    },
  },
  {
    label: "Commissions",
    content: {
      title: "Commission Tracker",
      rows: [
        { label: "This Month", value: "$24,800" },
        { label: "Last Month", value: "$21,350" },
        { label: "Growth", value: "+16.2%" },
      ],
    },
  },
  {
    label: "Reports",
    content: {
      title: "Monthly Report",
      rows: [
        { label: "Total Revenue", value: "$482,000" },
        { label: "Avg. per Dealer", value: "$1,409" },
        { label: "Churn Rate", value: "2.1%" },
      ],
    },
  },
];

const PlatformSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="platform" className="py-24 section-padding bg-surface-subtle">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Platform Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            A Dashboard Built for Telecom
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background border border-border rounded-xl overflow-hidden shadow-sm"
        >
          <div className="flex border-b border-border overflow-x-auto">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  active === i
                    ? "text-foreground border-b-2 border-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {tabs[active].content.title}
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {tabs[active].content.rows.map((r) => (
                <div
                  key={r.label}
                  className="bg-muted rounded-lg p-5 border border-border hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {r.label}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {r.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
