import { Award, Users, Target, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Sección Hero */}
      <section className="pt-32 pb-20 bg-gradient-primary text-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
              Nuestra <span className="text-accent">Historia</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Fundada en la creencia de que el diseño excepcional transforma vidas, AuraDesign ha creado obras maestras arquitectónicas por más de 15 años.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excelencia',
                description: 'Buscamos la perfección en cada detalle, superando siempre las expectativas.'
              },
              {
                icon: Users,
                title: 'Colaboración',
                description: 'Trabajamos de la mano con nuestros clientes para hacer realidad su visión.'
              },
              {
                icon: Target,
                title: 'Innovación',
                description: 'Adoptamos tendencias de diseño vanguardistas y prácticas sostenibles.'
              },
              {
                icon: Heart,
                title: 'Pasión',
                description: 'Nuestro amor por el diseño nos impulsa a crear espacios que inspiran y emocionan.'
              }
            ].map((value, index) => (
              <div key={index} className="card-premium text-center bg-card">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Equipo */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Conoce a Nuestro <span className="text-gradient">Equipo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestro apasionado equipo de arquitectos y diseñadores aporta décadas de experiencia a cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Arquitecta Principal',
                bio: 'Con más de 20 años de experiencia, Sarah lidera nuestra visión de diseño con gran reconocimiento.'
              },
              {
                name: 'David Chen',
                role: 'Diseñador de Interiores Senior',
                bio: 'David se especializa en crear espacios armónicos que combinan funcionalidad y belleza.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Directora de Proyectos',
                bio: 'Emily asegura que cada proyecto se entregue a tiempo y supere las expectativas del cliente.'
              }
            ].map((member, index) => (
              <div key={index} className="card-premium text-center bg-card">
                <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 