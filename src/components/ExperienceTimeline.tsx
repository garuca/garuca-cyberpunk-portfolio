import { useEffect, useRef, useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Faculdade São Leopoldo Mandic",
    role: "Tech Lead",
    period: "Atual",
    highlights: [
      "Foco em arquitetura escalável para plataformas educacionais",
      "Redução de 40% na manutenção de código legado",
      "Liderança de squad multidisciplinar",
    ],
    active: true,
  },
  {
    company: "Appmax",
    role: "Tech Lead",
    period: "Anterior",
    highlights: [
      "Mentoria técnica de desenvolvedores júnior e pleno",
      "Aumento de 25% na produtividade do time",
      "Implementação de CI/CD pipelines robustos",
    ],
    active: false,
  },
  {
    company: "ez.devs",
    role: "Senior Developer",
    period: "Anterior",
    highlights: [
      "Desenvolvimento de soluções mobile de alta performance",
      "Definição de padrões arquiteturais",
    ],
    active: false,
  },
  {
    company: "Hoje Tecnologia",
    role: "Developer",
    period: "Anterior",
    highlights: [
      "Desenvolvimento de aplicações Android nativas",
      "Integração de APIs REST e WebSocket",
    ],
    active: false,
  },
  {
    company: "NTT DATA",
    role: "Developer",
    period: "Anterior",
    highlights: [
      "Projetos enterprise para grandes corporações",
      "Metodologias ágeis e entregas contínuas",
    ],
    active: false,
  },
];

const ExperienceTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-2">
          <Briefcase className="w-4 h-4 text-secondary" />
          <span className="font-body text-xs tracking-[0.3em] text-secondary uppercase">
            Career Log
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary text-glow-yellow">
          EXPERIÊNCIA
        </h2>
        <div className="w-24 h-px bg-secondary mt-4" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-primary to-transparent" />

        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className={`
              relative pl-12 md:pl-20 pb-12 last:pb-0 transition-all duration-700
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            {/* Timeline dot */}
            <div className={`
              absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rotate-45 border
              ${exp.active
                ? "bg-secondary border-secondary shadow-[0_0_12px_hsl(var(--cyber-cyan)/0.6)]"
                : "bg-card border-primary"
              }
            `} />

            {/* Card */}
            <div className={`
              cyber-clip-sm bg-card hud-border p-6 group
              hover:shadow-[0_0_20px_hsl(var(--cyber-cyan)/0.15)]
              transition-shadow duration-300
            `}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-display text-sm font-bold text-primary tracking-wider">
                  {exp.company}
                </h3>
                {exp.active && (
                  <span className="font-body text-[10px] tracking-wider bg-secondary text-secondary-foreground px-2 py-0.5 cyber-clip-sm font-semibold">
                    ACTIVE
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-body text-xs text-secondary font-medium">{exp.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className="font-body text-xs text-muted-foreground">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 text-secondary mt-1 shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
