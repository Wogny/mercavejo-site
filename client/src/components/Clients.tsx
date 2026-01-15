import { motion } from 'framer-motion';

const clients = [
  { name: 'EXONLINE', logo: '/images/exonline.webp' },
  { name: 'FIDELIDADE', logo: '/images/branco.webp' }, // Assumindo que branco.webp é a logo fidelidade ou similar
  { name: 'OPTICA', logo: '/images/optica.webp' },
  { name: 'FAVENI', logo: '/images/faveni.webp' },
  { name: 'SUBLIME', logo: '/images/sublime.webp' },
  { name: 'LUCIANA', logo: '/images/logo.webp' }, // Usando logo.webp como fallback se luciana não existir
  { name: 'RIOFIBRA', logo: '/images/rio fibra.webp' },
  { name: 'NETFLEX', logo: '/images/netflex.webp' },
];

// Duplicar a lista para criar o efeito infinito
const infiniteClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-[#0F3A7D]/60 tracking-widest uppercase">
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
              className="flex items-center justify-center mx-12 w-32 h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradientes nas bordas para suavizar a entrada/saída */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
