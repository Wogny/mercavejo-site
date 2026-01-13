import { Card } from '@/components/ui/card';
import {
  Briefcase,
  Megaphone,
  Palette,
  Video,
  Users,
  Target,
  TrendingUp,
  ShoppingCart,
  Stethoscope,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Consultoria especializada em Marketing',
    description:
      'Diagnóstico e direcionamento estratégico para posicionamento, conteúdo e resultados.',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600',
    placement: 'lg:col-start-4 lg:row-start-1',
  },
  {
    id: 2,
    title: 'Administração das redes sociais',
    description:
      'Gestão completa do perfil: planejamento, calendário editorial, postagem e acompanhamento.',
    icon: Megaphone,
    color: 'from-cyan-500 to-blue-600',
    placement: 'lg:col-start-1 lg:row-start-1',
  },
  {
    id: 9,
    title: 'Marketing na Saúde',
    description:
      'Estratégias para promover serviços, captar e fidelizar pacientes, e divulgar informações médicas. Ideal para hospitais, clínicas, planos de saúde, profissionais de saúde e empresas farmacêuticas.',
    icon: Stethoscope,
    color: 'from-[#d4b67b] to-amber-500',
    featured: true,
    placement: 'lg:col-start-2 lg:col-span-2 lg:row-start-1',
  },
  {
    id: 3,
    title: 'Criação de artes, logotipos e vídeos',
    description:
      'Identidade visual e criativos para campanhas e redes sociais com padrão profissional.',
    icon: Palette,
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 4,
    title: 'Edição e gravação de vídeos profissionais',
    description:
      'Captação e edição com foco em qualidade, ritmo e entrega pronta para redes sociais.',
    icon: Video,
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 5,
    title: 'Consultoria de Vendas',
    description:
      'Ajustes de processo comercial, abordagem e organização para aumentar conversão.',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 6,
    title: 'Configuração e lançamento de campanhas via Google ADS',
    description:
      'Estrutura, configurações e lançamento de campanhas com mensuração e performance.',
    icon: Target,
    color: 'from-yellow-400 to-amber-500',
  },
  {
    id: 7,
    title: 'Tráfego Pago',
    description:
      'Gestão de anúncios para atrair leads e acelerar vendas em múltiplas plataformas.',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 8,
    title: 'Criação de sites (Land Pages, E-commerce)',
    description:
      'Páginas e lojas com foco em conversão, velocidade e experiência do usuário.',
    icon: ShoppingCart,
    color: 'from-indigo-500 to-purple-600',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 bg-[#0F3A7D] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Overlay para manter o texto legível no fundo */}
      <div className="absolute inset-0 bg-black/" />

      {/* conteúdo acima do overlay */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-display text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">
              Oferecemos uma gama completa de soluções para transformar seu negócio e gerar resultados reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = Boolean((service as any).featured);
              const placement = (service as any).placement ?? '';

              // Centralizar os 2 últimos cards (ids 7 e 8) na última linha do desktop (4 colunas)
              const centerLastTwoOnDesktop =
                service.id === 7
                  ? 'lg:col-start-2 lg:col-span-1'
                  : service.id === 8
                    ? 'lg:col-start-3 lg:col-span-1'
                    : '';

              return (
                <div
                  key={service.id}
                  className={`group h-full ${placement} ${centerLastTwoOnDesktop}`}
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <Card
                    className={[
                      'relative h-full p-6 sm:p-8 cursor-pointer transition-all duration-300',
                      // glass + legibilidade
                      'bg-white/10 backdrop-blur-sm border border-white/15 shadow-lg',
                      'hover:bg-white/15 hover:shadow-xl hover:-translate-y-2',
                      isFeatured ? 'ring-1 ring-[#d4b67b]/60 shadow-xl' : '',
                    ].join(' ')}
                  >
                    {isFeatured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-[#d4b67b]/20 text-white border border-[#d4b67b]/30 px-3 py-1 text-xs font-semibold">
                          Destaque
                        </span>
                      </div>
                    )}

                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-heading text-white mb-4">
                      {service.title}
                    </h3>

                    <p className={`text-white/80 text-sm leading-relaxed ${isFeatured ? 'sm:text-base' : ''}`}>
                      {service.description}
                    </p>

                    <div
                      className={[
                        'mt-6 h-1 rounded-full transition-all duration-300',
                        isFeatured ? 'w-16 bg-[#d4b67b] group-hover:w-24' : 'w-8 bg-[#d4b67b] group-hover:w-12',
                      ].join(' ')}
                    />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}
