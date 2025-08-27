import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, LineChart, NotebookPen } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay }}
    className="group rounded-3xl border border-white/20 bg-white/60 p-6 backdrop-blur-md shadow-sm hover:shadow-md transition dark:border-white/10 dark:bg-slate-900/40"
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/80 to-violet-500/80 text-white shadow">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-slate-600 dark:text-slate-300">{desc}</p>
  </motion.div>
);

function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">Softly powerful features</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Gentle guidance that meets you where you are. No streaks. No pressure. Just space to notice.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={NotebookPen}
            title="Voice-first journaling"
            desc="Capture thoughts in seconds. Speak naturally — Echo cleans up filler words and transcribes for you."
            delay={0.05}
          />
          <FeatureCard
            icon={LineChart}
            title="Emotional patterns"
            desc="See gentle trends over time: mood shifts, energy levels, and recurring themes in your reflections."
            delay={0.1}
          />
          <FeatureCard
            icon={Sparkles}
            title="Kind nudges"
            desc="Thoughtful prompts, never pushy. Echo suggests reflections when it feels helpful, not intrusive."
            delay={0.15}
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Private by default"
            desc="Your voice belongs to you. Local-first options and end-to-end encryption for peace of mind."
            delay={0.2}
          />
        </div>
        <div id="privacy" className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/20 bg-white/60 p-5 text-center backdrop-blur-md dark:border-white/10 dark:bg-slate-900/40">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Echo never sells your data. You control what stays on-device and what you sync across devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
