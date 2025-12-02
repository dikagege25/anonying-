"use client";

const sponsors = ["Genshin", "Valorant", "Mobile Legends", "Free Fire", "PUBG", "Honkai"];

export default function SponsorMarquee() {
  const loopedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 via-transparent to-white/5 px-3 py-4 text-center text-xs sm:text-sm">
      <p className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-yellow-200">
        Sponsor & Partners
      </p>

      <div className="mt-3 overflow-hidden">
        <div className="sponsor-track text-sm font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-base">
          {loopedSponsors.map((name, index) => (
            <span key={`${name}-${index}`} className="px-3 text-sm sm:text-base">
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes sponsor-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .sponsor-track {
          display: flex;
          width: max-content;
          animation: sponsor-slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
