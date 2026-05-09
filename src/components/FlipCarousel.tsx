import { useCallback, useEffect, useRef, useState } from "react";

type FlipCarouselProps = {
  images: string[];
  intervalMs?: number;
};

export function FlipCarousel({ images, intervalMs = 4500 }: FlipCarouselProps) {
  const [frontIdx, setFrontIdx] = useState(0);
  const [backIdx, setBackIdx] = useState(() => (images.length > 1 ? 1 : 0));
  const [rotated, setRotated] = useState(false);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<number | null>(null);

  const armNext = useCallback(() => {
    if (images.length < 2) return;
    setAnimate(true);
    const next = (frontIdx + 1) % images.length;
    setBackIdx(next);
    setRotated(true);
  }, [frontIdx, images.length]);

  useEffect(() => {
    if (images.length < 2) return;
    timerRef.current = window.setInterval(armNext, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [armNext, images.length, intervalMs]);

  const onFlipEnd = () => {
    if (!rotated) return;
    setAnimate(false);
    setRotated(false);
    setFrontIdx(backIdx);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
  };

  if (images.length === 0) return null;

  return (
    <section className="border-b border-marigold-200/60 bg-white/40 py-16 backdrop-blur-[2px]">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="text-center font-display text-3xl font-bold text-leaf-900">Moments in motion</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-leaf-800/85">
          A gentle flip through cherished snapshots — each frame holds the same stage, a new memory stepping
          forward.
        </p>

        <div className="mx-auto mt-10 max-w-md perspective-1000">
          <div
            className="relative aspect-[3/4] w-full"
            style={{
              transformStyle: "preserve-3d",
              transform: rotated ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: animate ? "transform 0.85s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            }}
            onTransitionEnd={onFlipEnd}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-white shadow-2xl ring-2 ring-marigold-300/40"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img
                src={images[frontIdx]}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
            <div
              className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-white shadow-2xl ring-2 ring-marigold-300/40"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={images[backIdx]}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === frontIdx ? "bg-marigold-500" : "bg-marigold-200"
                }`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
