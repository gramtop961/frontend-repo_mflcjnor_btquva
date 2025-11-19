import { motion } from 'framer-motion'

const primary = '#002366'

const tools = [
  {
    name: 'Pulse Analytics',
    desc: 'Privacy‑friendly traffic insights with simple setup.',
    tag: 'SaaS Tool'
  },
  {
    name: 'Canvas CMS',
    desc: 'Markdown‑first content with instant previews.',
    tag: 'SaaS Tool'
  },
  {
    name: 'FormFlow',
    desc: 'Serverless forms: no backend needed, just submit.',
    tag: 'SaaS Tool'
  }
]

export default function Tools() {
  return (
    <section id="tools" className="relative mx-auto max-w-6xl px-6 pb-12 md:pb-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Our lightweight tools</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 -top-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }} />
            <span className="mb-3 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white/80 ring-1 ring-white/20">{t.tag}</span>
            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
            <p className="mt-2 text-sm text-white/70">{t.desc}</p>
            <button
              className="mt-5 inline-flex items-center rounded-lg px-3 py-2 text-xs font-medium text-white transition"
              style={{ backgroundColor: primary }}
            >
              Try it
              <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
