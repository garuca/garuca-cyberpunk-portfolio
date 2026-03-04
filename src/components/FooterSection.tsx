import { Linkedin, Github, Mail, Video } from "lucide-react";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/garuca",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/garuca",
  },
  {
    icon: Video,
    label: "TikTok",
    href: "https://tiktok.com/@garuca.dev",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:gabriel.rufino.carvalho@gmail.com",
  },
];

const FooterSection = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-primary/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                cyber-clip-sm bg-card hud-border px-6 py-3 flex items-center gap-3
                group transition-all duration-300
                hover:shadow-[0_0_20px_hsl(var(--cyber-cyan)/0.3)]
                hover:border-secondary
              "
            >
              <link.icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
              <span className="font-display text-xs tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Signature */}
        <div className="space-y-2">
          <div className="font-display text-sm text-primary tracking-[0.3em] text-glow-yellow">
            GARUCA.DEV
          </div>
          <div className="font-body text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} — SYSTEM OPERATIONAL
          </div>
        </div>

        {/* HUD decoration */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-12 h-px bg-primary/30" />
          <div className="w-2 h-2 rotate-45 border border-secondary" />
          <div className="w-12 h-px bg-primary/30" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
