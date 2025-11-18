import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Destinations from './components/Destinations'
import Stories from './components/Stories'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Stories />
      <CTA />
      <footer id="contact" className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-white/60">© {new Date().getFullYear()} Directiva Travel. All rights reserved.</p>
            <div className="flex gap-6 text-white/70">
              <a className="hover:text-white" href="#">Instagram</a>
              <a className="hover:text-white" href="#">TikTok</a>
              <a className="hover:text-white" href="#">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
