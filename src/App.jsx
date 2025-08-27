import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_80%_-10%,rgba(124,58,237,0.18),transparent),radial-gradient(900px_600px_at_-10%_10%,rgba(16,185,129,0.16),transparent)] text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-950 selection:bg-emerald-200/60 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
