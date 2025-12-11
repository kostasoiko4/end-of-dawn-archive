import { useTranslation } from 'react-i18next';
import logo from '@/assets/band/logo.png';
import eod8 from '@/assets/band/eod8.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${eod8})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Purple Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="animate-float mb-8">
          <img 
            src={logo} 
            alt="End of Dawn Logo" 
            className="w-64 md:w-80 lg:w-96 mx-auto opacity-90 drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))' }}
          />
        </div>

        <p className="gothic-subtitle text-lg md:text-xl text-silver/70 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#music" className="btn-gothic">
            {t('hero.listenNow')}
          </a>
          <a href="#shows" className="btn-outline-gothic">
            {t('hero.pastShows')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
