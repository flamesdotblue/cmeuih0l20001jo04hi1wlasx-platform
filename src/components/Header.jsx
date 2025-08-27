import { motion } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400/70 to-violet-500/70 shadow-inner shadow-emerald-300/30 ring-1 ring-white/40" />
    <span
      className="text-2xl tracking-tight"
      style={{
        fontFamily:
          'ui-rounded, "Segoe Script", "Bradley Hand", "Lucida Handwriting", cursive',
      }}
    >
      Echo
    </span>
  </div>
);

function Header() {
  return (
    <header className="sticky top-0 z-40">
      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 p-3 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/40">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          </nav>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-400 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:scale-[0.99]"
          >
            Start Journaling.
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
