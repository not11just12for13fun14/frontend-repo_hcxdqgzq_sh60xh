import { Sparkles, Clock, ShieldCheck, MessageSquare } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 p-[2px]">
        <div className="h-full w-full rounded-[10px] bg-slate-950 grid place-items-center text-white/90">
          <Icon size={18} />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-slate-300/90 text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    {
      icon: Sparkles,
      title: 'On‑brand AI replies',
      desc: 'Tone‑aware responses trained on your past replies and brand voice.'
    },
    {
      icon: Clock,
      title: 'Save 8+ hours/week',
      desc: 'Auto‑drafts in seconds across locations. Approve or auto‑publish.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance & safety',
      desc: 'Built‑in guardrails for sensitive topics and escalation paths.'
    },
    {
      icon: MessageSquare,
      title: 'Multi‑language',
      desc: 'Reply in 50+ languages with correct locale and nuance.'
    }
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to win on Google</h2>
          <p className="mt-3 text-slate-300/90">Replify connects to your Business Profile and handles reviews end‑to‑end.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <Feature key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
