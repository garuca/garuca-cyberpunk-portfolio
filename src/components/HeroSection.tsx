import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hatch-pattern">
      {/* HUD corner decorations */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-primary opacity-40" />
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-primary opacity-40" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-primary opacity-40" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-primary opacity-40" />

      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"
          style={{ animation: "hud-scan 4s linear infinite" }}
        />
      </div>

      <div className={`text-center px-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* System status line */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full animate-cyber-pulse" />
          <span className="font-body text-xs tracking-[0.3em] text-secondary uppercase">
            System Online — Portfolio v4.0
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-primary text-glow-yellow mb-4 tracking-wider">
          GARUCA
        </h1>

        {/* Title */}
        <div className="font-display text-lg md:text-2xl text-secondary text-glow-cyan tracking-[0.2em] mb-8">
          SENIOR DEVELOPER | TECH LEAD
        </div>

        {/* Bio line with typewriter feel */}
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Especialista Mobile com{" "}
            <span className="text-primary font-semibold">12+ anos</span> de
            experiência, focado em ecossistemas{" "}
            <span className="text-secondary font-semibold">Flutter</span>,{" "}
            <span className="text-secondary font-semibold">Dart</span> e{" "}
            <span className="text-secondary font-semibold">Kotlin Multiplatform (KMP)</span>
            {showCursor && <span className="text-primary">▊</span>}
          </p>
        </div>

        {/* HUD stats bar */}
        <div className="mt-12 flex items-center justify-center gap-8 md:gap-12">
          {[
            { label: "ANOS EXP", value: "12+" },
            { label: "PROJETOS", value: "50+" },
            { label: "LIDERANÇA", value: "TECH LEAD" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-xl md:text-2xl text-primary font-bold">
                {stat.value}
              </div>
              <div className="font-body text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-cyber-pulse">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
          <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
