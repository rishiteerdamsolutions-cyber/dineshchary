type Card = {
  title: string;
  caption: string;
  imageSrc: string;
};

export function FamilySection({ cards }: { cards: Card[] }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center font-display text-3xl font-bold text-leaf-900">Family — sisters &amp; kin</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-leaf-800/85">
          Three beloved sisters, each with her own beautiful nest — warmth that travels through every branch
          of the family tree.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-marigold-200/70 bg-white/80 shadow-lg shadow-marigold-500/10 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.imageSrc}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display text-xl font-semibold text-leaf-900">{c.title}</h4>
                <p className="mt-2 font-sans text-sm leading-relaxed text-leaf-800/90">{c.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
