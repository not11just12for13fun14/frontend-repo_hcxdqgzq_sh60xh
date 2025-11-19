function Testimonials() {
  const items = [
    {
      name: 'Ava @ BlueBird Cafe',
      quote: 'We reply to every review in minutes now. Our rating jumped from 4.2 to 4.7 in 6 weeks.',
    },
    {
      name: 'Diego @ Urban Dental',
      quote: 'Replify sounds exactly like us — and catches sensitive cases for the team to handle.',
    },
    {
      name: 'Mina @ BrightGym',
      quote: 'Saved our manager 10 hours/month. Customers love the thoughtful responses.',
    },
  ]

  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {items.map((t) => (
              <div key={t.name} className="rounded-xl border border-white/10 bg-slate-950 p-6">
                <p className="text-slate-200">“{t.quote}”</p>
                <p className="mt-4 text-sm text-slate-400">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
