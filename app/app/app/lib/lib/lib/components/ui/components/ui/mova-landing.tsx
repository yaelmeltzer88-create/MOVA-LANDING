"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play, Zap, TrendingUp, Heart, Activity } from "lucide-react";
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
      desc: "Capture electrical signals from your muscles with 99.8% accuracy.",
      metrics: "8 Independent Channels",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Analysis",
      desc: "Machine learning algorithms analyze your movement patterns in real-time.",
      metrics: "10+ Data Points/Second",
    },
    {
      icon: Heart,
      title: "Recovery Intelligence",
      desc: "Monitor fatigue levels and prevent overtraining before injury.",
      metrics: "48-Hour Predictions",
    },
  ];

  const aiCoachFeatures = [
    {
      title: "Real-Time Form Feedback",
      desc: "Get instant corrections during your workout.",
    },
    {
      title: "Personalized Coaching",
      desc: "AI learns your movement patterns and adapts recommendations.",
    },
    {
      title: "Recovery Optimization",
      desc: "Predictive analytics suggest optimal rest periods.",
    },
    {
      title: "Performance Progression",
      desc: "Track improvements and celebrate gains.",
    },
  ];

  const testimonials = [
    {
      quote:
        "MOVA completely changed how I approach training. Real-time feedback is invaluable.",
      author: "Alex Chen",
      role: "Professional Bodybuilder",
    },
    {
      quote:
        "The AI coach predicted my fatigue levels before I felt it. Prevented injury.",
      author: "Sarah Johnson",
      role: "Strength Coach",
    },
    {
      quote:
        "Data-driven training at its finest. Performance improved by 23% in 3 months.",
      author: "Marcus Rivera",
      role: "Competitive Athlete",
    },
  ];

  const specs = [
    { label: "EMG Channels", value: "8 Independent" },
    { label: "Sensors", value: "EMG + Accelerometer" },
    { label: "Sampling Rate", value: "1000 Hz" },
    { label: "Battery Life", value: "12 Hours" },
    { label: "Weight", value: "45g" },
    { label: "Water Resistance", value: "IP68 (5m/30min)" },
    { label: "Connectivity", value: "Bluetooth 5.2" },
    { label: "Material", value: "Matte Black + Carbon Fiber" },
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
      {/* NAVIGATION */}
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
              <motion.a
                key={item}
                href="#"
                custom={i}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-sm hover:text-cyan-400 transition"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="px-6 py-2 border border-cyan-400 rounded text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              {primaryCTA}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div
            className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <ElegantShape
          delay={0.1}
          width={400}
          height={100}
          rotate={15}
          gradient="from-cyan-500/[0.15]"
          className="left-[5%] top-[20%] hidden lg:block"
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Animated 3D-like product representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 perspective"
          >
            <div
              className="relative w-64 h-24 mx-auto mb-8"
              style={{
