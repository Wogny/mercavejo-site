import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type PortfolioItem = {
  title: string;
  category: 'Social Media' | 'Design';
  image: string;
};

const portfolioItems: PortfolioItem[] = [
  { title: 'Exonline', category: 'Design', image: '/images/exonline.webp' },
  { title: 'Optica Brasil', category: 'Design', image: '/images/optica.webp' },
  { title: 'Sublime', category: 'Design', image: '/images/sublime.webp' },
  { title: 'Vox Fm', category: 'Design', image: '/images/vox.webp' },
  { title: 'Faveni', category: 'Social Media', image: '/images/faveni.webp' },
  { title: 'Netflex', category: 'Social Media', image: '/images/netflex.webp' },
  { title: 'Rio Fibra', category: 'Social Media', image: '/images/rio fibra.webp' },
  { title: 'Açougue Scoz', category: 'Social Media', image: '/images/scoz.webp' },
];

export default function Portfolio() {
  const [paused, setPaused] = useState(false);
  const [openItem, setOpenItem] = useState<PortfolioItem | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const corridorItems = useMemo(() => portfolioItems.concat(portfolioItems), []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || paused) return;

    const tick = () => {
      const current = scrollerRef.current;
      if (!current) return;

      const half = current.scrollWidth / 2;
      current.scrollLeft += 1;
      if (current.scrollLeft >= half) current.scrollLeft = 0;
    };

    const id = window.setInterval(tick, 25);
    return () => window.clearInterval(id);
  }, [paused, corridorItems]);

  const scrollByCards = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!openItem) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenItem(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openItem]);

  return (
    <section
      id="portfolio"
      className="relative py-20 sm:py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        `}</style>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F3A7D] mb-3">Alguns de nossos clientes</h2>
            <p className="text-base sm:text-lg text-[#0F3A7D] max-w-2xl mx-auto">
              Clientes que confiam no nosso trabalho
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              type="button"
              onClick={() => scrollByCards('left')}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-slate-200 flex items-center justify-center hover:bg-white transition"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-6 h-6 text-[#20447D]" />
            </button>

            <button
              type="button"
              onClick={() => scrollByCards('right')}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-slate-200 flex items-center justify-center hover:bg-white transition"
              aria-label="Avançar"
            >
              <ChevronRight className="w-6 h-6 text-[#20447D]" />
            </button>

            <div ref={scrollerRef} className="no-scrollbar overflow-x-auto">
              <div className="flex gap-2 py-10 whitespace-nowrap">
                {corridorItems.map((item, idx) => (
                  <button
                    key={`${item.title}-${idx}`}
                    type="button"
                    onClick={() => setOpenItem(item)}
                    className="group relative flex-shrink-0 w-72 md:w-80 aspect-[4/5] overflow-hidden bg-black text-left"
                    title={item.title}
                    aria-label={`Abrir ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                    <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex w-fit max-w-full px-4 py-2 rounded-xl bg-black/55 text-white text-sm font-semibold backdrop-blur-md shadow-lg border border-white/15 truncate">
                        {item.title}
                      </span>
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/18 to-transparent rotate-12" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="hidden lg:block text-sm text-[#0F3A7D]">Passe o mouse para pausar e explorar</p>
          </div>

          {/* MODAL */}
          {openItem && (
            <div
              className="fixed inset-0 z-[99999] isolate bg-black/70 md:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-label={`Imagem ampliada: ${openItem.title}`}
              onClick={() => setOpenItem(null)}
            >
              <div
                className="relative z-[100000] w-full md:max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* MOBILE (igual ao original) */}
                <div className="md:hidden relative">
                  <img
                    src={openItem.image}
                    alt={openItem.title}
                    loading="lazy"
                    className="block w-auto h-auto max-w-[92vw] max-h-[90vh]"
                  />

                  <button
                    type="button"
                    onClick={() => setOpenItem(null)}
                    className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
                    aria-label="Fechar"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* DESKTOP (centralizado + X grudado na imagem) */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative inline-block">
                    <button
                      type="button"
                      onClick={() => setOpenItem(null)}
                      className="absolute top-3 right-3 z-[10000] h-11 w-11 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition"
                      aria-label="Fechar"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <img
                      src={openItem.image}
                      alt={openItem.title}
                      loading="lazy"
                      className="block max-w-[92vw] max-h-[80vh] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
