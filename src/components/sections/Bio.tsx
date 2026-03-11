import { useTranslation } from 'react-i18next';
import eod3 from '@/assets/band/eod3.jpg';

const Bio = () => {
  const { t } = useTranslation();

  return (
    <section id="bio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      
      {/* Purple accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('bio.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={eod3} 
              alt="End of Dawn performing" 
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed font-cormorant">
              <strong className="text-silver">End of Dawn</strong> is a Symphonic/Gothic Black Metal band from Thessaloniki, Greece, formed in 2019. Rooted in a dark and atmospheric musical style, the band crafts intricate compositions that delve into themes of struggle, loss, and existential depths.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-cormorant">
              Their debut album, <strong className="text-primary">Primordial Darkness</strong>, released on November 15, 2024, features 11 haunting tracks that take listeners on a harrowing journey into the shadows of the soul. With its evocative blend of rapid, powerful riffs and symphonic textures, the album draws upon mythological and existential themes, creating an immersive and deeply resonant soundscape.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-cormorant">
              Driven by an unwavering dedication to their art, End of Dawn embraces the raw emotions and stark beauty found within the abyss. As they continue to forge their path, the band remains steadfast in pushing the boundaries of their sound, exploring the profound and the unknown.
            </p>

            <blockquote className="border-l-2 border-primary pl-4 italic text-silver/80 font-cormorant text-xl">
              "{t('bio.quote')}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
