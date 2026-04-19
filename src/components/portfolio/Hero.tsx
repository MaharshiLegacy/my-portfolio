import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = ["Java Backend Developer", "Spring Boot Engineer", "REST API Specialist", "System Engineer @ TCS"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-up font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-code-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-code-green" />
          </span>
          <span className="text-muted-foreground">System Engineer @ TCS · Open to opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] animate-fade-up [animation-delay:100ms] opacity-0">
          Hi, I'm{" "}
          <span className="text-gradient">Maharshi Soni</span>
        </h1>

        <div className="mt-6 font-mono text-base sm:text-lg md:text-xl animate-fade-up [animation-delay:200ms] opacity-0">
          <span className="text-primary">String</span>{" "}
          <span className="text-accent">role</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-code-green">"{text}"</span>
          <span className="text-muted-foreground">;</span>
          <span className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle animate-blink" />
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed animate-fade-up [animation-delay:300ms] opacity-0">
          I’m a Java Backend Developer specializing in building secure, scalable, and high-performance applications using Java, Spring Boot, and Hibernate. Currently working on enterprise solutions for the TNIGRS Land Registration platform at <span className="text-primary" ><a href="https://www.tcs.com/" target="_blank">Tata Consultancy Services</a></span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:400ms] opacity-0">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">
              View My Work <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="https://drive.google.com/file/d/1E5MkLvyxUtSwAZIQMd4qwE4zpIObQDXA/view?usp=sharing" target="_blank">MyResume</a>            
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 animate-fade-up [animation-delay:500ms] opacity-0">
          {[
            { icon: Github, href: "https://github.com/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/maharshisoni1/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:maharshisoni3@gmail.com", label: "Email" },
            { icon: Coffee, href: "#about", label: "About" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="h-11 w-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-2 font-mono text-xs text-muted-foreground tracking-widest animate-float">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
