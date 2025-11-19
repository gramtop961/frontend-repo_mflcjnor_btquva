import { motion } from 'framer-motion'

const primary = '#002366'

const items = [
  {
    title: 'Brand & UI Design',
    desc: 'Clean, modern interfaces with a cinematic feel and a focus on clarity.',
  },
  {
    title: 'Web Development',
    desc: 'Fast, accessible websites built with contemporary frameworks and patterns.',
  },
  {
    title: 'SaaS Incubation',
    desc: 'We build and maintain lightweight tools that streamline your workflow.',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">What we do</h2>
        <div className="hidden md:block h-px flex-1 mx-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2))' }} />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl" style={{ backgroundColor: primary }} />
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm text-white/70">{card.desc}</p>
            <div className="mt-6 flex items-center text-xs font-medium text-white/70">
              Learn more
              <svg className="ml-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
