"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Send, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses = (field: string) =>
    `w-full bg-surface-dark-foreground/[0.03] border rounded-lg px-4 py-3.5 text-sm text-surface-dark-foreground placeholder:text-surface-dark-foreground/25 focus:outline-none transition-all duration-300 ${
      focused === field
        ? "border-accent ring-1 ring-accent/30 bg-surface-dark-foreground/[0.06]"
        : "border-surface-dark-foreground/10 hover:border-surface-dark-foreground/20"
    }`;

  return (
    <section id="contact" className="py-28 section-padding section-dark">
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's Grow Together
          </h2>
          <p className="mt-4 text-surface-dark-foreground/60 leading-relaxed">
            Ready to scale your telecom business? Get in touch and our team will
            help you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form — 3 columns */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/50 mb-2.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={inputClasses("name")}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/50 mb-2.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={inputClasses("email")}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/50 mb-2.5">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
                className={inputClasses("phone")}
                placeholder="+1 (800) 000-0000"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/50 mb-2.5">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={5}
                className={`${inputClasses("message")} resize-none`}
                placeholder="Tell us about your business and how we can help..."
              />
            </div>

            <button
              type="submit"
              className="group w-full bg-accent text-accent-foreground py-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </motion.form>

          {/* Contact Info — 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
              <p className="text-sm text-surface-dark-foreground/50 mb-8 leading-relaxed">
                Our team is here to help you grow. Reach out through any of
                the channels below.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:info@maventelecom.com"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-surface-dark-foreground/10 hover:border-accent/30 hover:bg-surface-dark-foreground/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-surface-dark-foreground/40 font-medium uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm text-surface-dark-foreground font-medium">
                      info@maventelecom.com
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-surface-dark-foreground/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </a>

                {/* <a
                  href="tel:+18001234567"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-surface-dark-foreground/10 hover:border-accent/30 hover:bg-surface-dark-foreground/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-surface-dark-foreground/40 font-medium uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm text-surface-dark-foreground font-medium">
                      +1 (800) 123-4567
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-surface-dark-foreground/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </a> */}
              </div>
            </div>

            {/* <a
              href="https://wa.me/18001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 group inline-flex items-center justify-center gap-3 border border-surface-dark-foreground/10 rounded-lg px-6 py-4 text-sm font-semibold text-surface-dark-foreground hover:border-accent/30 hover:bg-surface-dark-foreground/[0.03] transition-all duration-300"
            >
              <MessageCircle size={18} className="text-accent" />
              Chat on WhatsApp
              <ArrowRight
                size={14}
                className="text-surface-dark-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300"
              />
            </a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
