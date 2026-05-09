import { useState } from "react";

export type FamilyCard = {
  title: string;
  caption: string;
  imageSrc: string;
};

function FamilyPhotoCard({ title, caption, imageSrc }: FamilyCard) {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-marigold-200/70 bg-white/80 shadow-lg shadow-marigold-500/10 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-marigold-100/70 via-white to-lotus-100/50">
        {!photoMissing ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={() => setPhotoMissing(true)}
          />
        ) : (
          <div className="flex h-full min-h-[180px] flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="font-display text-lg font-semibold text-leaf-800/90">Photo coming soon</span>
            <p className="font-sans text-xs italic leading-relaxed text-leaf-700/85">
              Your portrait with loved ones will shine here.
            </p>
          </div>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-display text-xl font-semibold text-leaf-900">{title}</h4>
        <p className="mt-2 font-sans text-sm leading-relaxed text-leaf-800/90">{caption}</p>
      </div>
    </article>
  );
}

export function FamilySection({ cards }: { cards: FamilyCard[] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center font-display text-3xl font-bold text-leaf-900">
          Sisters &amp; brothers-in-law
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-leaf-800/85">
          Every sister with her life partner and family — each home a thread in the same bright weave of
          love, laughter, and festival season stories.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {cards.map((c) => (
            <FamilyPhotoCard key={c.imageSrc} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
