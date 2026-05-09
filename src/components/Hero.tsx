type HeroProps = {
  profileSrc: string;
};

export function Hero({ profileSrc }: HeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-marigold-200/60">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-start md:gap-14 md:py-24">
        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-marigold-300 via-orange-400 to-lotus-700 opacity-80 blur-xl" />
          <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl ring-2 ring-marigold-400/50">
            <img
              src={profileSrc}
              alt="Dinesh Chary Bompelly — portrait"
              width={280}
              height={280}
              className="aspect-square h-56 w-56 object-cover object-top sm:h-64 sm:w-64 md:h-72 md:w-72"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 rounded-full bg-white/95 px-4 py-1 text-xs font-medium uppercase tracking-widest text-marigold-700 shadow-md ring-1 ring-marigold-200">
            Hyderabad · Telangana
          </div>
        </div>

        <div className="max-w-xl text-center md:text-left">
          <p className="font-display text-lg italic text-lotus-800/90">Namaskaram · A warm introduction</p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-leaf-900 sm:text-5xl">
            Dinesh Chary{" "}
            <span className="bg-gradient-to-r from-marigold-600 to-orange-700 bg-clip-text text-transparent">
              Bompelly
            </span>
          </h2>
          <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-leaf-700/90">
            AWS DevOps Engineer · PruTech Solutions
          </p>

          <div className="mt-6 rounded-2xl border border-marigold-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
            <p className="font-display text-xl font-semibold text-leaf-900">
              Celebrated as one of the{" "}
              <span className="text-marigold-700">most desirable bachelors</span> in our circle — grounded,
              groomed, and glowing with purpose.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-leaf-800/95">
              Rooted in a distinguished{" "}
              <strong className="font-semibold text-leaf-900">Vishwa Brahmana</strong> household of the{" "}
              <strong className="font-semibold text-leaf-900">Sanathana</strong> lineage, Dinesh blends
              classical values with a modern stride: calm leadership on the cloud, steady feet on Telugu
              soil, and a heart tuned for family. Born on a bright spring day —{" "}
              <time dateTime="1998-05-09">9 May 1998</time> — he carries forward education from Vivekananda
              Institute of Technology &amp; Science (CSE, 2016–2020) into a career that builds reliable
              systems and dependable relationships alike.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
