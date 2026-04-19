import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeader } from "./About";

const socials = [
  { icon: Github, label: "GitHub", handle: "@maharshi-soni", href: "https://github.com/MaharshiLegacy" ,target: "_blank" },
  { icon: Linkedin, label: "LinkedIn", handle: "Maharshi Soni", href: "https://www.linkedin.com/in/maharshisoni1", target: "_blank" },
  { icon: Mail, label: "Email", handle: "maharshisoni3@gmail.com", href: "mailto:maharshisoni3@gmail.com", target: "_blank" },
  { icon: Phone, label: "Phone", handle: "+91 63543 92694", href: "tel:+916354392694" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 scroll-mt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[600px] bg-primary/15 blur-3xl rounded-full pointer-events-none" />
      <div className="container relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something Reliable"
          desc="Have a backend challenge, a Spring Boot project, or just want to talk Java? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="glow-card glass rounded-2xl p-7">
              <h3 className="text-xl font-bold mb-3">Get in touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                I'm open to backend engineering roles, freelance Spring Boot projects, and interesting collaborations on scalable systems. If you're hiring, integrating, or just want to talk shop — drop a message.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <MapPin className="h-4 w-4 text-primary" />
                Gandhinagar, India · Open to Remote
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glow-card glass rounded-xl p-4 flex items-center gap-3 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="text-sm text-foreground truncate">{s.handle}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={submit}
            className="glow-card glass rounded-2xl p-7 space-y-4"
          >
            <div>
              <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or role..."
                className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary resize-none"
              />
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={sending}>
              {sending ? "Sending..." : (<>Send Message <Send className="ml-1 h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
