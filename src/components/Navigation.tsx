import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useIsDarkMode } from '@/hooks/useIsDarkMode';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/services', label: 'Servicios' },
    { path: '/portfolio', label: 'Portafolio' },
    { path: '/contact', label: 'Contacto' }
  ];

  const isDark = useIsDarkMode();
  const iconColor = !isScrolled ? 'text-white' : (isDark ? 'text-white' : 'text-primary');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-premium-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <span className={`text-2xl font-display font-bold ${!isScrolled ? 'text-white' : (isDark ? 'text-white' : 'text-primary')}`}>
              Aura<span className="text-gradient">Design</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : isScrolled
                        ? 'text-gray-800 dark:text-white hover:text-accent'
                        : 'text-white hover:text-accent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <ThemeToggle className={iconColor} />
            <Button className="btn-premium ml-4">
              ¡Comienza ahora!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className={iconColor} />
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${iconColor}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${iconColor}`} />
              ) : (
                <Menu className={`h-6 w-6 ${iconColor}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-premium-lg">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-gray-800 dark:text-white hover:text-accent hover:bg-muted/50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4">
                <Button className="btn-premium w-full">
                  ¡Comienza ahora!
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 