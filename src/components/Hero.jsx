import { motion } from 'framer-motion';
import { Mic, Waves } from 'lucide-react';

const MicVisualizer = () => {
  const bars = Array.from({ length: 24 });
  return (
    <div className="relative mx-auto mt-6 w-full max-w-xl rounded-3xl border border-white/20 bg-white/70 p-6 backdrop-blur-md shadow-lg dark:border-white/10 dark:bg-slate-900/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Today</p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">“Feeling lighter after a long walk.”</p>
        </div>
        <button
          type="button"
          aria-label="Record voice note"
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-violet-500 text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <span className="absolute -inset-1 rounded-3xl bg-emerald-400/20 blur-md group-hover:bg-emerald-400/30" />
          <Mic className="relative z-10" />
        </button>
      </div>
      <div className="mt-6">
        <div className="flex items-end gap-1 overflow-hidden rounded-xl bg-gradient-to-b from-slate-50/80 to-white/50 p-3 ring-1 ring-white/40 dark:from-slate-800/60 dark:to-slate-900/30 dark:ring-white/10">
          {bars.map((_, i) => (
            <motion.span
              key={i}
              className="w-2 shrink-0 rounded-full bg-gradient-to-t from-emerald-400/80 to-violet-500/80"
              initial={{ height: 6 + (i % 5) * 6 }}
              animate={{ height: [12, 26, 10, 22, 14, 28, 12] }}
              transition={{ duration: 2 + (i % 5) * 0.1, repeat: Infinity, repeatType: 'mirror', delay: i * 0.05 }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Waves className="h-4 w-4" />
          Echo is listening — speak your thoughts.
        </div>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[40%] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
              A calmer way to reflect with
              <span
                className="ml-2 text-5xl sm:text-6xl md:text-7xl"
                style={{
                  fontFamily:
                    'ui-rounded, "Segoe Script", "Bradley Hand", "Lucida Handwriting", cursive',
                }}
              >
                Echo
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Echo helps you track emotional patterns and daily reflections through effortless voice notes. Speak freely, and let calm insights emerge over time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4" id="get-started">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-violet-500 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:scale-[0.99]"
              >
                Start Journaling.
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300/60 bg-white/60 px-6 py-3 text-base font-medium text-slate-700 backdrop-blur-md transition hover:border-slate-400 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <MicVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
