import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Youtube, Music } from 'lucide-react';
import logo from '@/assets/band/logo.png';

// Apple Music icon
const AppleMusicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.577-2.045-1.514-.2-.715.022-1.61.943-2.118.398-.22.833-.34 1.28-.437.47-.104.944-.184 1.407-.32.256-.075.476-.198.6-.456.04-.085.065-.178.065-.27V8.36c0-.123-.033-.18-.153-.18l-4.943.93v7.554c0 .413-.06.82-.246 1.198-.29.587-.758.96-1.388 1.138-.353.1-.71.16-1.075.172-.96.036-1.755-.6-2.027-1.467-.253-.803.064-1.81 1.023-2.238.387-.173.79-.29 1.2-.387.5-.118 1.006-.202 1.488-.368.274-.095.508-.243.623-.53.028-.065.045-.137.045-.207V5.664c0-.17.027-.334.075-.493.083-.276.257-.478.51-.618.154-.086.32-.14.49-.17L19.2 3.28c.083-.014.17-.022.255-.022.377 0 .612.222.612.61v6.245z"/>
  </svg>
);

// Bandcamp icon
const BandcampIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-charcoal border-t border-silver/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src={logo} 
            alt="End of Dawn" 
            className="h-20 w-auto opacity-60 mb-6 invert"
          />

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a 
              href="https://www.instagram.com/endofdawnofficial/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-primary transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/endofdawnofficial/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-primary transition-colors" 
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@EndofDawn.official" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-primary transition-colors" 
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://open.spotify.com/artist/03GS0Jd0J7nEJv1Ra3idkS" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-primary transition-colors" 
              aria-label="Spotify"
            >
              <Music className="w-5 h-5" />
            </a>
            <a 
              href="https://music.apple.com/us/artist/end-of-dawn/1738951985" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-primary transition-colors" 
              aria-label="Apple Music"
            >
              <AppleMusicIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://endofdawn.bandcamp.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/50 hover:text-primary transition-colors" 
              aria-label="Bandcamp"
            >
              <BandcampIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              {t('nav.home')}
            </a>
            <a href="#music" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              {t('nav.music')}
            </a>
            <a href="#shows" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              {t('nav.shows')}
            </a>
            <a href="#merch" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              {t('nav.merch')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-silver text-sm font-cormorant transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-cormorant">
              © {new Date().getFullYear()} End of Dawn. {t('footer.rights')}
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 font-cormorant">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
