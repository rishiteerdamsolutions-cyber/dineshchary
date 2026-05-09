type AllSistersFamilySectionProps = {
  imageSrc?: string;
};

export function AllSistersFamilySection({
  imageSrc = "/images/all-sisters-family.png",
}: AllSistersFamilySectionProps) {
  return (
    <section className="border-b border-marigold-200/60 bg-white/30 py-14 backdrop-blur-[1px]">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-center font-display text-3xl font-bold text-leaf-900">
          All sisters &amp; families — together
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center font-sans text-leaf-800/85">
          One frame, every branch of love — sisters and brothers-in-law side by side, laughter backed by
          festoons and birthday light.
        </p>

        <div className="mx-auto mt-10 overflow-hidden rounded-2xl border border-marigold-200/70 bg-white/80 shadow-xl shadow-marigold-500/10">
          <div className="aspect-[21/11] max-h-[520px] overflow-hidden md:aspect-[24/10]">
            <img
              src={imageSrc}
              alt="All three sisters with their husbands at a family celebration"
              className="h-full w-full object-cover object-[center_25%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
