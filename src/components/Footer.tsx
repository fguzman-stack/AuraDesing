import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Información de la empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-2xl font-display font-bold">
                Aura<span className="text-gradient">Design</span>
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Creamos obras maestras arquitectónicas extraordinarias que inspiran y elevan la experiencia humana a través de la innovación y la excelencia.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <Button key={index} size="icon" variant="ghost" className="hover:bg-accent/20 text-white hover:text-accent">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Servicios</h3>
            <ul className="space-y-3">
              {[
                'Diseño Residencial',
                'Arquitectura Comercial',
                'Diseño de Interiores',
                'Gestión de Proyectos',
                'Consultoría',
                'Visualización 3D'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                'Nosotros',
                'Portafolio',
                'Proceso',
                'Premios',
                'Carreras',
                'Blog'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  Avenida Diseño 123<br />
                  Distrito Creativo<br />
                  Ciudad de México, CDMX 01000
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-accent transition-colors duration-300">
                  +52 (55) 1234-5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:hola@auradesign.com" className="text-white/80 hover:text-accent transition-colors duration-300">
                  hola@auradesign.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 AuraDesign. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">
              Términos de Servicio
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors duration-300">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 