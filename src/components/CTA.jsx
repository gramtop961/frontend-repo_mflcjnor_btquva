const primary = '#002366'

export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Have an idea? Let’s make it tangible.</h3>
            <p className="mt-2 text-white/70">Tell us about your goals and we’ll propose a clear, simple plan—design, development, and launch.</p>
          </div>
          <a
            href="mailto:hello@deepblue.studio?subject=Project%20Inquiry"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white shadow-lg transition"
            style={{ backgroundColor: primary }}
          >
            Book a discovery call
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-white/40">We typically reply within one business day.</p>
    </section>
  )
}
