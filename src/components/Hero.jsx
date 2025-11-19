import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const primary = '#002366'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-12 md:pt-16">
        {/* Minimal top bar */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg" style={{ backgroundColor: primary }} />
            <span className="text-white/90 font-semibold tracking-tight">DeepBlue Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-white/80 hover:text-white transition" href="#offerings">Services</a>
            <a className="text-white/80 hover:text-white transition" href="#tools">Tools</a>
            <a className="text-white/80 hover:text-white transition" href="#cta">Contact</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-20 text-center md:mt-28"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: primary }} />
            <span className="text-xs text-white/70">Web design • Development • SaaS</span>
          </div>
          <h1 className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-white md:text-6xl">
            Cinematic websites and smart SaaS, crafted for growth
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/70">
            We design, build, and launch high‑performance web experiences and companion tools. Simple, elegant, and unmistakably modern.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white shadow-lg transition focus:outline-none"
              style={{ backgroundColor: primary }}
            >
              Start a project
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#tools"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur-md transition hover:text-white hover:ring-white/40"
            >
              Explore our tools
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
