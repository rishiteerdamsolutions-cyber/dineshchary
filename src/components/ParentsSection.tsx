import { useState } from "react";

type ParentsSectionProps = {
  imageSrc?: string;
};

export function ParentsSection({ imageSrc = "/images/parents.png" }: ParentsSectionProps) {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section className="border-b border-marigold-200/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center font-display text-3xl font-bold text-leaf-900">Parents</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-leaf-800/85">
          The heart of the home — where values took root and every blessing began.
        </p>

        <article className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-marigold-200/70 bg-white/80 shadow-lg shadow-marigold-500/10 backdrop-blur-sm">
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-marigold-100/80 via-white to-lotus-100/60 md:aspect-[21/9]">
            {!photoMissing ? (
              <img
                src={imageSrc}
                alt="Parents — mother and father"
                className="h-full w-full object-cover object-center"
                onError={() => setPhotoMissing(true)}
              />
            ) : (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-2 px-6 text-center">
                <span className="font-display text-2xl font-semibold text-leaf-800/90">Parents’ portrait</span>
                <p className="max-w-md font-sans text-sm italic leading-relaxed text-leaf-700/85">
                  A cherished photograph will appear here — the same grace and strength that raised our
                  family.
                </p>
              </div>
            )}
          </div>
          <div className="p-6 text-center md:p-8">
            <h4 className="font-display text-2xl font-semibold text-leaf-900">Mother &amp; Father</h4>
            <p className="mx-auto mt-3 max-w-xl font-sans text-base leading-relaxed text-leaf-800/90">
              Their guidance and sacrifice shaped the person you meet on this page — steady hands, calm
              voices, and a home where tradition and tomorrow sit at the same table.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
