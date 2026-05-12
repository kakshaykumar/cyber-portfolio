"use client";

import { useState } from "react";
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
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    icon: GraduationCap,
    role: "Graduate Teaching Assistant",
    org: "George Mason University",
    capabilities: [
      "Information Security Labs",
      "Malware Analysis Fundamentals",
      "Security Mentorship",
      "Technical Communication",
    ],
    details:
      "Guiding students through practical cybersecurity labs, malware analysis fundamentals, phishing awareness, vulnerability assessment concepts, and structured problem-solving.",
  },
  {
    icon: Briefcase,
    role: "Cybersecurity SME Intern",
    org: "Comtech LLC (MSSP)",
    capabilities: [
      "Threat Assessment",
      "Managed Security Services",
      "Security Whitepapers",
      "Risk Methodologies",
    ],
    details:
      "Contributed to cybersecurity service design, technical whitepapers, threat assessment workflows, and structured managed security engagement planning.",
  },
  {
    icon: Server,
    role: "Network Security TAC Engineer (L1 → L2)",
    org: "Movate / HPE-Aruba",
    capabilities: [
      "Packet Analysis",
      "Infrastructure Security",
      "Access Control",
      "Incident Escalation",
    ],
    details:
      "Worked in enterprise infrastructure environments supporting security-focused troubleshooting, packet analysis, access control hardening, vulnerability visibility, and production incident workflows.",
  },
];

const projects = [
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    subtitle: "Azure vs GCP Default IaaS Security Review",
    short:
      "Comparative hands-on cloud security posture assessment.",
    github: "https://github.com/kakshaykumar/cloud-security-iaas",
    details: {
      objective:
        "Evaluate default security posture differences across Azure and Google Cloud IaaS environments.",
      scope: [
        "IAM exposure review",
        "Cloud logging visibility",
        "Encryption controls",
        "Storage configuration",
        "Hardening opportunities",
      ],
      takeaway:
        "Default deployments still require deliberate hardening for secure enterprise adoption.",
    },
    tags: ["Azure", "GCP", "IAM", "Cloud Security"],
  },
  {
    icon: Network,
    title: "Network Security Labs",
    subtitle: "Traffic Analysis & Vulnerability Assessment",
    short:
      "Hands-on infrastructure security and packet analysis exercises.",
    github: "https://github.com/kakshaykumar/network-security-labs",
    details: {
      objective:
        "Explore practical network defense workflows using real protocol and vulnerability analysis.",
      scope: [
        "Wireshark packet analysis",
        "Protocol inspection",
        "Nessus vulnerability scanning",
        "VPN/NAT behavioral analysis",
      ],
      takeaway:
        "Operational visibility is foundational to effective infrastructure defense.",
    },
    tags: ["Wireshark", "Nessus", "VPN", "Traffic Analysis"],
  },
  {
    icon: Shield,
    title: "Applied Security Labs",
    subtitle: "SQL Injection & Cryptography",
    short:
      "Practical offensive security engineering labs.",
    github: "https://github.com/kakshaykumar/applied-security-labs",
    details: {
      objective:
        "Apply offensive security concepts through exploitation and cryptographic implementation.",
      scope: [
        "SQL injection workflows",
        "Web exploitation fundamentals",
        "RSA implementation",
        "Security artifact generation",
      ],
      takeaway:
        "Understanding offensive workflows improves defensive engineering maturity.",
    },
    tags: ["SQLi", "Burp Suite", "RSA", "OpenSSL"],
  },
  {
    icon: Lock,
    title: "Malware Progression & Detection",
    subtitle: "Threat Evolution Research",
    short:
      "Research-driven malware evolution analysis.",
    github: "https://github.com/kakshaykumar/malware-progression-detection",
    details: {
      objective:
        "Study malware evolution and defensive detection approaches.",
      scope: [
        "Historical threat progression",
        "Detection methodologies",
        "Behavioral analysis concepts",
      ],
      takeaway:
        "Detection engineering evolves alongside adversary sophistication.",
    },
    tags: ["Malware", "Threat Research"],
  },
  {
    icon: Monitor,
    title: "Identity Theft Research",
    subtitle: "Case Studies & Prevention Controls",
    short:
      "Identity-focused security case study analysis.",
    github: "https://github.com/kakshaykumar/identity-theft-research",
    details: {
      objective:
        "Analyze identity theft attack vectors and prevention strategies.",
      scope: [
        "Case studies",
        "Business impact",
        "Identity controls",
        "Preventive recommendations",
      ],
      takeaway:
        "Identity remains a critical enterprise attack surface.",
    },
    tags: ["IAM", "MFA", "Identity Security"],
  },
];

