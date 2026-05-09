const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4";

export function SiteVideoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Soft veil so cards & typography stay legible over motion */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-orange-50/70 to-lotus-100/75" />
      <div className="absolute inset-0 bg-rangoli opacity-90" />
    </div>
  );
}
