function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live on Google Business Profiles
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Auto‑reply to reviews with AI. Turn feedback into growth.
            </h1>
            <p className="mt-5 text-lg text-slate-300/90">
              Replify reads every Google review and crafts on‑brand responses instantly. Save hours, boost ratings, and win back time for your team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-sky-500/20">
                Start free — no card
              </a>
              <a href="#how" className="inline-flex justify-center rounded-lg border border-white/15 bg-white/5 text-white px-6 py-3">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-400">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full ring-2 ring-slate-800 bg-gradient-to-br from-slate-600 to-slate-400" />
                ))}
              </div>
              <p className="text-sm">Loved by local brands and multi‑location teams</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-emerald-400/10 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900 p-4">
              <div className="rounded-xl bg-slate-950 ring-1 ring-white/10 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span>Google Reviews</span>
                  <span>Replify AI</span>
                </div>
                <div className="space-y-4">
                  {[1,2,3].map((i) => (
                    <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">Customer #{i}</span>
                            <span className="text-amber-400">★★★★★</span>
                          </div>
                          <p className="text-sm text-slate-300/90 mt-1">Amazing service! Super quick and professional.</p>
                        </div>
                        <span className="text-xs text-slate-400">2h</span>
                      </div>
                      <div className="mt-3 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 p-3">
                        <p className="text-sm text-emerald-200"><span className="font-semibold">Replify:</span> Thank you for the fantastic review! We’re thrilled you had a great experience — we’ll be here when you need us again.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