const articles = [
  {
    title: "OverTheWire Natas: Building a CTF Mindset",
    link: "https://medium.com/@akshaykumar_90336/overthewire-natas-building-a-ctf-mindset-ad1a823ba614",
  },
  {
    title: "Natas Walkthrough Series",
    link: "https://medium.com/@akshaykumar_90336/overthewire-natas-level-1-level-2-feff2d0663ba",
  },
  {
    title: "It Wasn’t Maintenance — It Was a Ransom Note",
    link: "https://medium.com/@akshaykumar_90336/it-wasnt-maintenance-it-was-a-ransom-note-ced2a7f1962c",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {label}
    </span>
  );
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl transition hover:-translate-y-2 hover:border-sky-400/40">
      {children}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = project.icon;

  return (
    <GlassCard>
      <Icon className="mb-4 text-sky-400" size={28} />

      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sky-400">{project.subtitle}</p>
      <p className="mt-4 text-slate-300">{project.short}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mt-6 flex items-center gap-2 text-sky-400 hover:text-sky-300"
      >
        {open ? "Hide Technical Details" : "View Technical Details"}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 border-t border-white/10 pt-6"
        >
          <p className="text-slate-300">
            <strong>Objective:</strong> {project.details.objective}
          </p>

          <div className="mt-5">
            <p className="font-semibold text-white">Scope</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              {project.details.scope.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-slate-300">
            <strong>Key Takeaway:</strong> {project.details.takeaway}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
          >
            Implementation Reference <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}
    </GlassCard>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <main className="mx-auto max-w-7xl px-6">
        <section className="flex min-h-[90vh] flex-col justify-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-sky-400">
              Security Engineer
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Akshaykumar{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Kathirvelu
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
              Security engineer with enterprise infrastructure experience, MSSP exposure, and hands-on engineering across cloud security, operations, infrastructure defense, and applied security labs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Tag label="3 Years Enterprise Infrastructure" />
              <Tag label="MSSP Security Experience" />
              <Tag label="Graduate Teaching Assistant" />
              <Tag label="MS Cybersecurity" />
            </div>
          </motion.div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="mb-10 text-4xl font-bold">Experience</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <GlassCard key={exp.role}>
                  <Icon className="mb-4 text-sky-400" size={28} />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-2 text-sky-400">{exp.org}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.capabilities.map((cap) => (
                      <Tag key={cap} label={cap} />
                    ))}
                  </div>
                  <p className="mt-5 text-slate-300">{exp.details}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="mb-10 text-4xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="writing" className="py-20">
          <h2 className="mb-10 text-4xl font-bold">Security Writing</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <GlassCard key={article.title}>
                <BookOpen className="mb-4 text-sky-400" />
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <a
                  href={article.link}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 text-sky-400"
                >
                  Read Article <ArrowUpRight size={16} />
                </a>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="py-24 text-center">
          <Mail className="mx-auto mb-5 text-sky-400" />
          <h2 className="text-4xl font-bold">Let’s Connect</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Open to meaningful conversations around security engineering, infrastructure defense, and cloud security.
          </p>
        </section>
      </main>
    </div>
  );
}