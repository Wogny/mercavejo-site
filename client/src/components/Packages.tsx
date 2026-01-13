import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pacotesMensais = [
  {
    id: 'start',
    name: 'Pacote de Marketing (Start)',
    description: 'Contrato de 6 meses',
    price: '500',
    period: '/mês',
    features: [
      '2 publicações (imagem + texto) por semana',
      '1 vídeo de 1 a 2 minutos por semana',
      'Gerenciamento das redes sociais',
      'Suporte em horário comercial',
      'Consultoria e planejamento estratégico (presencial/online) 1x ao mês (até 1h)',
    ],
    highlighted: false,
    badge: '',
  },
  {
    id: 'plus',
    name: 'Pacote Plus',
    description: 'Mais popular — contrato de 6 meses',
    price: '800',
    period: '/mês',
    features: [
      '2 publicações (imagem + texto) por semana',
      '2 vídeos de 1 a 2 minutos por semana',
      'Gerenciamento das redes sociais',
      'Tráfego pago (investimento à parte)',
      'Suporte em horário comercial',
      'Consultoria e planejamento estratégico (presencial/online) a cada 15 dias (até 1h)',
    ],
    highlighted: true,
    badge: 'Mais Popular',
  },
  {
    id: 'premium',
    name: 'Pacote Premium',
    description: 'Contrato de 6 meses',
    price: '1.200',
    period: '/mês',
    features: [
      '3 publicações (imagem + texto) por semana',
      '3 vídeos de 1 a 2 minutos por semana',
      'Gerenciamento das redes sociais',
      'Tráfego pago (investimento à parte)',
      'Suporte em horário comercial',
      'Consultoria e planejamento estratégico (presencial/online) toda semana (até 1h)',
    ],
    highlighted: false,
    badge: '',
  },
];

const adicionais = [
  { id: 'landing', servico: 'Criação de landing page profissional', naoCliente: 'R$ 1.500', cliente: '', obs: '(até 3x sem juros)' },
  { id: 'edicao-video', servico: 'Edição de vídeos', naoCliente: 'R$ 150', cliente: 'R$ 70' },
  { id: 'criacao-arte', servico: 'Criação de arte', naoCliente: 'R$ 100', cliente: 'R$ 40' },
  { id: 'pack-artes', servico: '5 artes ou +', naoCliente: 'R$ 60', cliente: 'R$ 30' },
  { id: 'outdoor', servico: 'Arte para outdoor', naoCliente: 'R$ 300', cliente: 'R$ 150' },
  { id: 'trafego', servico: 'Tráfego pago (mensal)', naoCliente: 'R$ 500', cliente: 'R$ 250' },
];

