import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const SEO = ({ 
  title, 
  description, 
  keywords = 'arquitectura, diseño de interiores, diseño residencial, arquitectura comercial, AuraDesign',
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website'
}: SEOProps) => {
  const fullTitle = `${title} | AuraDesign - Arquitectura y Diseño Premium`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AuraDesign" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="AuraDesign" />
      <meta property="og:locale" content="es_MX" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#f59e0b" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AuraDesign",
          "description": "Estudio de arquitectura y diseño de interiores premium",
          "url": "https://auradesign.com",
          "logo": "https://auradesign.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+52-55-1234-5678",
            "contactType": "customer service",
            "areaServed": "MX",
            "availableLanguage": "Spanish"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avenida Diseño 123",
            "addressLocality": "Ciudad de México",
            "addressRegion": "CDMX",
            "postalCode": "01000",
            "addressCountry": "MX"
          }
        })}
      </script>
    </Helmet>
  );
}; 