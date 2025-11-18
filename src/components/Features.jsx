import { Sparkle, MapPinned, Plane, GlassWater } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "End-to-end planning",
    desc: "Flights, stays, transfers, experiences — handled with care so you can be present with each other.",
  },
  {
    icon: MapPinned,
    title: "Curated destinations",
    desc: "From Santorini sunsets to Kyoto whispers — we match places to your vibe, not trends.",
  },
  {
    icon: GlassWater,
    title: "Indulgent moments",
    desc: "Private dinners, spa rituals, and surprise touches that feel like you.",
  },
  {
    icon: Sparkle,
    title: "Concierge on call",
    desc: "From itinerary tweaks to last-minute magic — we’re here 24/7.",
  },
];

export default function Features() {
  return (
    <section id="honeymoons" className="relative z-10 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Honeymoons, elevated</h3>
          <p className="mt-3 text-white/70">Thoughtfully designed, effortlessly executed.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-pink-300">
                <f.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-white">{f.title}</h4>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
