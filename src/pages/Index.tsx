import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Inicio"
        description="AuraDesign - Creamos espacios extraordinarios que inspiran y elevan la experiencia humana. Estudio de arquitectura y diseño de interiores premium en México."
        keywords="arquitectura, diseño de interiores, diseño residencial, arquitectura comercial, México, AuraDesign"
      />
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index; 