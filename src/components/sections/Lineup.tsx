import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { X } from 'lucide-react';
import gravekeeper from '@/assets/band/lineup/gravekeeper.jpg';
import mynoghra from '@/assets/band/lineup/mynoghra.jpg';
import necro from '@/assets/band/lineup/necro.jpg';
import yb from '@/assets/band/lineup/yb.jpg';
import absence from '@/assets/band/lineup/absence.jpg';
import akhenaken from '@/assets/band/lineup/akhenaken.jpg';
import necrohymn from '@/assets/band/lineup/necrohymn.jpg';

// Map image keys to imported assets
const imageMap: Record<string, string> = {
  necro, mynoghra, absence, gravekeeper, necrohymn, akhenaten: akhenaken, yb,
};

const Lineup = () => {
  const { t } = useTranslation();
  const members = useSelector((state: RootState) => state.content.lineup);
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

  const getImage = (member: typeof members[0]) => {
    // If image is a URL, use it directly; otherwise look up in imageMap
    if (member.image.startsWith('http') || member.image.startsWith('/') || member.image.startsWith('data:')) {
      return member.image;
    }
    return imageMap[member.image.toLowerCase()] || '';
  };

  return (
    <section id="lineup" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-dark/20 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('lineup.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <div 
              key={member.name} 
              className="group cursor-pointer w-40 sm:w-48 md:w-56 lg:w-64"
              onClick={() => setSelectedMember(member)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden silver-border bg-charcoal-light transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <img 
                  src={getImage(member)} 
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-cinzel text-silver text-base md:text-lg font-semibold drop-shadow-lg">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm md:text-base font-cinzel tracking-wider drop-shadow-lg">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 font-cormorant opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.instrument}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected member */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-charcoal rounded-xl silver-border overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal-light/80 flex items-center justify-center text-silver hover:text-primary hover:bg-charcoal transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/2 aspect-[3/4] md:aspect-auto">
                <img 
                  src={getImage(selectedMember)} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-charcoal via-transparent to-transparent" />
              </div>
              
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="gothic-title text-2xl md:text-3xl mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-primary font-cinzel text-lg tracking-widest mb-4">
                  {selectedMember.role}
                </p>
                <div className="section-divider mb-4" />
                <p className="text-muted-foreground font-cormorant text-base mb-2">
                  {selectedMember.instrument}
                </p>
                <p className="text-silver/80 font-cormorant text-lg italic">
                  "{selectedMember.bio}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Lineup;
