import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useContactForm } from '@/hooks/useContactForm';

const Contact = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estamos aquí para transformar tu visión en realidad. 
              Conversemos sobre tu próximo proyecto extraordinario.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Conversemos sobre tu <span className="text-gradient">Proyecto</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nuestro equipo de expertos está listo para escuchar tus ideas y ayudarte a crear 
                  espacios que reflejen tu visión y superen tus expectativas.
                </p>
              </div>

              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nuestra Oficina</h3>
                    <p className="text-muted-foreground">
                      Avenida Diseño 123<br />
                      Distrito Creativo<br />
                      Ciudad de México, CDMX 01000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                    <p className="text-muted-foreground">
                      +52 (55) 1234-5678<br />
                      +52 (55) 1234-5679
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      hola@auradesign.com<br />
                      proyectos@auradesign.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horarios de Atención</h3>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="card-premium p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold">Envíanos un Mensaje</h3>
                  <p className="text-muted-foreground">Cuéntanos sobre tu proyecto</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="+52 (55) 1234-5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Proyecto</label>
                    <select 
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="residencial">Diseño Residencial</option>
                      <option value="comercial">Arquitectura Comercial</option>
                      <option value="interior">Diseño de Interiores</option>
                      <option value="hotelero">Diseño Hotelero</option>
                      <option value="consultoria">Consultoría</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Presupuesto Estimado</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="menos-100k">Menos de $100,000 MXN</option>
                    <option value="100k-500k">$100,000 - $500,000 MXN</option>
                    <option value="500k-1m">$500,000 - $1,000,000 MXN</option>
                    <option value="mas-1m">Más de $1,000,000 MXN</option>
                    <option value="por-definir">Por definir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Descripción del Proyecto</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, tus ideas, necesidades y cualquier detalle que consideres importante..."
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="btn-premium w-full group">
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa o Información Adicional */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Encuéntranos en el <span className="text-gradient">Distrito Creativo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestra oficina está ubicada en el corazón del distrito creativo de la Ciudad de México, 
              donde la innovación y el diseño se encuentran.
            </p>
          </div>
          
          {/* Placeholder para mapa */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  Mapa interactivo de ubicación
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Avenida Diseño 123, Distrito Creativo, CDMX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 