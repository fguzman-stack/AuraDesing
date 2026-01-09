import { useState } from 'react';
import { Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Residencial', 'Comercial', 'Interior', 'Hotelero'];

  const projects = [
    {
      id: 1,
      title: 'Villa Moderna de Retiro',
      category: 'Residencial',
      location: 'Beverly Hills, CA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      description: 'Una impresionante villa moderna con líneas limpias y diseño sostenible.'
    },
    {
      id: 2,
      title: 'Sede Corporativa',
      category: 'Comercial',
      location: 'Manhattan, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'Espacio de oficina contemporáneo diseñado para la colaboración e innovación.'
    },
    {
      id: 3,
      title: 'Penthouse de Lujo',
      category: 'Interior',
      location: 'Miami, FL',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      description: 'Diseño de interiores sofisticado con vistas panorámicas de la ciudad.'
    },
    {
      id: 4,
      title: 'Hotel Boutique',
      category: 'Hotelero',
      location: 'Napa Valley, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      description: 'Diseño de hotel íntimo que combina lujo con el entorno natural.'
    },
    {
      id: 5,
      title: 'Casa Urbana',
      category: 'Residencial',
      location: 'Brooklyn, NY',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Casa contemporánea que maximiza el espacio en un entorno urbano.'
    },
    {
      id: 6,
      title: 'Campus Tecnológico',
      category: 'Comercial',
      location: 'Austin, TX',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Espacio de trabajo enfocado en la innovación con elementos de diseño biofílico.'
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Nuestro <span className="text-gradient">Portafolio</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explora nuestra colección de proyectos arquitectónicos y de diseño galardonados 
              que muestran nuestro compromiso con la excelencia y la innovación.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "btn-premium" : "btn-outline-premium"}
              >
                <Filter className="mr-2 h-4 w-4" />
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group cursor-pointer animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-premium overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="btn-premium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-2">
                      {project.location}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ¿Listo para Comenzar tu <span className="text-gradient">Proyecto</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Colaboremos para crear algo extraordinario que refleje tu visión y supere tus expectativas.
          </p>
          <Button className="btn-premium text-lg px-12 py-4" asChild>
            <a href="/contact">Contáctanos</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio; 