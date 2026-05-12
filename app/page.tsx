"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Shield,
  Cloud,
  Network,
  BookOpen,
  Lock,
  Server,
  Monitor,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    role: "Graduate Teaching Assistant",
    org: "George Mason University",
    details: [
      "Supporting information security coursework through hands-on lab guidance, malware analysis fundamentals, phishing awareness, and vulnerability assessment concepts.",
      "Strengthened technical communication by mentoring students through practical cybersecurity problem-solving.",
    ],
  },
  {
    icon: Briefcase,
    role: "Cybersecurity SME Intern",
    org: "Comtech LLC (MSSP)",
    details: [
      "Contributed to cybersecurity service design, threat assessment activities, technical whitepapers, and managed security service planning.",
      "Worked across healthcare and public-sector security engagement workflows involving structured risk evaluation methodologies.",
    ],
  },
  {
    icon: Server,
    role: "Network Security TAC Engineer (L1 → L2)",
    org: "Movate / HPE-Aruba",
    details: [
      "Worked in enterprise infrastructure environments supporting security-focused troubleshooting, packet analysis, access control hardening, and vulnerability visibility workflows.",
      "Built strong operational foundations in infrastructure security, production incident escalation, and enterprise network defense concepts.",
    ],
  },
];

const featuredProjects = [
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    subtitle: "Azure vs GCP Default IaaS Security Review",
    description:
      "Comparative hands-on security assessment evaluating default cloud security posture across IAM exposure, logging visibility, encryption controls, storage configuration, and hardening opportunities.",
    tags: ["Azure", "GCP", "IAM", "Cloud Logging", "CIS", "NIST"],
  },
  {
    icon: Network,
    title: "Network Security Labs",
    subtitle: "Traffic Analysis & Vulnerability Assessment",
    description:
      "Hands-on protocol inspection, Wireshark packet analysis, Nessus-based vulnerability assessment, and NAT/VPN behavior exploration through realistic infrastructure security lab exercises.",
    tags: ["Wireshark", "Nessus", "TCP/IP", "VPN", "Network Security"],
  },
  {
    icon: Shield,
    title: "Applied Security Labs",
    subtitle: "SQL Injection & RSA Cryptography",
    description:
      "Practical security engineering exercises covering SQL injection exploitation workflows and RSA asymmetric cryptography implementation using real generated artifacts and annotated analysis.",
    tags: ["SQL Injection", "Burp Suite", "OpenSSL", "Cryptography"],
  },
  {
    icon: Lock,
    title: "Malware Progression & Detection",
    subtitle: "Threat Evolution Research",
    description:
      "Security research exploring malware evolution from early threats to advanced campaigns, mapping detection approaches across signature, behavioral, and hybrid analysis strategies.",
    tags: ["Malware Analysis", "Threat Research", "Detection Engineering"],
  },
  {
    icon: Monitor,
    title: "Identity Theft Research",
    subtitle: "Case Studies & Prevention Controls",
    description:
      "Research-focused analysis of identity theft attack vectors, business impact, and practical security control recommendations using real-world incident case studies.",
    tags: ["IAM", "MFA", "Identity Security", "Risk Analysis"],
  },
];

const skills = {
  "Security Operations": [
    "Splunk",
    "SIEM",
    "Threat Analysis",
    "Vulnerability Management",
    "Incident Visibility",
  ],
  "Cloud Security": [
    "Azure",
    "GCP",
    "IAM",
    "Cloud Logging",
    "Security Posture Assessment",
  ],
  "Infrastructure Security": [
    "Network Security",
    "802.1X",
    "RADIUS",
    "TACACS+",
    "VPN",
    "Access Control",
  ],
  "Threat Analysis & Security Tooling": [
    "Wireshark",
    "Nessus",
    "Qualys",
    "Nmap",
    "Burp Suite",
  ],
  "Systems & Automation": [
    "Linux",
    "Windows",
    "Python",
    "Bash",
    "Git",
  ],
};

const certifications = [
  "ISC2 Certified in Cybersecurity (CC)",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Fortinet FCA",
  "Fortinet FCF",
  "Splunk Core User Training",
];

const articles = [
  {
    title: "OverTheWire Natas: Building a CTF Mindset",
    desc: "A practical exploration of web exploitation thinking through the Natas challenge series.",
  },
  {
    title: "OverTheWire Natas Walkthrough Series",
    desc: "Step-by-step challenge analysis documenting offensive security learning progression.",
  },
  {
    title: "It Wasn’t Maintenance — It Was a Ransom Note",
    desc: "A security-focused narrative exploring ransomware impact and operational implications.",
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
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#writing" className="hover:text-white transition">
            Writing
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

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
      {label}
    </span>
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

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
              Security professional with enterprise infrastructure security
              experience, MSSP cybersecurity exposure, and hands-on engineering
              work spanning cloud security, security operations, infrastructure
              defense, vulnerability assessment, and applied security labs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <SocialButton
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
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
            {experiences.map((exp) => {
              const Icon = exp.icon;

              return (
                <div
                  key={exp.role}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <Icon className="mb-4 text-sky-400" size={28} />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-2 text-sky-400">{exp.org}</p>

                  <div className="mt-4 space-y-4 text-slate-300">
                    {exp.details.map((detail) => (
                      <p key={detail} className="leading-7">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
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

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <Icon className="mb-4 text-sky-400" size={28} />
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sky-400">{project.subtitle}</p>
                  <p className="mt-4 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Skills
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Security Engineering Capabilities
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-xl font-semibold">{category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Certifications
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Professional Validation
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <Tag key={cert} label={cert} />
            ))}
          </div>
        </section>

        {/* WRITING */}
        <section id="writing" className="py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Security Writing
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Technical Learning & Writeups
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <BookOpen className="mb-4 text-sky-400" size={24} />
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-slate-800 py-20 text-center"
        >
          <Mail className="mx-auto mb-5 text-sky-400" size={28} />

          <h2 className="text-3xl font-bold">
            Let’s Connect
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Reach out through LinkedIn, GitHub, Medium, or direct email for
            professional conversations around security engineering, cloud
            security, infrastructure defense, and security operations.
          </p>
        </section>
      </main>
    </div>
  );
}