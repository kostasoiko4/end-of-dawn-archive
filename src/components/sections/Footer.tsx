import { Instagram, Facebook, Twitter, Youtube, Music } from 'lucide-react';
import emblem from '@/assets/band/emblem.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-silver/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src={emblem} 
            alt="End of Dawn" 
            className="h-20 w-auto opacity-60 mb-6"
          />

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-silver/50 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-silver/50 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-silver/50 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-silver/50 hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-silver/50 hover:text-primary transition-colors" aria-label="Spotify">
              <Music className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              Home
            </a>
            <a href="#music" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              Music
            </a>
            <a href="#shows" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              Shows
            </a>
            <a href="#merch" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              Merch
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-cormorant">
              © {new Date().getFullYear()} End of Dawn. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 font-cormorant">
              In the end, there is no dawn—only eternal darkness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
