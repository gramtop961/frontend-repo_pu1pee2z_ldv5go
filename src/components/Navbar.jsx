import { Menu, Heart, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <nav className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-300 shadow-inner shadow-pink-500/20">
                <Heart className="h-6 w-6" />
              </div>
              <div className="">
                <p className="text-sm tracking-wider text-white/60">Honeymoon Specialists</p>
                <h1 className="text-lg font-semibold text-white">Directiva Travel</h1>
              </div>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#honeymoons" className="text-white/80 hover:text-white transition">Honeymoons</a>
              <a href="#destinations" className="text-white/80 hover:text-white transition">Destinations</a>
              <a href="#stories" className="text-white/80 hover:text-white transition">Stories</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </div>

            <div className="hidden md:block">
              <a href="#plan" className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-white shadow-lg shadow-pink-500/30 transition hover:shadow-pink-500/40">
                <Phone className="h-4 w-4" />
                <span>Plan your trip</span>
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 p-2 text-white">
              <Menu className="h-6 w-6" />
            </button>
          </nav>

          {open && (
            <div className="md:hidden px-4 pb-4 pt-0">
              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                <a onClick={() => setOpen(false)} href="#honeymoons" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">Honeymoons</a>
                <a onClick={() => setOpen(false)} href="#destinations" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">Destinations</a>
                <a onClick={() => setOpen(false)} href="#stories" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">Stories</a>
                <a onClick={() => setOpen(false)} href="#contact" className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">Contact</a>
                <a onClick={() => setOpen(false)} href="#plan" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-white shadow-lg shadow-pink-500/30">Plan your trip</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
