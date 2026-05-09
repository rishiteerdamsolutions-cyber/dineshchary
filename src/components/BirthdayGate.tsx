import { useEffect, useState } from "react";
import { BirthdayBlast } from "./BirthdayBlast";

const STORAGE_KEY = "dinesh-birthday-modal-seen";

export function BirthdayGate() {
  const [open, setOpen] = useState(false);
  const [blast, setBlast] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      if (!seen) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setBlast(false);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      setBlast(true);
      const t = window.setTimeout(() => setBlast(false), 2800);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-leaf-900/70 px-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="birthday-title"
    >
      <BirthdayBlast active={blast} />
      <div className="animate-modal-in relative z-[72] max-w-lg rounded-3xl border border-marigold-300/60 bg-gradient-to-br from-amber-50 via-white to-lotus-50 p-8 shadow-2xl shadow-marigold-500/20">
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-marigold-300/30 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-lotus-200/40 blur-2xl"
            aria-hidden
          />

          <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.35em] text-marigold-600">
            May 9 · Celebration
          </p>
          <h1
            id="birthday-title"
            className="mt-3 text-center font-display text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl"
          >
            Happy Birthday,
            <span className="mt-1 block bg-gradient-to-r from-marigold-600 via-orange-600 to-lotus-800 bg-clip-text text-transparent">
              Dinesh Chary
            </span>
          </h1>
          <p className="mt-5 text-center font-sans text-base leading-relaxed text-leaf-800/90">
            A shower of blessings, laughter, and golden moments — today we toast to the heart you bring
            into every room.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={close}
              className="rounded-full bg-gradient-to-r from-marigold-500 to-orange-600 px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-marigold-400 focus:ring-offset-2"
            >
              Step into the celebration
            </button>
          </div>
      </div>
    </div>
  );
}
