import { SectionHeader } from "./About";

const groups = [
  {
    title: "Core Java & Frameworks",
    color: "from-primary to-primary-glow",
    skills: [
      { name: "Core Java (OOP, Multithreading)", level: 92 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring Framework", level: 85 },
      { name: "Hibernate / JPA", level: 88 },
      { name: "Java 8 Streams & Lambdas", level: 87 },
    ],
  },
  {
    title: "APIs, Architecture & Security",
    color: "from-accent to-primary",
    skills: [
      { name: "RESTful APIs", level: 90 },
      { name: "Microservices", level: 75 },
      { name: "JWT / OAuth", level: 82 },
      { name: "WebSockets", level: 70 },
      { name: "ActiveMQ (JMS)", level: 78 },
    ],
  },
  {
    title: "Database & Tooling",
    color: "from-code-green to-accent",
    skills: [
      { name: "SQL / Query Optimization", level: 85 },
      { name: "Spring Data JPA", level: 88 },
      { name: "RestTemplate / HttpClient", level: 85 },
      { name: "Log4j", level: 82 },
      { name: "Git", level: 85 },
    ],
  },
];

const familiar = [
  "Collection Framework", "Custom Exceptions", "JSON / XML Parsing", "File I/O",
  "Comparator / Comparable", "HashMap", "ArrayList", "LinkedList",
  "Aadhaar Vault", "SMS / Email Services", "CRUD Optimization",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 scroll-mt-20 bg-secondary/20">
      <div className="container">
        <SectionHeader
          eyebrow="Skills & Tools"
          title="Backend Tech Arsenal"
          desc="The Java ecosystem and tools I use daily to ship enterprise-grade backend systems."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="glow-card glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${g.color}`} />
                {g.title}
              </h3>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${g.color} transition-all duration-1000`}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="font-mono text-xs text-muted-foreground mb-4">// also experienced with</div>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {familiar.map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 text-xs font-mono rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-default"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
