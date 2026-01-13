import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "Em quanto tempo começarei a ver os primeiros resultados?",
    answer: "O tempo varia conforme o serviço. Campanhas de Tráfego Pago (Google/Meta Ads) podem gerar leads nos primeiros dias, enquanto estratégias de SEO e conteúdo levam de 3 a 6 meses para maturação sólida."
  },
  {
    id: "item-2",
    question: "Vocês atendem empresas de qualquer segmento ou tamanho?",
    answer: "Atendemos desde profissionais liberais e clínicas de saúde até empresas de médio porte. Nossa metodologia é adaptável para diferentes nichos, focando sempre no público-alvo específico do seu negócio."
  },
  {
    id: "item-3",
    question: "Como acompanho o desempenho das minhas campanhas?",
    answer: "Transparência é nossa prioridade. Você receberá relatórios mensais detalhados e terá reuniões de alinhamento para entender exatamente onde seu investimento está sendo aplicado e qual o retorno gerado."
  },
  {
    id: "item-4",
    question: "Preciso ter um site pronto para começar a anunciar?",
    answer: "Não necessariamente. Se você não tiver um site, nós podemos desenvolver uma Landing Page de alta conversão focada exclusivamente em transformar visitantes em clientes."
  },
  {
    id: "item-5",
    question: "Qual o investimento mínimo recomendado para tráfego pago?",
    answer: "O investimento depende dos seus objetivos e da concorrência do seu nicho. Durante nossa consultoria inicial, analisamos seu mercado e sugerimos um valor que seja sustentável e traga resultados reais."
  },
  {
    id: "item-6",
    question: "Como funciona o suporte após a contratação?",
    answer: "Você terá um canal direto de comunicação conosco via WhatsApp e e-mail. Não somos apenas prestadores de serviço, somos parceiros estratégicos do seu crescimento."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-32 bg-[#20447D] text-white z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-white/80">
            Tire suas principais dúvidas sobre como a Mercavejo pode ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-[#d4b67b] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
