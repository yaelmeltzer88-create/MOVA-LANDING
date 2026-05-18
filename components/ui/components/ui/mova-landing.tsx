"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play, Zap, TrendingUp, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { ElegantShape } from "./mova-elegant-shapes";

interface MOVALandingProps {
  brand?: string;
  tagline?: string;
  primaryColor?: string;
  accentColor?: string;
  price?: number;
  currency?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

export function MOVALanding({
  brand = "MOVA",
  tagline = "Your Muscles Are Talking",
  primaryColor = "cyan",
  accentColor = "blue",
  price = 249,
  currency = "$",
  primaryCTA = "Pre-order",
  secondaryCTA = "Learn More",
}: MOVALandingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeStats, setActiveStats] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const stats = [
    { label: "Muscle Activation", value: "99.8%" },
    { label: "Fatigue Detection", value: "Real-time" },
    { label: "AI Accuracy", value: "98.2%" },
  ];

  const features = [
    {
      icon: Zap,
      title: "EMG Muscle Tracking",
      desc: "Capture electrical signals with 99.8% accuracy.",
      metrics: "8 Independent Channels",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Analysis",
      desc: "Machine learning algorithms analyze movements in real-time.",
      metrics: "10+ Data Points/Second",
    },
    {
      icon: Heart,
      title: "Recovery Intelligence",
      desc: "Monitor fatigue levels and prevent overtraining.",
      metrics: "48-Hour Predictions",
    },
  ];

  const aiCoachFeatures = [
    { title: "Real-Time Form Feedback", desc: "Get instant corrections." },
    { title: "Personalized Coaching", desc: "AI learns and adapts." },
    { title: "Recovery Optimization", desc: "Predictive rest periods." },
    { title: "Performance Progression", desc: "Track improvements." },
  ];

  const testimonials = [
    {
      quote: "MOVA completely changed my training approach.",
      author: "Alex Chen",
      role: "Professional Bodybuilder",
    },
    {
      quote: "The AI coach predicted fatigue before I felt it.",
      author: "Sarah Johnson",
      role: "Strength Coach",
    },
    {
      quote: "Performance improved by 23% in 3 months.",
      author: "Marcus Rivera",
      role: "Competitive Athlete",
    },
  ];

  const features_list = [
    "8-Channel EMG Sensor Band",
    "Lifetime AI Coach Access",
    "Real-Time Form Analysis",
    "Mobile App with Analytics",
    "Recovery Predictions",
    "Cloud Data Sync",
    "24/7 Support",
    "Firmware Updates Forever",
  ];

  return (
    <div ref={containerRef} className="w-full bg-black text-white overflow-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-cyan-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold tracking-widest"
          >
            {brand}
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            {["Technology", "Performance", "Ecosystem"].map((item, i) => (
              <motion.a key={item} href="#" custom={i} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-sm hover:text-cyan-400 transition">
                {item}
              </motion.a>
            ))}
            <motion.button custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="px-6 py-2 border border-cyan-400 rounded text-cyan-400 hover:bg-cyan-400/10 transition">
              {primaryCTA}
            </motion.button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <ElegantShape delay={0.1} width={400} height={100} rotate={15} gradient="from-cyan-500/[0.15]" className="left-[5%] top-[20%] hidden lg:block" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mb-12">
            <div className="relative w-64 h-24 mx-auto mb-8" style={{ transform: `perspective(1000px) rotateX(${scrollY * 0.05}deg)` }}>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 blur-sm"></div>
                <div className="absolute inset-1 rounded-full border border-cyan-300/60"></div>
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                {[...Array(12)].map((_, i) => (
                  <motion.div key={i} className="absolute w-1 h-1 bg-cyan-300 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "linear" }} style={{ left: `${50 + 40 * Math.cos((i / 12) * Math.PI * 2)}%`, top: `${50 + 40 * Math.sin((i / 12) * Math.PI * 2)}%`, opacity: 0.6 + (i % 2) * 0.3 }}></motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.h1 custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{tagline}</span>
          </motion.h1>

          <motion.p custom={1} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            MOVA transforms muscle signals into real-time performance intelligence.
          </motion.p>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("p-4 rounded border transition-all duration-500", activeStats === i ? "border-cyan-400/60 bg-cyan-400/10 scale-105" : "border-cyan-400/30 bg-cyan-400/5")}>
                <div className="text-xs text-cyan-300 mb-2">{stat.label}</div>
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105">
              {primaryCTA}
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400/10 transition flex items-center gap-2">
              <Play size={18} /> {secondaryCTA}
            </button>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-cyan-400 text-xs mb-2 text-center">Scroll to explore</div>
          <div className="border border-cyan-400/40 rounded-full p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Advanced Biometric Intelligence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our proprietary EMG sensors with AI provide insight into muscle performance</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="p-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 backdrop-blur-sm hover:border-cyan-400/50 transition group cursor-pointer">
                <div className="mb-4 inline-block p-3 rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/20 transition">
                  <Icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <div className="text-sm text-cyan-400 font-semibold">{item.metrics}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-5xl font-bold mb-16 text-center">
          Your Intelligent Training Companion
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-6 h-96 flex flex-col justify-between overflow-hidden backdrop-blur-sm">
            <div className="space-y-4 flex-1 overflow-y-auto">
              {[{ role: "user", text: "Started bicep curls" }, { role: "ai", text: "Optimal form detected. Muscle activation at 96%." }].map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs p-3 rounded-lg text-sm ${msg.role === "user" ? "bg-cyan-400/20 text-cyan-100 border border-cyan-400/30" : "bg-slate-800 text-gray-100 border border-cyan-400/20"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            {aiCoachFeatures.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-5xl font-bold mb-16 text-center">
          Elite Athletes Trust MOVA
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="p-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 backdrop-blur-sm">
              <div className="mb-4 text-cyan-400 text-xl">"</div>
              <p className="text-gray-100 mb-6">{testimonial.quote}</p>
              <div className="border-t border-cyan-400/20 pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-5xl font-bold mb-4">Premium Technology, Accessible Price</h2>
          <p className="text-gray-400 mb-16 text-lg">One purchase. Lifetime of smarter training.</p>

          <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border-2 border-cyan-400/30 rounded-2xl p-12 backdrop-blur-xl">
            <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {currency}
              {price}
            </div>
            <p className="text-gray-400 mb-8">One-time investment in your performance</p>

            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {features_list.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105">
              {primaryCTA}
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">The Future of Training is Here</h2>
          <p className="text-xl text-gray-400 mb-12">Join elite athletes already using MOVA.</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105 flex items-center gap-2">
              {primaryCTA} <ChevronRight size={20} />
            </button>
            <button className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition">
              {secondaryCTA}
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-cyan-400/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">{brand}</h4>
              <p className="text-sm text-gray-500">The future of performance training.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-cyan-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-400/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 {brand}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
