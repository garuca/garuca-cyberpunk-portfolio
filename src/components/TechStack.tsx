import { useEffect, useRef, useState } from "react";
import { Smartphone, Layers, GitBranch, Code2, Cpu, Settings } from "lucide-react";

const categories = [
  {
    title: "MOBILE",
    icon: Smartphone,
    color: "secondary",
    techs: ["Flutter", "Dart", "KMP", "Android (Kotlin/Java)", "iOS"],
  },
  {
    title: "ARQUITETURA",
    icon: Layers,
    color: "primary",
    techs: ["Clean Architecture", "MVVM", "MVI", "System Design"],
  },
  {
    title: "DEVOPS",
    icon: GitBranch,
    color: "destructive",
    techs: ["GitHub Actions", "CI/CD Pipelines", "Fastlane", "Firebase"],
  },
];

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6 hatch-pattern-cyan">
      {/* Section header */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-2">
          <Cpu className="w-4 h-4 text-secondary" />
          <span className="font-body text-xs tracking-[0.3em] text-secondary uppercase">
            System Capabilities
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary text-glow-yellow">
          TECH STACK
        </h2>
        <div className="w-24 h-px bg-secondary mt-4" />
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`
              relative cyber-clip bg-card hud-border p-6 transition-all duration-700
              hover:shadow-[0_0_20px_hsl(var(--cyber-cyan)/0.2)]
              group
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Glitch on hover */}
            <div className="group-hover:animate-glitch">
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className="w-5 h-5 text-secondary" />
                <h3 className="font-display text-sm font-bold text-primary tracking-wider">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.techs.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rotate-45 group-hover/item:bg-primary transition-colors" />
                    <span className="font-body text-sm text-muted-foreground group-hover/item:text-primary transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-secondary opacity-30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-secondary opacity-30" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
