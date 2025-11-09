import { Factory, Leaf, Truck, Globe2, Building2, Settings, ArrowRight, ChevronRight } from 'lucide-react';

export function Capabilities() {
  const items = [
    { icon: Factory, title: 'Engineering Expertise', desc: 'Structural analysis, design review, and quality control for every project.' },
    { icon: Leaf, title: 'Sustainable Materials', desc: 'Low-carbon mixes, recycled aggregates, and full material traceability.' },
    { icon: Truck, title: 'Advanced Logistics', desc: 'Fleet coordination, staging plans, and just-in-time delivery.' },
  ];
  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Capabilities</h2>
          <p className="mt-1 text-sm text-black/70 dark:text-white/70">Core strengths that power your timeline.</p>
        </div>
        <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10">
            <Icon className="h-6 w-6 text-red-600" />
            <h3 className="mt-3 text-lg font-semibold text-black dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductsCarousel() {
  const products = [
    { name: 'Hi Pile', specs: 'High load capacity, pre-tensioned', color: 'from-red-500/10 to-red-500/5' },
    { name: 'Boa', specs: 'Robust performance for marine works', color: 'from-amber-500/10 to-amber-500/5' },
    { name: 'Polyester', specs: 'Composite reinforcement, corrosion-free', color: 'from-emerald-500/10 to-emerald-500/5' },
    { name: 'Customization', specs: 'Tailored dimensions and finishes', color: 'from-blue-500/10 to-blue-500/5' },
  ];
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Products</h2>
          <p className="mt-1 text-sm text-black/70 dark:text-white/70">Explore our product lines and request a quote.</p>
        </div>
        <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
      </div>
      <div className="relative">
        <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4">
          {products.map((p) => (
            <div key={p.name} className="snap-start shrink-0 basis-80 rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/10">
              <div className={`h-28 w-full rounded-xl bg-gradient-to-br ${p.color}`} />
              <h3 className="mt-3 text-lg font-semibold text-black dark:text-white">{p.name}</h3>
              <p className="text-sm text-black/70 dark:text-white/70">{p.specs}</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline">
                Request Quote <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketsAndClients() {
  const clients = ['Acme Infra', 'Zenith Build', 'MetroWorks', 'HarborCo', 'Skyline', 'EuroPile'];
  return (
    <section id="markets" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Export Markets */}
        <div>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Export Markets</h2>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">Southeast Asia, Middle East, Europe</p>
            </div>
            <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10">
              {/* Simplified interactive map placeholder with pulses */}
              <div className="relative h-full w-full">
                {[
                  { top: '30%', left: '60%' },
                  { top: '50%', left: '30%' },
                  { top: '40%', left: '80%' },
                ].map((p, i) => (
                  <span
                    key={i}
                    className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 shadow-md"
                    style={{ top: p.top, left: p.left }}
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-red-600/50" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customers */}
        <div id="customers">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Customers</h2>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">Trusted by industry leaders</p>
            </div>
            <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="flex animate-[marquee_20s_linear_infinite] gap-10 opacity-70 hover:opacity-100 [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
              {clients.concat(clients).map((c, i) => (
                <div key={i} className="shrink-0 text-2xl font-semibold grayscale transition hover:grayscale-0">
                  {c}
                </div>
              ))}
            </div>
            <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactAndFAQ() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Contact form */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Contact</h2>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">Tell us about your project</p>
            </div>
            <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
          </div>
          <form className="grid gap-3 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs text-black/70 dark:text-white/70">Name</label>
                <input className="mt-1 w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:ring-2 focus:ring-red-500 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-xs text-black/70 dark:text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:ring-2 focus:ring-red-500 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="text-xs text-black/70 dark:text-white/70">Phone</label>
                <input className="mt-1 w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:ring-2 focus:ring-red-500 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="+62" />
              </div>
              <div>
                <label className="text-xs text-black/70 dark:text-white/70">Project Details</label>
                <input className="mt-1 w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:ring-2 focus:ring-red-500 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="Location, scope, timeline" />
              </div>
            </div>
            <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700">
              Send Inquiry
            </button>
          </form>
        </div>

        {/* HQ + Admin Glimpse */}
        <div className="grid gap-4">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <h3 className="text-lg font-semibold text-black dark:text-white">Headquarters</h3>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">Jakarta, Indonesia</p>
            <div className="mt-3 text-sm text-black/70 dark:text-white/70">+62 21 555 1234</div>
            <div className="mt-1 text-sm text-black/70 underline dark:text-white/70">hello@putrapile.co.id</div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black dark:text-white">Admin Dashboard (Preview)</h3>
              <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-white/60 p-3 text-sm dark:border-white/10 dark:bg-white/5">Sidebar</div>
              <div className="sm:col-span-2 grid gap-3">
                <div className="rounded-xl border border-black/10 bg-white/60 p-3 text-sm dark:border-white/10 dark:bg-white/5">Content Editor</div>
                <div className="rounded-xl border border-dashed border-black/20 bg-white/40 p-3 text-center text-xs text-black/60 dark:border-white/20 dark:bg-white/5 dark:text-white/60">Drag & Drop Upload Zone</div>
                <input className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:ring-2 focus:ring-red-500 dark:border-white/10 dark:bg-white/5 dark:text-white" placeholder="Admin token" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-14">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">FAQ</h2>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">Common questions answered</p>
          </div>
          <span className="rounded-full bg-black/80 px-2 py-0.5 text-[10px] text-white dark:bg-white/20">CMS</span>
        </div>
        <div className="divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-white/10">
          {[
            { q: 'Do you provide installation services?', a: 'Yes, end-to-end solutions including site supervision and installation.' },
            { q: 'Can you export to my country?', a: 'We ship globally with a focus on Southeast Asia, Middle East, and Europe.' },
            { q: 'What certifications do you hold?', a: 'Our products comply with international standards and local codes.' },
          ].map((f, i) => (
            <details key={i} className="group px-6 py-4 open:bg-white/80">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-black dark:text-white">
                {f.q}
                <ArrowRight className="h-4 w-4 transition group-open:rotate-90" />
              </summary>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white/70 py-10 backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">PT. Putra Pile Indah</div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Premium pile solutions engineered for speed, compliance, and customization.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="#products" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Products</a>
            <a href="#capabilities" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Capabilities</a>
            <a href="#markets" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Markets</a>
            <a href="#customers" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Customers</a>
            <a href="#contact" className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">Contact</a>
          </div>
          <div className="text-sm text-black/60 dark:text-white/60">© {new Date().getFullYear()} PT. Putra Pile Indah. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
