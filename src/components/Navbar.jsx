import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'How it works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 blur-md opacity-60 group-hover:opacity-80 transition" />
                <div className="relative rounded-lg bg-slate-900 ring-1 ring-white/10 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L7 21L12 17L17 21L12 3Z" fill="url(#g)"/>
                    <defs>
                      <linearGradient id="g" x1="7" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#60A5FA"/>
                        <stop offset="0.5" stopColor="#34D399"/>
                        <stop offset="1" stopColor="#A78BFA"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Replify</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-slate-900 font-semibold px-4 py-2 shadow-lg shadow-sky-500/20">
                Start free
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-white" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Menu</span>
                <button className="inline-flex items-center p-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-white" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>
              <div className="mt-4 grid gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 bg-white/5 text-slate-200/90">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" className="block text-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-slate-900 font-semibold px-4 py-2">
                  Start free
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
