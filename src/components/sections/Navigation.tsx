import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import emblem from '@/assets/band/emblem.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Music', href: '#music' },
  { label: 'Bio', href: '#bio' },
  { label: 'Videos', href: '#videos' },
  { label: 'Lineup', href: '#lineup' },
  { label: 'Discography', href: '#discography' },
  { label: 'Merch', href: '#merch' },
  { label: 'Shows', href: '#shows' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-silver/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={emblem} alt="End of Dawn" className="h-12 w-auto opacity-90" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-silver"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-silver/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-center py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
