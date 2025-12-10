import { Play, ExternalLink } from 'lucide-react';
import album from '@/assets/band/primordial-darkness.jpg';

const releases = [
  {
    title: 'Primordial Darkness',
    year: '2024',
    type: 'Full Length Album',
    tracks: 10,
    image: album,
    featured: true,
  },
  {
    title: 'Whispers of the Abyss',
    year: '2022',
    type: 'EP',
    tracks: 5,
    image: null,
    featured: false,
  },
  {
    title: 'Shadows Embrace',
    year: '2020',
    type: 'Single',
    tracks: 2,
    image: null,
    featured: false,
  },
];

const Discography = () => {
  return (
    <section id="discography" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Discography
        </h2>
        <div className="section-divider mb-12" />

        {/* Featured Album */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-gothic p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-72 flex-shrink-0">
                <div className="relative group">
                  <img 
                    src={album} 
                    alt="Primordial Darkness" 
                    className="w-full aspect-square object-cover rounded-lg purple-glow"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-cinzel tracking-wider rounded mb-4">
                  Latest Release
                </div>
                <h3 className="font-gothic text-2xl md:text-3xl text-silver mb-2">
                  Primordial Darkness
                </h3>
                <p className="text-muted-foreground font-cinzel tracking-wider mb-4">
                  Full Length Album • 2024 • 10 Tracks
                </p>
                
                <p className="text-foreground/80 font-cormorant text-lg mb-6">
                  The debut full-length album plunges listeners into an abyss of orchestral darkness. Ten tracks of symphonic black metal that chronicle the fall of light and the rise of eternal shadow.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="btn-gothic text-sm">
                    Stream Now
                  </a>
                  <a href="#" className="btn-outline-gothic text-sm inline-flex items-center gap-2">
                    <span>Buy Physical</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Releases */}
        <div className="max-w-4xl mx-auto">
          <h3 className="gothic-subtitle text-xl text-center mb-8">Previous Releases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {releases.filter(r => !r.featured).map((release) => (
              <div key={release.title} className="card-gothic p-4 flex gap-4 group cursor-pointer hover:border-silver/30 transition-colors">
                <div className="w-20 h-20 bg-charcoal-light rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-silver/30 font-gothic">{release.title[0]}</span>
                </div>
                <div>
                  <h4 className="font-cinzel text-silver group-hover:text-primary transition-colors">
                    {release.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {release.type} • {release.year}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {release.tracks} tracks
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;
