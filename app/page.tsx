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
  ArrowUpRight,
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
    details: [
      "Guiding students through practical information security concepts, malware analysis, phishing awareness, and hands-on lab exercises.",
      "Strengthening technical communication through mentoring and structured cybersecurity instruction.",
    ],
  },
  {
    icon: Briefcase,
    role: "Cybersecurity SME Intern",
    org: "Comtech LLC (MSSP)",
    details: [
      "Contributed to threat assessment workflows, cybersecurity whitepapers, service design, and managed security engagement planning.",
      "Worked across healthcare and public-sector security engagement environments using structured risk methodologies.",
    ],
  },
  {
    icon: Server,
    role: "Network Security TAC Engineer (L1 → L2)",
    org: "Movate / HPE-Aruba",
    details: [
      "Enterprise infrastructure security troubleshooting involving packet analysis, access control hardening, vulnerability visibility, and production incident escalation.",
      "Built operational depth across infrastructure defense and enterprise security operations.",
    ],
  },
];

const featuredProjects = [
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    subtitle: "Azure vs GCP Default IaaS Security Review",
    description:
      "Comparative hands-on security assessment of default cloud deployments evaluating IAM exposure, logging visibility, encryption posture, storage controls, and hardening opportunities.",
    tags: ["Azure", "GCP", "IAM", "Cloud Logging", "CIS", "NIST"],
  },
  {
    icon: Network,
    title: "Network Security Labs",
    subtitle: "Traffic Analysis & Vulnerability Assessment",
    description:
      "Hands-on protocol analysis, Wireshark packet inspection, Nessus vulnerability assessment, and VPN/NAT behavioral exploration using realistic security lab workflows.",
    tags: ["Wireshark", "Nessus", "VPN", "Traffic Analysis"],
  },
  {
    icon: Shield,
    title: "Applied Security Labs",
    subtitle: "SQL Injection & Cryptography",
    description:
      "Practical offensive security engineering exercises covering SQL injection workflows and RSA cryptographic implementation with generated artifacts.",
    tags: ["SQL Injection", "Burp Suite", "RSA", "OpenSSL"],
  },
  {
    icon: Lock,
    title: "Malware Progression & Detection",
    subtitle: "Threat Evolution Research",
    description:
      "Research exploring malware evolution and detection approaches across signature-based, behavioral, and hybrid defensive analysis strategies.",
    tags: ["Malware", "Threat Research", "Detection"],
  },
  {
    icon: Monitor,
    title: "Identity Theft Research",
    subtitle: "Case Studies & Prevention Controls",
    description:
      "Security analysis of identity theft attack vectors, business impact, and control recommendations using real-world incident case studies.",
    tags: ["IAM", "MFA", "Identity Security"],
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
    "Security Posture",
  ],
  "Infrastructure Security": [
    "Network Security",
    "802.1X",
    "RADIUS",
    "TACACS+",
    "VPN",
  ],
  "Security Tooling": [
    "Wireshark",
    "Nessus",
    "Qualys",
    "Nmap",
    "Burp Suite",
  ],
  "Systems & Automation": ["Linux", "Windows", "Python", "Bash", "Git"],
};

const certifications = [
  "ISC2 CC",
  "AZ-900",
  "Fortinet FCA",
  "Fortinet FCF",
  "Splunk Core User",
];

const articles = [
  {
    title: "OverTheWire Natas: Building a CTF Mindset",
    desc: "Exploring offensive security thinking through challenge-driven web exploitation.",
  },
  {
    title: "Natas Walkthrough Series",
    desc: "Documenting progressive offensive security learning and problem-solving.",
  },
  {
    title: "It Wasn’t Maintenance — It Was a Ransom Note",
    desc: "A security-focused ransomware narrative exploring operational impact.",
  },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
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
        </div>
      </div>
    </nav>
  );
}

function SocialButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:border-sky-400 hover:bg-slate-900"
    >
      {label}
    </a>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {label}
    </span>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition hover:-translate-y-2 hover:border-sky-400/40 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-[40rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-7xl px-6">
        {/* HERO */}
        <section className="flex min-h-[90vh] flex-col justify-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-sky-400">
              Security Engineer
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Akshaykumar{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Kathirvelu
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
              Security professional with enterprise infrastructure security
              experience, MSSP cybersecurity exposure, and hands-on engineering
              work spanning cloud security, security operations, infrastructure
              defense, and applied security labs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <SocialButton
                href="https://www.linkedin.com/in/akshaykumar-kathirvelu/"
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

            <div className="mt-14 flex flex-wrap gap-3">
              <Tag label="Cloud Security" />
              <Tag label="Security Operations" />
              <Tag label="Infrastructure Defense" />
              <Tag label="Threat Analysis" />
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
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
                <GlassCard key={exp.role} className="p-6">
                  <Icon className="mb-5 text-sky-400" size={30} />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-2 text-sky-400">{exp.org}</p>

                  <div className="mt-5 space-y-4 text-slate-300">
                    {exp.details.map((detail) => (
                      <p key={detail} className="leading-7">
                        {detail}
                      </p>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
                <GlassCard key={project.title} className="p-6">
                  <Icon className="mb-4 text-sky-400" size={28} />

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sky-400">{project.subtitle}</p>
                    </div>

                    <ArrowUpRight className="text-slate-500" size={20} />
                  </div>

                  <p className="mt-5 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
              <GlassCard key={category} className="p-6">
                <h3 className="text-xl font-semibold">{category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* CERTS */}
        <section className="py-20">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Certifications
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <Tag key={cert} label={cert} />
            ))}
          </div>
        </section>

        {/* WRITING */}
        <motion.section
          id="writing"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
              <GlassCard key={article.title} className="p-6">
                <BookOpen className="mb-5 text-sky-400" size={24} />
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-5 leading-7 text-slate-300">{article.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <section className="py-28 text-center">
          <Mail className="mx-auto mb-6 text-sky-400" size={30} />

          <h2 className="text-4xl font-bold">
            Let’s Build Secure Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
            Reach out through LinkedIn, GitHub, Medium, or direct email for
            conversations around security engineering, cloud security,
            infrastructure defense, and security operations.
          </p>
        </section>
      </main>
    </div>
  );
}