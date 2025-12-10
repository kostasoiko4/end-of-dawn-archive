import emblem from '@/assets/band/emblem.png';
import eod8 from '@/assets/band/eod8.jpg';

const Hero = () => {
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
            src={emblem} 
            alt="End of Dawn Emblem" 
            className="w-64 md:w-80 lg:w-96 mx-auto opacity-90 drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))' }}
          />
        </div>

        <h1 className="gothic-title text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in">
          End of Dawn
        </h1>

        <p className="gothic-subtitle text-lg md:text-xl text-silver/70 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Symphonic Gothic Black Metal
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#music" className="btn-gothic">
            Listen Now
          </a>
          <a href="#shows" className="btn-outline-gothic">
            Upcoming Shows
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-silver/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-silver/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
