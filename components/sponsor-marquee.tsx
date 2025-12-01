"use client";

const sponsors = ["Genshin", "Valorant", "Mobile Legends", "Free Fire", "PUBG", "Honkai"];

export default function SponsorMarquee() {
  const loopedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-white/5 via-transparent to-white/5 px-4 py-6 text-center">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-yellow-200">
        Sponsor & Partners
      </p>

      <div className="mt-4 overflow-hidden">
        <div className="sponsor-track text-lg font-bold uppercase tracking-[0.3em] text-white/70">
          {loopedSponsors.map((name, index) => (
            <span key={`${name}-${index}`} className="px-6 text-lg sm:text-xl">
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
