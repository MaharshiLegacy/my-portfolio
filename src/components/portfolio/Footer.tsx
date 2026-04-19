import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div className="font-mono text-xs">
        © {new Date().getFullYear()} <span className="text-foreground">Maharshi Soni</span>. Built with Java, Spring Boot & ☕.
      </div>
      <div className="flex items-center gap-1.5 font-mono text-xs">
        Built with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> & lots of coffee
      </div>
    </div>
  </footer>
);

export default Footer;