export default function Packages() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="packages"
      className="relative py-20 sm:py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10">
        <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-display text-[#0F3A7D] mb-4">Nossos Pacotes</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Escolha o plano ideal. Temos consultoria avulsa e pacotes mensais.
            </p>
          </div>

          {/* MOBILE: Pacotes mensais */}
          <div className="md:hidden mb-14">
            <div className="grid grid-cols-1 gap-6">
              {pacotesMensais.map((pkg, idx) => {
                const isPlus = pkg.id === 'plus';

                return (
                  <Card
                    key={pkg.id}
                    className={`border border-slate-200 bg-white rounded-2xl shadow-lg overflow-hidden ${
                      isPlus ? 'ring-2 ring-[#d4b67b]/70' : ''
                    }`}
                    style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both` }}
                  >
                    <details className="group" open={isPlus}>
                      <summary className="list-none cursor-pointer select-none px-6 py-4 group-open:py-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            {isPlus ? (
                              <div className="mb-2">
                                <span className="bg-[#d4b67b]/20 text-[#0F3A7D] border border-[#d4b67b]/30 px-3 py-1 rounded-full text-xs font-semibold">
                                  {pkg.badge || 'Mais Popular'}
                                </span>
                              </div>
                            ) : null}

                            <h3 className={`text-lg font-heading ${isPlus ? 'text-[#0F3A7D]' : 'text-[#0F3A7D]'}`}>
                              {pkg.name}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1">{pkg.description}</p>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="flex items-baseline justify-end gap-1">
                              <span className="text-xs text-slate-600">R$</span>
                              <span className={`text-2xl font-bold ${isPlus ? 'text-[#0F3A7D]' : 'text-[#0F3A7D]'}`}>
                                {pkg.price}
                              </span>
                              <span className="text-xs text-slate-600">{pkg.period}</span>
                            </div>

                            <div className="mt-4 text-xs font-semibold text-slate-600">
                              <span className="group-open:hidden underline underline-offset-4 decoration-[#d4b67b] hover:text-[#0F3A7D] transition-colors">
                                Ver detalhes
                              </span>
                              <span className="hidden group-open:inline underline underline-offset-4 decoration-[#d4b67b] text-slate-500 hover:text-[#0F3A7D] transition-colors">
                                Ocultar detalhes
                              </span>
                            </div>
                          </div>
                        </div>
                      </summary>

                      <div className="px-5 pb-5">
                        <div className="border-t border-slate-200 pt-4">
                          <div className="text-sm font-semibold text-[#0F3A7D] mb-3">Serviços inclusos</div>

                          <div className="space-y-2">
                            {pkg.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#d4b67b] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 leading-snug">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5">
                            <Button
                              className={`w-full rounded-lg font-semibold text-sm transition-all duration-300 ${
                                isPlus
                                  ? 'bg-[#d4b67b] hover:bg-[#FFB300] text-[#0F3A7D] shadow-md hover:shadow-lg'
                                  : 'bg-[#0F3A7D] hover:bg-[#0a2555] text-white'
                              }`}
                              onClick={scrollToContact}
                            >
                              Solicitar Orçamento
                            </Button>
                          </div>
                        </div>
                      </div>
                    </details>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* DESKTOP: Pacotes mensais */}
          <div className="hidden md:block mb-14">
            <div className="grid grid-cols-3 gap-6 items-start">
              {pacotesMensais.map((pkg, idx) => {
                const isPlus = pkg.id === 'plus';

                return (
                  <Card
                    key={pkg.id}
                    className={`border border-slate-200 bg-white rounded-2xl shadow-lg overflow-hidden ${
                      isPlus ? 'ring-2 ring-[#d4b67b]/70' : ''
                    }`}
                    style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both` }}
                  >
                    <details className="group" open={isPlus}>
                      <summary className="list-none cursor-pointer select-none px-6 py-4 group-open:py-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            {isPlus ? (
                              <div className="mb-2">
                                <span className="bg-[#d4b67b]/20 text-[#0F3A7D] border border-[#d4b67b]/30 px-3 py-1 rounded-full text-xs font-semibold">
                                  {pkg.badge || 'Mais Popular'}
                                </span>
                              </div>
                            ) : null}

                            <h3 className={`text-lg font-heading ${isPlus ? 'text-[#0F3A7D]' : 'text-[#0F3A7D]'}`}>
                              {pkg.name}
                            </h3>

                            <p className="text-xs text-slate-600 mt-1">{pkg.description}</p>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="flex items-baseline justify-end gap-1">
                              <span className="text-xs text-slate-600">R$</span>
                              <span className={`text-2xl font-bold ${isPlus ? 'text-[#0F3A7D]' : 'text-[#0F3A7D]'}`}>
                                {pkg.price}
                              </span>
                              <span className="text-xs text-slate-600">{pkg.period}</span>
                            </div>

                            <div className="mt-4 text-xs font-semibold text-slate-600">
                              <span className="group-open:hidden underline underline-offset-4 decoration-[#d4b67b] hover:text-[#0F3A7D] transition-colors">
                                Ver detalhes
                              </span>
                              <span className="hidden group-open:inline underline underline-offset-4 decoration-[#d4b67b] text-slate-500 hover:text-[#0F3A7D] transition-colors">
                                Ocultar detalhes
                              </span>
                            </div>
                          </div>
                        </div>
                      </summary>

                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-200 pt-5">
                          <div className="text-sm font-semibold text-[#0F3A7D] mb-3">Serviços inclusos</div>

                          <div className="space-y-2">
                            {pkg.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#d4b67b] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700 leading-snug">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6">
                            <Button
                              className={`w-full rounded-lg font-semibold text-sm transition-all duration-300 ${
                                isPlus
                                  ? 'bg-[#d4b67b] hover:bg-[#FFB300] text-[#0F3A7D] shadow-md hover:shadow-lg'
                                  : 'bg-[#0F3A7D] hover:bg-[#0a2555] text-white'
                              }`}
                              onClick={scrollToContact}
                            >
                              Solicitar Orçamento
                            </Button>
                          </div>
                        </div>
                      </div>
                    </details>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CONSULTORIA (tema claro) */}
          <div className="mb-16">
            {/* Mobile */}
            <div className="md:hidden">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-xl" style={{ animation: 'fadeInUp 0.7s ease-out both' }}>
                  <div className="absolute top-2 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-[#d4b67b]/25 text-[#0F3A7D] border border-[#d4b67b]/30 px-4 py-1 rounded-full text-sm font-semibold shadow-sm whitespace-nowrap sm:whitespace-normal">
                      Atendimento Premium
                    </span>
                  </div>

                  <Card className="relative z-10 p-10 sm:p-12 border border-slate-200 bg-white shadow-lg rounded-2xl">
                    <div className="text-center mb-8">
                      <h3 className="text-4xl sm:text-5xl font-display text-[#0F3A7D] mb-3">
                        Consultoria
                      </h3>
                      <p className="text-slate-600">Atendimento por hora (presencial/online).</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
                        <div className="text-sm text-slate-600 mb-1">Não cliente</div>
                        <div className="text-2xl font-bold text-[#0F3A7D]">R$ 200/h</div>
                      </div>
                      <div className="rounded-xl border border-green-200 p-5 bg-green-50">
                        <div className="text-sm text-slate-600 mb-1">Cliente</div>
                        <div className="text-2xl font-bold text-[green]">R$ 100/h</div>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-lg font-heading text-[#0F3A7D] mb-4">O que está incluso:</h4>
                      <ul className="space-y-3 text-left max-w-xl mx-auto">
                        {[
                          'Diagnóstico do seu marketing e redes sociais',
                          'Direcionamento prático com plano de ação',
                          'Recomendações de conteúdo e anúncios (se aplicável)',
                          'Atendimento presencial ou online',
                        ].map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#d4b67b] flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button
                        className="bg-[#d4b67b] hover:bg-[#FFB300] text-[#0F3A7D] font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                        onClick={scrollToContact}
                      >
                        Solicitar Orçamento
                      </Button>

                      <Button
                        variant="outline"
                        className="border-2 border-[#0F3A7D] text-[#0F3A7D] hover:bg-[#0F3A7D]/5 font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300 w-full"
                        onClick={scrollToContact}
                      >
                        Agendar Horário
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-xl" style={{ animation: 'fadeInUp 0.7s ease-out both' }}>
                  <Card className="border border-slate-200 bg-white shadow-lg rounded-2xl overflow-hidden">
                    <details className="group">
                      <summary className="list-none cursor-pointer select-none px-8 py-8">
                        <div className="flex items-start justify-between gap-6">
                          <div className="min-w-0">
                            <div className="mb-3">
                              <span className="bg-[#d4b67b]/25 text-[#0F3A7D] border border-[#d4b67b]/30 px-4 py-1 rounded-full text-sm font-semibold shadow-sm whitespace-nowrap">
                                Atendimento Premium
                              </span>
                            </div>

                            <h3 className="text-4xl font-display text-[#0F3A7D]">Consultoria</h3>
                            <p className="text-slate-600 mt-2">Atendimento por hora (presencial/online).</p>
                          </div>

                          <div className="shrink-0 text-right">
                            <div className="grid grid-cols-1 gap-2">
                              <div className="rounded-xl border border-slate-200 px-4 py-3 bg-slate-50 text-left">
                                <div className="text-xs text-slate-600">Não cliente</div>
                                <div className="text-lg font-bold text-[#0F3A7D]">R$ 200/h</div>
                              </div>
                              <div className="rounded-xl border border-green-200 px-4 py-3 bg-green-50 text-left">
                                <div className="text-xs text-slate-600">Cliente</div>
                                <div className="text-lg font-bold text-[green]">R$ 100/h</div>
                              </div>
                            </div>

                            <div className="mt-3 text-xs font-semibold text-slate-600">
                              <span className="group-open:hidden underline underline-offset-4 decoration-[#d4b67b] hover:text-[#0F3A7D] transition-colors">
                                Ver detalhes <span className="ml-1 text-[#d4b67b]"></span>
                              </span>
                              <span className="hidden group-open:inline underline underline-offset-4 decoration-[#d4b67b] text-slate-500 hover:text-[#0F3A7D] transition-colors">
                                Ocultar detalhes <span className="ml-1 text-[#d4b67b]"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </summary>

                      <div className="px-8 pb-8">
                        <div className="border-t border-slate-200 pt-6">
                          <div className="mb-10">
                            <h4 className="text-lg font-heading text-[#0F3A7D] mb-4">O que está incluso:</h4>
                            <ul className="space-y-3 text-left max-w-xl mx-auto">
                              {[
                                'Diagnóstico do seu marketing e redes sociais',
                                'Direcionamento prático com plano de ação',
                                'Recomendações de conteúdo e anúncios (se aplicável)',
                                'Atendimento presencial ou online',
                              ].map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                  <Check className="w-5 h-5 text-[#d4b67b] flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <Button
                              className="bg-[#d4b67b] hover:bg-[#FFB300] text-[#0F3A7D] font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                              onClick={scrollToContact}
                            >
                              Solicitar Orçamento
                            </Button>

                            <Button
                              variant="outline"
                              className="border-2 border-[#0F3A7D] text-[#0F3A7D] hover:bg-[#0F3A7D]/5 font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300 w-full"
                              onClick={scrollToContact}
                            >
                              Agendar Horário
                            </Button>
                          </div>
                        </div>
                      </div>
                    </details>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* ADICIONAIS (tema claro + mobile sem scroll lateral) */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
              <div className="mb-6">
                <h3 className="text-xl font-heading text-[#0F3A7D]">Produtos adicionais</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Preços avulsos para serviços complementares.
                </p>
              </div>

              {/* MOBILE (sem scroll lateral): cards */}
              <div className="md:hidden space-y-3">
                {adicionais.map((item) => (
                  <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#d4b67b] flex-shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="font-semibold text-[#0F3A7D]">{item.servico}</div>
                        {item.obs ? <div className="text-xs text-slate-500 mt-1">{item.obs}</div> : null}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                        <div className="text-[11px] text-slate-600">Não cliente</div>
                        <div className="text-sm font-semibold text-[#0F3A7D]">{item.naoCliente}</div>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                        <div className="text-[11px] text-slate-600">Cliente</div>
                        <div className="text-sm font-semibold text-[#0F3A7D]">
                          {item.cliente ? item.cliente : '—'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP (tabela) */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200">
                      <th className="px-5 py-4 text-sm font-semibold text-[#0F3A7D]">Serviço</th>
                      <th className="px-5 py-4 text-sm font-semibold text-[#0F3A7D] whitespace-nowrap">Não cliente</th>
                      <th className="px-5 py-4 text-sm font-semibold text-[#0F3A7D] whitespace-nowrap">Cliente</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200">
                    {adicionais.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#d4b67b] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-[#0F3A7D]">{item.servico}</div>
                              {item.obs ? <div className="text-xs text-slate-500 mt-1">{item.obs}</div> : null}
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center rounded-full bg-[#0F3A7D]/10 text-[#0F3A7D] border border-[#0F3A7D]/15 px-3 py-1 text-sm font-semibold">
                            {item.naoCliente}
                          </span>
                        </td>

                        <td className="px-5 py-4 whitespace-nowrap">
                          {item.cliente ? (
                            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 border border-green-200 px-3 py-1 text-sm font-semibold">
                              {item.cliente}
                            </span>
                          ) : (
                            <span className="text-sm text-slate-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                Obs.: Tráfego pago tem investimento separado conforme campanha.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
