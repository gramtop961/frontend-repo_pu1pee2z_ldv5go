export default function CTA(){
  return (
    <section id="plan" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_50%)]" />
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">Ready to design your forever trip?</h3>
        <p className="mt-3 text-white/70">Tell us your dates, your dream vibes, and any musts — we’ll handle the magic.</p>
        <form onSubmit={(e)=> e.preventDefault()} className="mx-auto mt-8 grid grid-cols-1 gap-3 sm:max-w-2xl sm:grid-cols-3">
          <input required placeholder="Your names" className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur" />
          <input required placeholder="Dates" className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur" />
          <input required placeholder="Email" type="email" className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur" />
          <button className="col-span-1 sm:col-span-3 mt-2 inline-flex items-center justify-center rounded-xl bg-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:shadow-pink-500/40">Request a proposal</button>
        </form>
      </div>
    </section>
  )
}
