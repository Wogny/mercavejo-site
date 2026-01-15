import { motion } from 'framer-motion';

const clients = [
  { name: 'EXONLINE', logo: '/images/exonline.webp' },
  { name: 'FIDELIDADE', logo: '/images/fidelidade.webp' },
  { name: 'OPTICA', logo: '/images/optica.webp' },
  { name: 'FAVENI', logo: '/images/faveni.webp' },
  { name: 'SUBLIME', logo: '/images/sublime.webp' },
  { name: 'LUCIANA', logo: '/images/luciana.webp' },
  { name: 'RIOFIBRA', logo: '/images/riofibra.webp' },
  { name: 'NETFLEX', logo: '/images/netflex.webp' },
  { name: 'SCOZ', logo: '/images/scoz.webp' },
  { name: 'VOX', logo: '/images/voxfm.webp' },
];

// Duplicar a lista para criar o efeito infinito
const infiniteClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-12 bg-[#0a192f] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-[#d4b67b] tracking-widest uppercase opacity-80">
          Empresas que confiam na Mercavejo
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920], // Ajustar baseado no tamanho total das logos
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {infiniteClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-12 w-40 h-24 transition-all duration-500"
            >
              <div className="w-full h-full flex items-center justify-center p-2">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-80 brightness-0 invert hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    console.error('Erro ao carregar logo:', client.logo);
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradientes nas bordas para suavizar a entrada/saída */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a192f] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a192f] to-transparent z-10" />
      </div>
    </section>
  );
}
