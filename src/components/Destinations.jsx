import { useState, useMemo } from 'react'

const DESTINATIONS = [
  { city: 'Santorini', country: 'Greece', tag: 'Seaside', img: 'https://images.unsplash.com/photo-1506968430777-bf7784a87f22?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Kyoto', country: 'Japan', tag: 'Culture', img: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Bali', country: 'Indonesia', tag: 'Wellness', img: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Amalfi', country: 'Italy', tag: 'Seaside', img: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab1b4?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Reykjavík', country: 'Iceland', tag: 'Adventure', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Maui', country: 'USA', tag: 'Seaside', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
]

const TAGS = ['All', 'Seaside', 'Culture', 'Wellness', 'Adventure']

export default function Destinations() {
  const [active, setActive] = useState('All')
  const items = useMemo(() => active === 'All' ? DESTINATIONS : DESTINATIONS.filter(d => d.tag === active), [active])

  return (
    <section id="destinations" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Where love takes you</h3>
            <p className="mt-3 text-white/70">Handpicked places to match your mood.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map(t => (
              <button key={t} onClick={() => setActive(t)} className={`rounded-full border px-4 py-2 text-sm transition backdrop-blur ${active===t? 'border-pink-400/60 bg-pink-500/20 text-pink-100' : 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(d => (
            <div key={d.city} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-56 overflow-hidden">
                <img src={d.img} alt={`${d.city}, ${d.country}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{d.city}</h4>
                  <p className="text-sm text-white/70">{d.country} • {d.tag}</p>
                </div>
                <a href="#plan" className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20">Plan</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
