import { Home, Building, Palette, Settings, Users, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
              Nuestros <span className="text-accent">Servicios</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Desde el concepto hasta la finalización, ofrecemos servicios integrales de arquitectura y diseño adaptados para dar vida a tu visión.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Diseño Residencial',
                description: 'Casas personalizadas que reflejan tu estilo de vida y personalidad, desde propiedades de lujo hasta viviendas urbanas modernas.',
                features: ['Planos Personalizados', 'Diseño de Interiores', 'Integración de Paisajismo', 'Soluciones de Hogar Inteligente']
              },
              {
                icon: Building,
                title: 'Arquitectura Comercial',
                description: 'Espacios comerciales innovadores que mejoran la productividad y crean experiencias memorables para tus clientes.',
                features: ['Edificios de Oficinas', 'Espacios Comerciales', 'Diseño Hotelero', 'Desarrollos Mixtos']
              },
              {
                icon: Palette,
                title: 'Diseño de Interiores',
                description: 'Transforma tus espacios con nuestros servicios expertos de diseño de interiores que combinan estética con funcionalidad.',
                features: ['Planificación de Espacios', 'Consultoría de Color', 'Selección de Mobiliario', 'Diseño de Iluminación']
              },
              {
                icon: Settings,
                title: 'Gestión de Proyectos',
                description: 'Gestión integral de proyectos asegurando que tu visión se materialice a tiempo y dentro del presupuesto.',
                features: ['Gestión de Cronogramas', 'Control de Presupuesto', 'Aseguramiento de Calidad', 'Coordinación de Proveedores']
              },
              {
                icon: Users,
                title: 'Consultoría de Diseño',
                description: 'Orientación y asesoramiento experto para tus proyectos arquitectónicos y de diseño, grandes o pequeños.',
                features: ['Revisión de Diseño', 'Cumplimiento de Códigos', 'Estudios de Viabilidad', 'Desarrollo de Diseño']
              },
              {
                icon: Lightbulb,
                title: 'Visualización 3D',
                description: 'Da vida a tus proyectos con impresionantes renderizados 3D y experiencias de realidad virtual.',
                features: ['Renderizados Fotorrealistas', 'Recorridos Virtuales', 'Videos Animados', 'Experiencias VR']
              }
            ].map((service, index) => (
              <div key={index} className="card-premium group hover-lift">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="btn-outline-premium w-full">
                  Saber Más
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Nuestro <span className="text-gradient">Proceso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seguimos una metodología probada para asegurar que cada proyecto se entregue con excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Descubrimiento',
                description: 'Comenzamos entendiendo tu visión, necesidades y objetivos a través de una consulta detallada.'
              },
              {
                step: '02',
                title: 'Diseño',
                description: 'Nuestro equipo crea soluciones de diseño innovadoras que se alinean con tus objetivos y presupuesto.'
              },
              {
                step: '03',
                title: 'Desarrollo',
                description: 'Refinamos el diseño a través de iteraciones, asegurando que cada detalle cumpla con tus expectativas.'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Supervisamos la implementación para asegurar una ejecución impecable de tu proyecto.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 