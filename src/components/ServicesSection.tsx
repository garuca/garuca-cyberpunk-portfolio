import { useEffect, useRef, useState } from "react";
import { Users, LayoutGrid, Target } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "MENTORIA DE TALENTOS",
    description:
      "Desenvolvimento e capacitação técnica de times, acelerando o crescimento de devs júnior a sênior com práticas de code review, pair programming e planos de desenvolvimento individualizados.",
  },
  {
    icon: LayoutGrid,
    title: "ARQUITETURAS ROBUSTAS",
    description:
      "Definição e implementação de arquiteturas escaláveis usando Clean Architecture, MVVM e padrões que garantem manutenibilidade e testabilidade do código.",
  },
  {
    icon: Target,
    title: "ALINHAMENTO ESTRATÉGICO",
    description:
      "Ponte entre times técnicos e stakeholders de negócio, traduzindo requisitos em soluções técnicas eficientes e alinhadas com os objetivos da empresa.",
  },
];

const ServicesSection = () => {
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
    <section ref={ref} className="relative py-24 px-6 hatch-pattern">
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-4 h-4 text-secondary" />
          <span className="font-body text-xs tracking-[0.3em] text-secondary uppercase">
            Services & Leadership
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary text-glow-yellow">
          SERVIÇOS
        </h2>
        <div className="w-24 h-px bg-secondary mt-4" />
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            className={`
              relative cyber-clip bg-card hud-border-cyan p-8 group
              transition-all duration-700
              hover:shadow-[0_0_30px_hsl(var(--cyber-cyan)/0.2)]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="group-hover:animate-glitch">
              <svc.icon className="w-8 h-8 text-secondary mb-6" />
              <h3 className="font-display text-sm font-bold text-primary tracking-wider mb-4">
                {svc.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
