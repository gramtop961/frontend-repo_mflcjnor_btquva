import Hero from './components/Hero'
import Offerings from './components/Offerings'
import Tools from './components/Tools'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #00236655, transparent 60%)' }} />
        <div className="absolute -right-10 top-72 h-72 w-72 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #4c51bf55, transparent 60%)' }} />
      </div>

      <Hero />
      <Offerings />
      <Tools />
      <CTA />

      <footer className="mx-auto max-w-6xl px-6 py-10 text-white/50 text-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DeepBlue Studio. All rights reserved.</p>
          <p className="text-white/40">Design + code with intention.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
