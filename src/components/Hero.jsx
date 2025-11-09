import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-28" id="hero">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients to preserve readability (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-black/60 dark:via-black/70 dark:to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            Premium Pile Solutions
            <span className="ml-2 rounded-full bg-black/80 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white dark:bg-white/20">CMS</span>
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
            Building Foundations with Precision and Trust
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-black/70 dark:text-white/70">
            PT. Putra Pile Indah delivers high-performance pile systems backed by engineering rigor, sustainable materials, and advanced logistics for projects across the globe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black backdrop-blur hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              Contact Sales <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Layered hero cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Engineering Expertise', desc: 'Design review, simulation, and QC built-in.', color: 'from-red-500/20 to-red-500/10' },
            { title: 'Sustainable Materials', desc: 'Low-carbon options, traceability, compliance.', color: 'from-emerald-500/20 to-emerald-500/10' },
            { title: 'Advanced Logistics', desc: 'On-time delivery with live tracking.', color: 'from-blue-500/20 to-blue-500/10' },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur transition hover:translate-y-[-2px] hover:shadow-xl dark:border-white/10 dark:bg-white/10`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.color}`} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-black dark:text-white">{card.title}</h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">{card.desc}</p>
                <span className="mt-3 inline-block rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
