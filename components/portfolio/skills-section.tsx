"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Java", "PHP"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Supabase", "PostgreSQL"],
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    title: "AI & Data Science",
    skills: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Deep Learning",
      "CNN/RNN",
      "SHAP",
    ],
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Figma", "VS Code"],
    color: "from-violet-500/20 to-violet-500/5",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, artificial
            intelligence, and modern DevOps practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.color} border border-border/50 hover:border-accent/30 transition-all duration-500`}
            >
              <div className="absolute inset-0 rounded-2xl bg-card/50 backdrop-blur-sm" />

              <div className="relative">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                      }}
                      className="px-3 py-1.5 text-sm bg-background/50 border border-border/50 rounded-lg text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-foreground">
              Technology Proficiency
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", level: 95 },
              { name: "Python", level: 90 },
              { name: "TypeScript", level: 88 },
              { name: "TensorFlow", level: 85 },
              { name: "Node.js", level: 88 },
              { name: "SQL", level: 85 },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-border"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray={`${tech.level * 1.76} 176`}
                      className="text-accent"
                      initial={{ strokeDasharray: "0 176" }}
                      animate={
                        isInView
                          ? { strokeDasharray: `${tech.level * 1.76} 176` }
                          : {}
                      }
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-foreground">
                    {tech.level}%
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
