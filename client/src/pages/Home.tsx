import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Studio from '@/components/Studio';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        {/* 1 - branco */}
        <div className="bg-white">
          <Hero />
        </div>

        {/* 2 - azul (novo azul #20447D) */}
        <div className="bg-[#20447D] text-white">
          <Services />
        </div>

        {/* 3 - azul (novo azul #20447D) */}
        <div className="bg-[#20447D] text-white">
          <Portfolio />
        </div>

        {/* 4 - azul (novo azul #20447D) */}
        <div className="bg-[#20447D] text-white">
          <Studio />
        </div>

        {/* 5 - azul (novo azul #20447D) */}
        <div className="bg-[#20447D] text-white">
          <Packages />
        </div>

        {/* 6 - FAQ */}
        <FAQ />

        {/* 7 - Contato (Fundo Branco) */}
        <div className="bg-white">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
