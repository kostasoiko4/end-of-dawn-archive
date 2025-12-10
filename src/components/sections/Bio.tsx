import eod3 from '@/assets/band/eod3.jpg';

const Bio = () => {
  return (
    <section id="bio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      
      {/* Purple accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          The Legend
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
              Emerging from the eternal twilight, <strong className="text-silver">End of Dawn</strong> was forged in the crucible of darkness, blending the symphonic grandeur of orchestral arrangements with the raw fury of black metal.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-cormorant">
              Founded in the shadows of ancient ruins, the band channels the spirits of forgotten ages through their music. Each composition is a ritual, invoking the primordial forces that dwell between worlds—where light fades and darkness begins its eternal reign.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-cormorant">
              With haunting melodies intertwined with ferocious blast beats, operatic vocals harmonizing with guttural screams, End of Dawn crafts sonic tapestries that transcend the mortal realm. Their live performances are legendary ceremonies, transforming stages into altars of darkness.
            </p>

            <blockquote className="border-l-2 border-primary pl-4 italic text-silver/80 font-cormorant text-xl">
              "In the end, there is no dawn—only the eternal embrace of shadows."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
