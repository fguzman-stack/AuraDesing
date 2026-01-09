import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="text-8xl md:text-9xl font-display font-bold text-gradient mb-8">
              404
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Page Not <span className="text-gradient">Found</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring our amazing architectural designs.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/">
                <Button className="btn-premium">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="btn-outline-premium"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
            
            {/* Additional Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Or explore our other pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { path: '/about', label: 'About Us' },
                  { path: '/services', label: 'Services' },
                  { path: '/portfolio', label: 'Portfolio' }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound; 