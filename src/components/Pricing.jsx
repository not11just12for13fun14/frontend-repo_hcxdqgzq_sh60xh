function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-300/90">Start free. Upgrade when you’re ready to automate more locations.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-lg">Starter</h3>
            <p className="text-slate-300/90 text-sm mt-1">For solo locations getting started</p>
            <p className="mt-6 text-4xl font-bold text-white">$0<span className="text-base font-normal text-slate-300/70">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
              <li>• 50 AI replies / month</li>
              <li>• 1 Google location</li>
              <li>• Brand voice basics</li>
              <li>• Manual approve & publish</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-lg border border-white/15 bg-white/5 text-white px-4 py-2">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-sky-400/30 bg-gradient-to-tr from-sky-400/10 via-indigo-400/10 to-emerald-400/10 p-[2px]">
            <div className="rounded-[14px] h-full w-full bg-slate-950 p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-200">Most popular</div>
              <h3 className="mt-3 text-white font-semibold text-lg">Growth</h3>
              <p className="text-slate-300/90 text-sm mt-1">For growing brands with volume</p>
              <p className="mt-6 text-4xl font-bold text-white">$39<span className="text-base font-normal text-slate-300/70">/mo</span></p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
                <li>• 500 AI replies / month</li>
                <li>• Up to 5 locations</li>
                <li>• Advanced brand voice</li>
                <li>• Auto‑publish rules</li>
                <li>• Priority support</li>
              </ul>
              <a href="#" className="mt-6 inline-flex w-full justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-slate-900 font-semibold px-4 py-2">Start free trial</a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-lg">Scale</h3>
            <p className="text-slate-300/90 text-sm mt-1">For agencies & multi‑location teams</p>
            <p className="mt-6 text-4xl font-bold text-white">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
              <li>• Unlimited AI replies</li>
              <li>• Unlimited locations</li>
              <li>• SSO & roles</li>
              <li>• Dedicated success manager</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-lg border border-white/15 bg-white/5 text-white px-4 py-2">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
