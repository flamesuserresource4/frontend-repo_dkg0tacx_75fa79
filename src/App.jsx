import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Capabilities, ProductsCarousel, MarketsAndClients, ContactAndFAQ, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white/80 text-black dark:from-black dark:to-zinc-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <ProductsCarousel />
        <MarketsAndClients />
        <ContactAndFAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
