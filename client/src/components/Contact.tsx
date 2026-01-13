import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

type ContactReason = 'Orçamento' | 'Suporte' | 'Parceria' | 'Outros';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: 'Orçamento' as ContactReason,
  });

  const canSubmit = useMemo(() => {
    const nameOk = form.name.trim().length >= 2;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const reasonOk = !!form.reason;
    return nameOk && emailOk && reasonOk && !isSubmitting;
  }, [form, isSubmitting]);

  // WhatsApp (número + mensagem pronta)
  const whatsappPhone = '5517996240418';
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site e gostaria de um orçamento.');
  const whatsappHref = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) {
      toast.error('Preencha nome e email corretamente.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Aqui você conecta com sua API / email service / webhook (ex: Resend, EmailJS, Zapier, Make)
      await new Promise((resolve) => setTimeout(resolve, 500));

      toast.success('Contato enviado com sucesso! Em breve retornaremos.');
      setForm({ name: '', email: '', reason: 'Orçamento' });
    } catch (err) {
      toast.error('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/foto ia 2.png')" }}
    >
      {/* se precisar de contraste pro texto por cima, use um overlay escuro leve */}
      {/* <div className="absolute inset-0 bg-black/55" /> */}


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-90 rounded-[28px] bg-gradient-to-br from-[#6A5ACD]/10 via-[#6A5ACD]/12 to-transparent blur-2xl" />

            <Card className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LADO ESQUERDO (FORMULÁRIO) */}
                <div className="bg-white p-8 sm:p-10">
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-display text-[#0F3A7D] mb-3">
                      Entre em contato conosco
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Estamos prontos para ajudar seu negócio a crescer. Entre em contato conosco e
                      descubra como podemos transformar sua estratégia de marketing.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white p-5 sm:p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Nome */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Nome</label>
                        <input
                          value={form.name}
                          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3A7D] focus:ring-2 focus:ring-[#0F3A7D]/20 outline-none transition-all duration-300"
                          placeholder="Seu nome"
                          autoComplete="name"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Email</label>
                        <input
                          value={form.email}
                          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3A7D] focus:ring-2 focus:ring-[#0F3A7D]/20 outline-none transition-all duration-300"
                          placeholder="seuemail@exemplo.com"
                          autoComplete="email"
                          inputMode="email"
                        />
                      </div>

                      {/* Motivo */}
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Motivo de contato</label>
                        <select
                          value={form.reason}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, reason: e.target.value as ContactReason }))
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6A5ACD] focus:ring-2 focus:ring-[#0F3A7D]/20 outline-none transition-all duration-300 bg-white"
                        >
                          <option value="Orçamento">Orçamento</option>
                          <option value="Suporte">Suporte</option>
                          <option value="Parceria">Parceria</option>
                          <option value="Outros">Outros</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        disabled={!canSubmit}
                        className="w-full bg-[#d4b67b] hover:bg-[#6A5ACD] text-[#0F3A7D] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-3"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-[#6A5ACD] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <span className="inline-flex items-center gap-2">
                            Enviar <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500">
                        Ao enviar, sua solicitação será direcionada para a equipe.
                      </p>
                    </form>
                  </div>
                </div>

                {/* LADO DIREITO (painel colorido com infos) */}
                <div className="relative p-8 sm:p-10 text-white bg-gradient-to-br from-[#0F3A7D] via-[#0F3A7D] to-[#0a2555]">
                  <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(212,182,123,0.35),transparent_55%)]" />

                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-display mb-2">Mercavejo</h3>
                    <p className="text-white/85 mb-8">
                      Envie sua mensagem e a equipe retorna o mais rápido possível.
                    </p>

                    <div className="space-y-4">
                      {/* Telefone */}
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#d4b67b] text-[#0F3A7D]">
                              <Phone className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-heading">Telefone</div>
                            <a
                              href="tel:+551799624-0418"
                              className="text-white/85 hover:text-white transition-colors"
                            >
                              +55 (17) 99624-0418
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#d4b67b] text-[#0F3A7D]">
                              <Mail className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-heading">Email</div>
                            <a
                              href="mailto:clubemercavejo@gmail.com"
                              className="text-white/85 hover:text-white transition-colors break-all"
                            >
                              clubemercavejo@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Localização */}
                      <div className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#d4b67b] text-[#0F3A7D]">
                              <MapPin className="h-6 w-6" />
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-heading">Localização</div>
                            <div className="text-white/85">Catanduva, SP</div>
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir conversa no WhatsApp"
                        className="block group rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur-sm hover:bg-white/15 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#d4b67b] text-[#0F3A7D]">
                              <MessageCircle className="h-6 w-6" />
                            </div>
                          </div>

                          <div className="min-w-0">
                            <div className="text-lg font-heading">WhatsApp</div>
                            <div className="text-white/85 group-hover:text-white transition-colors break-all">
                              Clique para conversar
                            </div>
                            <div className="text-xs text-white/70 mt-1">Mensagem pronta ao abrir.</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="mt-8 text-sm text-white/75">Atendimento em horário comercial.</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
