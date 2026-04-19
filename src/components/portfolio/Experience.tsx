import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "./About";

const work = [
  {
    title: "System Engineer",
    org: "Tata Consultancy Services (TCS)",
    period: "Aug 2023 – Present",
    desc: "Building the TNIGRS Land Registration platform on Java Spring Boot. Designed REST APIs for E-Seva CC/EC, Natham, and LED Token integrations. Implemented Aadhaar masking with ActiveMQ JMS for async, privacy-compliant processing. Optimized Hibernate ORM queries and led a team of 5 developers — assigning tasks, reviewing code, and mentoring juniors.",
    tags: ["Java", "Spring Boot", "Hibernate", "ActiveMQ", "REST", "Team Lead"],
  },
];

const edu = [
  {
    title: "B.Tech in Electronics Engineering",
    org: "Birla Vishvakarma Mahavidyalaya",
    period: "Graduated",
    desc: "Completed Bachelor of Technology in Electronics Engineering with an overall CPI of 8.97. Built a strong foundation in problem-solving, mathematics, and engineering fundamentals that translates directly into clean software design.",
    tags: ["B.Tech", "Electronics", "CPI 8.97"],
  },
  {
    title: "Core Java & Spring Ecosystem",
    org: "Self-Study & On-the-job",
    period: "2022 – Present",
    desc: "Deep dive into Core Java (OOP, Multithreading, Collections), Java 8 Streams & Lambdas, the Spring ecosystem (Spring Boot, Spring Data JPA, Hibernate), security (JWT, OAuth), and messaging (ActiveMQ).",
    tags: ["Core Java", "Spring Boot", "JPA", "Streams"],
  },
];

const Timeline = ({
  items,
  accent,
}: {
  items: typeof work;
  accent: "primary" | "accent";
}) => (
  <div className="relative pl-8">
    <div className={`absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b ${accent === "primary" ? "from-primary via-primary/30" : "from-accent via-accent/30"} to-transparent`} />
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.title} className="relative">
          <div className={`absolute -left-[26px] top-3 h-3 w-3 rounded-full ${accent === "primary" ? "bg-primary shadow-glow" : "bg-accent shadow-accent-glow"}`} />
          <div className="glow-card glass rounded-xl p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
            </div>
            <div className={`text-sm mb-3 ${accent === "primary" ? "text-primary" : "text-accent"}`}>
              {item.org}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 scroll-mt-20 bg-secondary/20">
      <div className="container">
        <SectionHeader
          eyebrow="Experience & Education"
          title="My Journey"
          desc="From engineering fundamentals to shipping production backend systems for government-scale platforms."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
              <Briefcase className="h-5 w-5 text-primary" /> Work Experience
            </h3>
            <Timeline items={work} accent="primary" />
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
              <GraduationCap className="h-5 w-5 text-accent" /> Education & Learning
            </h3>
            <Timeline items={edu} accent="accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
