import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  color: string;
  size: number;
  life: number;
};

const COLORS = [
  "#fbbf24",
  "#f59e0b",
  "#ea580c",
  "#dc2626",
  "#861043",
  "#166534",
  "#2563eb",
  "#ec4899",
];

export function BirthdayBlast({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const burstFrom = (cx: number, cy: number, count: number) => {
      const out: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const speed = 6 + Math.random() * 10;
        out.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[(i + Math.floor(Math.random() * 3)) % COLORS.length],
          size: 4 + Math.random() * 6,
          life: 1,
        });
      }
      return out;
    };

    let particles: Particle[] = [
      ...burstFrom(w * 0.35, h * 0.45, 48),
      ...burstFrom(w * 0.65, h * 0.48, 48),
      ...burstFrom(w * 0.5, h * 0.55, 36),
    ];

    let raf = 0;
    const gravity = 0.22;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      particles = particles.filter((p) => p.life > 0.02);
      for (const p of particles) {
        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.vx *= 0.99;
        p.life *= 0.985;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.min(1, p.life * 1.2);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      if (particles.length < 120 && Math.random() < 0.08) {
        particles.push(
          ...burstFrom(w * (0.3 + Math.random() * 0.4), h * 0.25 + Math.random() * h * 0.35, 16)
        );
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[71]"
      aria-hidden
    />
  );
}
