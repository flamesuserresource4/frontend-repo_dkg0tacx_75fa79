import { useState } from 'react';
import { Moon, Sun, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Markets', href: '#markets' },
    { label: 'Customers', href: '#customers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/30 p-3 shadow-lg backdrop-blur-lg dark:border-white/10 dark:bg-white/10">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
              <div className="h-8 w-8 rounded-lg bg-red-600 shadow-inner"></div>
              <span className="text-sm sm:text-base">PT. Putra Pile Indah</span>
              <span className="ml-2 rounded-full bg-black/80 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white dark:bg-white/20">CMS</span>
            </a>

            {/* Center: Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/50 text-black shadow-sm backdrop-blur hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
              >
                <Phone size={16} /> Contact
              </a>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/50 text-black shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="mt-3 grid gap-2 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white/60 px-3 py-2 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white/80 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={toggleTheme}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/60 px-3 py-2 text-sm font-medium text-black shadow-sm hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />} Theme
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
                >
                  <Phone size={16} /> Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
