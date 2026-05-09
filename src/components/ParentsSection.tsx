import { useState } from "react";

type ParentsSectionProps = {
  imageSrc?: string;
};

export function ParentsSection({ imageSrc = "/images/parents.png" }: ParentsSectionProps) {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section
      id="parents"
      className="border-b border-marigold-200/60 bg-gradient-to-b from-amber-50/40 to-transparent py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.35em] text-marigold-700">
          Parents
        </p>
        <h3 className="mt-2 text-center font-display text-3xl font-bold text-leaf-900">
          Bompelly Lakshmana Chary &amp; Bompelly Vanaja
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-leaf-800/85">
          Father and mother — the heart of this home, where values took root and every blessing began.
        </p>

        <article className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border-2 border-marigold-300/60 bg-white/90 shadow-lg shadow-marigold-500/10 backdrop-blur-sm">
          <div className="relative flex min-h-[240px] items-start justify-center overflow-hidden bg-gradient-to-b from-stone-100/90 via-amber-50/40 to-white px-2 pt-4 md:min-h-[280px]">
            {!photoMissing ? (
              <img
                src={imageSrc}
                alt="Bompelly Lakshmana Chary and Bompelly Vanaja — parents"
                className="mx-auto h-auto max-h-[min(560px,75vh)] w-full object-contain object-top"
                onError={() => setPhotoMissing(true)}
              />
            ) : (
              <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2 px-6 text-center">
                <span className="font-display text-2xl font-semibold text-leaf-800/90">
                  Parents&apos; photograph
                </span>
                <p className="max-w-md font-sans text-sm italic leading-relaxed text-leaf-700/85">
                  The portrait will appear here once the image file is available on the site.
                </p>
              </div>
            )}
          </div>
          <div className="space-y-3 p-6 text-center md:p-8">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-marigold-700">
                Father
              </p>
              <p className="font-display text-xl font-semibold text-leaf-900">Bompelly Lakshmana Chary</p>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-marigold-700">
                Mother
              </p>
              <p className="font-display text-xl font-semibold text-leaf-900">Bompelly Vanaja</p>
            </div>
            <p className="mx-auto mt-4 max-w-xl border-t border-marigold-200/80 pt-4 font-sans text-base leading-relaxed text-leaf-800/90">
              Their guidance and sacrifice shaped the family you see on this page — steady hands, calm
              voices, and a home where tradition and tomorrow sit at the same table.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
