import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-hero opacity-60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Insignia */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-border mb-8 animate-fade-in-up mt-24">
            <span className="text-sm font-medium text-white">Arquitectura & Diseño de Interiores Premium</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Creamos
            <span className="block text-gradient">Espacios Extraordinarios</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transformamos visiones en obras maestras arquitectónicas que inspiran y elevan la experiencia humana a través de la innovación y la excelencia.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-premium group">
              Explora Nuestro Trabajo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" className="btn-outline-premium">
              <Play className="mr-2 h-5 w-5" />
              Ver Video
            </Button>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { number: '150+', label: 'Proyectos Completados' },
              { number: '12+', label: 'Años de Experiencia' },
              { number: '25+', label: 'Premios Ganados' },
              { number: '98%', label: 'Satisfacción de Clientes' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 