"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Decorative Line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-8" />

          <p className="text-sm text-muted-foreground text-center">
            Designed & Engineered by{" "}
            <span className="text-foreground font-medium">Nourhene Kadri</span>
          </p>

          <p className="mt-2 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
