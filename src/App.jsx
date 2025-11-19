import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      {/* Glow background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[40vh] w-[40vh] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Replify — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-slate-400 hover:text-white" href="#">Privacy</a>
            <a className="text-slate-400 hover:text-white" href="#">Terms</a>
            <a className="text-slate-400 hover:text-white" href="/test">System status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
