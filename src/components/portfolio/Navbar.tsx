import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-mono text-base flex items-center gap-1 group">
          <span className="text-primary">&lt;</span>
          <span className="text-foreground tracking-tight">Maharshi_Soni</span>
          <Code2 className="h-4 w-4 text-accent ml-0.5 group-hover:rotate-12 transition-transform" />
          <span className="text-primary">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden container mt-3 glass rounded-2xl p-4 flex flex-col gap-1 animate-fade-up">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mt-2" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
