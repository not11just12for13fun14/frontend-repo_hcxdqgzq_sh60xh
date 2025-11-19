import { PlugZap, Edit3, Send } from 'lucide-react'

function Step({ icon: Icon, title, desc, number }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
      <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-slate-900 grid place-items-center font-bold text-sm">{number}</span>
      <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-white/90">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-slate-300/90 text-sm">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { icon: PlugZap, title: 'Connect Google', desc: 'Secure OAuth connects your Google Business Profile in seconds.', number: 1 },
    { icon: Edit3, title: 'Set your voice', desc: 'Add brand guidelines or paste a few examples — we’ll learn your tone.', number: 2 },
    { icon: Send, title: 'Auto‑reply', desc: 'Approve drafts or auto‑publish instantly. Escalate sensitive reviews.', number: 3 },
  ]

  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <Step key={s.number} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
