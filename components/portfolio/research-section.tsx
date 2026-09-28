"use client";

import { motion, useInView } from "framer-motion";
import { Award, BookOpen, ExternalLink, FileText, Presentation } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const publications = [
  {
    title: "IEEE Conference Publication",
    conference:
      "International Conference on Speech, Multimodal, and Advanced Communication Systems",
    year: "2025",
    status: "Published",
    label: "IEEE",
    icon: Award,
    description:
      "Research on advanced AI systems for multimodal communication and intelligent interfaces.",
  },
  {
    title: "IEEE PAIS 2026",
    conference:
      "The 8th International Conference on Pattern Analysis and Intelligent Systems",
    year: "2026",
    status: "Accepted",
    label: "IEEE",
    icon: BookOpen,
    description:
      "Pattern analysis research combining machine learning with explainable AI methodologies.",
  },
  {
    title: "Quantum Computing & Artificial Intelligence",
    conference: "Conference Participation",
    year: "2026",
    status: "Conference Paper",
    label: "Conference",
    icon: Presentation,
    description:
      "Participation in a conference focused on quantum computing and artificial intelligence, highlighting research interests in emerging technologies, AI, and quantum computing.",
  },
];

interface Certificate {
  title: string;
  conference: string;
  paper: string;
  year: string;
  label: string;
  image: string;
  description: string;
  dateLocation?: string;
  imageClassName?: string;
}

const certificates: Certificate[] = [
  {
    title: "PAIS 2026 Certificate of Participation",
    conference:
      "The 8th International Conference on Pattern Analysis and Intelligent Systems (PAIS'2026)",
    paper:
      "Explainable Artificial Intelligence for Advanced Medical Data Prediction: Methods and Applications",
    year: "2026",
    label: "Certificate of Participation",
    image: "/certificates/pais-2026-certificate.jpg",
    description:
      "Certificate of participation for presenting a research paper at PAIS'2026, focused on explainable artificial intelligence for advanced medical data prediction.",
  },
  {
    title: "IEEE-ICSMACS'26 Certificate of Participation",
    conference:
      "First International Conference on Speech, Multimodal, and Advanced Communication Systems (ICSMACS'26)",
    dateLocation: "Algiers, Algeria · June 29–30, 2026",
    paper:
      "LSAHR: Large-Scale Arabic Hotel Review Dataset for Personalized Recommendation",
    year: "2026",
    label: "Certificate of Participation",
    image: "/images/research/certificate-lasahr.jpg",
    imageClassName: "object-contain",
    description:
      "Certificate of participation for presenting the LSAHR research paper at IEEE-ICSMACS'26, focused on Arabic hotel review data and personalized recommendation.",
  },
];

const researchAreas = [
  {
    title: "Explainable AI",
    description:
      "Making AI decisions transparent and interpretable for critical applications.",
  },
  {
    title: "Deep Learning",
    description: "Neural networks for complex pattern recognition and prediction tasks.",
  },
  {
    title: "Medical AI",
    description: "AI-powered diagnostic tools with high accuracy and explainability.",
  },
  {
    title: "Data Analysis",
    description: "Statistical modeling and insights extraction from complex datasets.",
  },
];

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="research" className="relative py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Research
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-foreground">
            Publications & Research
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI and intelligent systems through
            academic research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <pub.icon className="w-6 h-6 text-accent" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {pub.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {pub.year}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        pub.status === "Published"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : pub.status === "Conference Paper"
                            ? "bg-cyan-500/10 text-cyan-400"
                            : "bg-amber-500/10 text-amber-500"
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {pub.conference}
                  </p>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-display font-semibold text-foreground text-center mb-12">
            Certificates & Conference Participation
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-accent/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] bg-secondary/60 border-b border-border overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className={`h-full w-full ${certificate.imageClassName ?? "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden absolute inset-0 p-8 flex flex-col justify-center bg-gradient-to-br from-accent/10 to-secondary">
                    <Award className="w-10 h-10 text-accent mb-4" />
                    <p className="text-sm font-medium text-foreground">
                      Certificate image preview
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Add the uploaded image at public/certificates/pais-2026-certificate.jpg
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {certificate.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {certificate.year}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {certificate.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {certificate.conference}
                  </p>
                  {certificate.dateLocation && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {certificate.dateLocation}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                    {certificate.paper}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                    {certificate.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-auto self-start rounded-full border-border/70 bg-background/40"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <Dialog
            open={selectedCertificate !== null}
            onOpenChange={(open) => {
              if (!open) setSelectedCertificate(null);
            }}
          >
            <DialogContent className="h-[90vh] max-w-[calc(100vw-2rem)] overflow-hidden border-border bg-background/95 p-4 backdrop-blur sm:max-w-6xl">
              <DialogTitle className="sr-only">
                {selectedCertificate?.title ?? "Certificate preview"}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Enlarged certificate image
              </DialogDescription>
              {selectedCertificate && (
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="h-full w-full object-contain"
                />
              )}
            </DialogContent>
          </Dialog>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-semibold text-foreground text-center mb-12">
            Research Focus Areas
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/30 transition-all duration-300"
              >
                <FileText className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "3", label: "Conference Contributions" },
              { value: "3+", label: "Research Projects" },
              { value: "5+", label: "AI Models Developed" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-4xl font-display font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
