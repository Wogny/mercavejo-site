import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Estúdio', href: '#studio' },
    { label: 'Pacotes', href: '#packages' }, // ✅ ADICIONADO
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#0F3A7D]" />

      <div className="border-b border-white/20 bg-black/20 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Mercavejo"
                className="h-16 w-16 rounded-full object-cover ring-1 ring-white/20"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/85 hover:text-[#d4b67b] font-medium transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                className="bg-[#0F3A7D] hover:bg-[#0a2555] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Fale Conosco
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-6 border-t border-white/20 pt-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setIsMenuOpen(false);
                  }}
                  className="block text-white/85 hover:text-[#d4b67b] font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <Button
                className="w-full bg-[#0F3A7D] hover:bg-[#0a2555] text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Fale Conosco
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
