import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
              Love-led adventures
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-6xl">
              Honeymoons that feel like a movie
            </h2>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              We craft intimate escapes in breathtaking places — designed around your story, your rhythm, your forever.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#plan" className="inline-flex items-center justify-center rounded-xl bg-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:shadow-pink-500/40">
              Start planning
            </a>
            <a href="#destinations" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Explore destinations
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
