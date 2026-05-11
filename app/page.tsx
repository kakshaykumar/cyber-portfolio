"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Cloud, Network, BookOpen } from "lucide-react";

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    org: "George Mason University",
    desc: "Mentoring students in information security fundamentals, hands-on labs, malware analysis, phishing simulations, vulnerability assessment concepts, and applied security coursework.",
  },
  {
    role: "Cybersecurity SME Intern",
    org: "Comtech LLC (MSSP)",
    desc: "Supported threat assessments, managed security service design, cybersecurity whitepapers, proposal engineering, and healthcare/government cybersecurity engagements.",
  },
  {
    role: "Network Security TAC Engineer (L1 → L2)",
    org: "Movate / HPE-Aruba",
    desc: "Enterprise infrastructure security troubleshooting, packet analysis, VAPT exposure, access control hardening, SIEM visibility, and production incident escalation.",
  },
];

const projects = [
  {
    title: "Cloud Security Assessment",
    subtitle: "Azure vs GCP IaaS Security Review",
    desc: "Comparative hands-on cloud security assessment evaluating IAM exposure, logging visibility, encryption controls, storage posture, and hardening opportunities.",
    icon: Cloud,
  },
  {
    title: "Network Security Labs",
    subtitle: "Traffic Analysis & Vulnerability Assessment",
    desc: "Hands-on protocol inspection, Wireshark analysis, Nessus vulnerability scanning, and NAT/VPN behavior exploration using realistic security lab scenarios.",
    icon: Network,
  },
  {
    title: "Applied Security Labs",
    subtitle: "SQL Injection & Cryptography",
    desc: "Practical offensive security exercises covering SQL injection workflows and RSA asymmetric cryptography implementation with real security artifacts.",
    icon: Shield,
  },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
          Akshaykumar Kathirvelu
        </h1>

        <div className="hidden gap-8 text-sm text-slate-400 md:flex">
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function SocialButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:bg-slate-900"
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6">
        {/* HERO */}
        <section className="flex min-h-[85vh] flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-400">
              Security Engineer
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Akshaykumar Kathirvelu
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Security professional with enterprise infrastructure security
              experience, MSSP cybersecurity exposure, and hands-on engineering
              work spanning cloud security, security operations, vulnerability
              management, and applied security labs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <SocialButton
                href="https://www.linkedin.com/in/akshaykumar-kathirvelu"
                label="LinkedIn"
              />

              <SocialButton
                href="mailto:kakshaykumark@gmail.com"
                label="Email"
              />

              <SocialButton
                href="https://github.com/kakshaykumar"
                label="GitHub"
              />

              <SocialButton
                href="https://medium.com/@akshaykumar_90336"
                label="Medium"
              />
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Operational Security Experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>

                <p className="mt-2 text-sky-400">{exp.org}</p>

                <p className="mt-4 leading-7 text-slate-300">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Featured Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Hands-On Security Engineering Work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <Icon className="mb-4 text-sky-400" size={30} />

                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  <p className="mt-2 text-sky-400">{project.subtitle}</p>

                  <p className="mt-4 leading-7 text-slate-300">
                    {project.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-slate-800 py-16 text-center"
        >
          <BookOpen className="mx-auto mb-4 text-sky-400" size={28} />

          <p className="text-slate-300">
            Connect via LinkedIn, Email, GitHub, or Medium.
          </p>
        </section>
      </main>
    </div>
  );
}