import eod1 from '@/assets/band/eod1.jpg';
import eod2 from '@/assets/band/eod2.jpg';

const members = [
  {
    name: 'Nyx Shadowborne',
    role: 'Vocals',
    image: eod1,
    instrument: 'Lead & Operatic Vocals',
  },
  {
    name: 'Ravenna Dusk',
    role: 'Lead Guitar',
    image: eod2,
    instrument: '7-String Guitar, Synth',
  },
  {
    name: 'Grimoire',
    role: 'Bass & Clean Vocals',
    image: null,
    instrument: 'Bass Guitar',
  },
  {
    name: 'The Masked One',
    role: 'Rhythm Guitar & Backing Vocals',
    image: null,
    instrument: '6-String Guitar',
  },
  {
    name: 'Void',
    role: 'Drums',
    image: null,
    instrument: 'Drums & Percussion',
  },
];

const Lineup = () => {
  return (
    <section id="lineup" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          The Lineup
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {members.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 silver-border bg-charcoal-light">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl text-silver/20 font-gothic">
                      {member.name[0]}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </div>

              <h3 className="font-cinzel text-silver text-sm md:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-xs md:text-sm font-cinzel tracking-wider">
                {member.role}
              </p>
              <p className="text-muted-foreground text-xs mt-1 font-cormorant">
                {member.instrument}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
