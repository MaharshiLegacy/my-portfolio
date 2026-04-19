import { Server, Shield, Database, Users } from "lucide-react";

const traits = [
  { icon: Server, title: "Backend Architecture", desc: "Designing scalable Spring Boot services and REST APIs" },
  { icon: Shield, title: "Security First", desc: "JWT, OAuth, data masking & privacy-compliant systems" },
  { icon: Database, title: "Data & Persistence", desc: "Hibernate JPA, optimized SQL, and clean schema design" },
  { icon: Users, title: "Team Leadership", desc: "Leading a team of 6, code reviews, mentoring juniors" },
];

const stats = [
  { value: "2.5+", label: "Years @ TCS" },
  { value: "30+", label: "REST APIs Shipped" },
  { value: "6", label: "Devs Mentored" },
  { value: "8.97", label: "B.Tech CPI" },
];

const info = [
  ["name", '"Maharshi Soni"'],
  ["role", '"System Engineer @ TCS"'],
  ["location", '"Gandhinagar, India 🇮🇳"'],
  ["stack", '"Java · Spring Boot · JPA"'],
  ["status", '"Open to opportunities ✓"'],
];

const About = () => {
  return (
    <section id="about" className="relative py-28 scroll-mt-20">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="System Engineer Specializing in Java & Spring Boot" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Hey! I'm <span className="text-foreground font-semibold">Maharshi Soni</span>, a Java Backend Developer working as a System Engineer at <span className="text-primary">Tata Consultancy Services</span>. I specialize in building secure, scalable enterprise applications with the Spring ecosystem.
            </p>
            <p>
              At TCS I work on the <span className="text-foreground font-semibold">TNIGRS Land Registration</span> web application — a Spring Boot system handling sensitive citizen data. I've designed REST APIs for external integrations (E-Seva CC/EC, Natham, LED Token), implemented <span className="text-primary">Aadhaar masking</span> for privacy compliance, and built asynchronous workflows using <span className="text-primary">ActiveMQ JMS</span>.
            </p>
            <p>
              I have a strong grasp of Core Java, OOP, multithreading, the Collection Framework, and Java 8 Streams. I enjoy optimizing database queries with Hibernate ORM, debugging complex production issues, and mentoring my teammates to ship better code, faster.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {traits.map((t) => (
                <div
                  key={t.title}
                  className="glow-card glass rounded-xl p-5"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-3">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-foreground font-semibold mb-1">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="glow-card glass rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
                <span className="h-3 w-3 rounded-full bg-destructive/80" />
                <span className="h-3 w-3 rounded-full bg-code-orange/80" />
                <span className="h-3 w-3 rounded-full bg-code-green/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">// Developer.java</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <div className="text-muted-foreground">{"{"}</div>
                {info.map(([k, v]) => (
                  <div key={k} className="pl-5">
                    <span className="text-accent">"{k}"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-code-green">{v}</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                ))}
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glow-card glass rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) => (
  <div className="text-center mb-14">
    <div className="inline-block font-mono text-xs text-primary tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
      {eyebrow}
    </div>
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h2>
    {desc && (
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{desc}</p>
    )}
  </div>
);

export default About;
