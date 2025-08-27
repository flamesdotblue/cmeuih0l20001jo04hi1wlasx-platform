function Footer() {
  return (
    <footer className="border-t border-white/30 bg-white/40 py-10 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Echo. Be gentle with yourself.</p>
        <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
          <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="#get-started" className="hover:text-slate-900 dark:hover:text-white">Start Journaling.</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
