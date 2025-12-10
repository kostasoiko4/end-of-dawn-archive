import { Play, Clock } from 'lucide-react';
import album from '@/assets/band/primordial-darkness.jpg';

const songs = [
  { 
    title: 'Primordial Darkness', 
    duration: '6:42', 
    plays: '245K',
    album: 'Primordial Darkness'
  },
  { 
    title: 'Veil of Shadows', 
    duration: '5:18', 
    plays: '189K',
    album: 'Primordial Darkness'
  },
  { 
    title: 'Eclipse of the Fallen', 
    duration: '7:03', 
    plays: '156K',
    album: 'Primordial Darkness'
  },
];

const TopSongs = () => {
  return (
    <section id="music" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Top Songs
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Album Art */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="relative group">
                <img 
                  src={album} 
                  alt="Primordial Darkness Album" 
                  className="w-full aspect-square object-cover rounded-lg purple-glow"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors rounded-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-silver opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <p className="text-center mt-4 font-cinzel text-silver/70 text-sm tracking-wider">
                Latest Album: Primordial Darkness
              </p>
            </div>

            {/* Song List */}
            <div className="flex-1 w-full">
              {songs.map((song, index) => (
                <div 
                  key={song.title}
                  className="group flex items-center gap-4 p-4 rounded-lg hover:bg-charcoal-light transition-colors border-b border-silver/10 last:border-0"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-muted-foreground group-hover:hidden font-cinzel">
                      {index + 1}
                    </span>
                    <Play className="w-5 h-5 text-primary hidden group-hover:block" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-cinzel text-silver truncate">{song.title}</h3>
                    <p className="text-sm text-muted-foreground">{song.album}</p>
                  </div>

                  <div className="text-sm text-muted-foreground hidden sm:block">
                    {song.plays} plays
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{song.duration}</span>
                  </div>
                </div>
              ))}

              <div className="mt-6 text-center">
                <a href="#" className="btn-outline-gothic text-sm">
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSongs;
