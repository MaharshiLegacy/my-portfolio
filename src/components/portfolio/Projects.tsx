import { useState } from "react";
import { Github, ExternalLink, Server } from "lucide-react";
import { SectionHeader } from "./About";

type Category = "All" | "Spring Boot" | "Integration" | "Security";

const projects = [
  {
    title: "TNIGRS Land Registration Platform",
    category: "Spring Boot" as Category,
    featured: true,
    org: "TCS · Production",
    desc: "Enterprise Spring Boot application powering land registration for the Tamil Nadu government. Implemented CRUD modules, optimized Hibernate queries, and built reliable workflows handling thousands of daily transactions.",
    stack: ["Java", "Spring Boot", "Hibernate", "JPA", "SQL"],
  },
  {
    title: "Aadhaar Masking & Vault System",
    category: "Security" as Category,
    featured: true,
    org: "TCS · Production",
    desc: "Privacy-first system that masks Aadhaar numbers and facial images of citizens. Integrated with the Aadhaar Vault for secure tokenized storage, ensuring compliance with India's data protection standards.",
    stack: ["Java", "Spring Boot", "ActiveMQ", "JMS", "REST"],
  },
  {
    title: "ActiveMQ Async Messaging Layer",
    category: "Spring Boot" as Category,
    org: "TCS · Production",
    desc: "Asynchronous communication layer using ActiveMQ JMS to decouple the Aadhaar Masking Service from core registration flows — improving throughput and resilience under load.",
    stack: ["Java", "Spring Boot", "ActiveMQ", "JMS"],
  },
  {
    title: "E-Seva CC & EC Integration",
    category: "Integration" as Category,
    org: "TCS · Production",
    desc: "Designed and shipped RESTful APIs to integrate with external E-Seva services for Encumbrance Certificate (EC) and Certified Copy (CC) issuance, including XML/JSON parsing and robust error handling.",
    stack: ["Spring Boot", "REST", "RestTemplate", "XML/JSON"],
  },
  {
    title: "LED Token Display Service",
    category: "Integration" as Category,
    org: "TCS · Production",
    desc: "REST API to drive real-time LED token displays at registration offices, coordinating queue states across multiple counters with minimal latency.",
    stack: ["Spring Boot", "REST", "WebSocket", "Java"],
  },
  {
    title: "Notification Service (SMS & Email)",
    category: "Integration" as Category,
    org: "TCS · Change Request",
    desc: "Refactored the notification pipeline to integrate external SMS and Email gateways via HttpClient, with retry logic, structured logging via Log4j, and templated content.",
    stack: ["Spring Boot", "HttpClient", "Log4j", "REST"],
  },
];

const filters: Category[] = ["All", "Spring Boot", "Integration", "Security"];

const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-28 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've Built"
          desc="Production backend systems and integrations I've designed and shipped at TCS."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all font-mono ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="glow-card glass rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground shrink-0">
                  <Server className="h-3.5 w-3.5 text-code-orange" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {p.featured && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-gradient-violet text-primary-foreground">
                    Featured
                  </span>
                )}
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-accent/40 text-accent">
                  {p.category}
                </span>
              </div>

              <div className="font-mono text-[11px] text-muted-foreground mb-3">
                {p.org}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
