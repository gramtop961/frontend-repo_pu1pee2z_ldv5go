export default function Stories(){
  return (
    <section id="stories" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">Real couples, real magic</h3>
        <p className="mt-3 text-white/70">A few love notes from journeys we curated.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-white/90">“From the surprise sunset dinner in Santorini to the private onsen in Kyoto — every detail felt like it was made for us.”</p>
              <p className="mt-4 text-sm text-white/60">— A & M</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
