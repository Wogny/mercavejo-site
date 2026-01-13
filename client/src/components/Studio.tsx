import { Button } from '@/components/ui/button';

export default function Studio() {
  const PricingMiniCard = () => (
    <div className="max-w-md mx-auto">
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#00000]/20 via-[#000000]/25 to-transparent">
        <div className="rounded-3xl bg-white/00 backdrop-blur-sm border border-white/1000 shadow-lg">
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wider text-[#00000]/80 uppercase">
                  Tabela de preços
                </p>
                <h3 className="text-xl sm:text-2xl font-display text-[#00000] mt-2">
                  Locação do Estúdio
                </h3>
              </div>

              <div className="shrink-0 text-right">
                <div className="inline-flex items-center rounded-full bg-[gold]/50 px-3 py-1">
                  <span className="text-xs font-semibold text-[#00000]">Popular</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-4xl sm:text-5xl font-display text-white">R$ 400</span>
              <span className="text-sm text-white/80 mb-1">/Hora</span>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li className="flex gap-2">
                <span className="mt-[4px] h-2 w-2 rounded-full bg-[#FFD700]" />
                <span>Iluminação e cenário</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[4px] h-2 w-2 rounded-full bg-[#FFD700]" />
                <span>Captação de áudio</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[4px] h-2 w-2 rounded-full bg-[#FFD700]" />
                <span>Suporte na gravação</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[4px] h-2 w-2 rounded-full bg-[#FFD700]" />
                <span>Gravação via camêras profissionais</span>
              </li>
            </ul>

            <Button
              className="mt-6 w-full bg-gradient-to-r from-[#0F3A7D] to-blue-700 hover:from-[#0a2555] hover:to-blue-900 text-white font-semibold text-sm px-4 py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Solicitar orçamento
            </Button>

            <p className="mt-3 text-xs text-white/70">
              Valores finais e disponibilidade via atendimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="studio"
      className="relative py-20 sm:py-32 bg-[#0F3A7D] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* overlay claro para manter o layout “clean” e legível */}

      {/* Fundo decorativo (mantido) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#0F3A7D]/18 via-blue-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#d4b67b]/22 via-yellow-400/10 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0000]/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#FFD700]" />
            <span className="text-sm font-semibold tracking-wider text-[#FFFFFF]/80 uppercase">
              Produção de podcasts
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display text-[#FFFFFF]">
            Estúdio Mercavejo
          </h2>

          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Conheça nosso estúdio de gravação, monte seu podcast conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <PricingMiniCard />
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#0F3A7D]/18 via-[#d4b67b]/18 to-transparent blur-2xl" />

              <div className="group relative h-80 sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/60">
                <img
                  src="/images/Estúdio.jpg"
                  alt="Estúdio Mercavejo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/18 to-transparent rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
