"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Brain, FlaskConical } from "lucide-react";

const timeline = [
  {
    year: "2021 - Present",
    title: "Software Engineering Student",
    institution: "University of Annaba",
    description: "Specializing in AI, Data Science, and Full Stack Development",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "AI Research Focus",
    institution: "Machine Learning & Deep Learning",
    description: "Exploring neural networks, CNN, RNN, and Explainable AI",
    icon: Brain,
  },
  {
    year: "2024",
    title: "Full Stack Development",
    institution: "Web & Mobile Applications",
    description: "Building scalable applications with modern frameworks",
    icon: Code2,
  },
  {
    year: "2025 - 2026",
    title: "Research Publications",
    institution: "IEEE Conferences",
    description: "Contributing to scientific research in AI and data analysis",
    icon: FlaskConical,
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            About
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground">
            The Engineer
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Motivated software engineering student focused on building
              intelligent, scalable and research-driven digital solutions.
              Passionate about artificial intelligence, software architecture,
              modern web technologies and data analysis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experienced in academic research, machine learning systems and
              full stack application development combining innovation,
              performance and real-world impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Location", value: "Algeria" },
                { label: "Education", value: "Software Engineering" },
                { label: "Focus", value: "AI & Full Stack" },
                { label: "Languages", value: "Arabic, French, English" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-card border border-border rounded-xl"
                >
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-foreground font-medium">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xs text-accent font-medium mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-2">
                    {item.institution}
                  </div>
                  <p className="text-sm text-muted-foreground/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
