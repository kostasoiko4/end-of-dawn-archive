import { useTranslation } from 'react-i18next';
import { Play, Clock, ExternalLink } from 'lucide-react';
import album from '@/assets/band/primordial-darkness.jpg';

const songs = [
  { 
    title: 'Burning Echoes', 
    duration: '4:29', 
    plays: '12.5K',
    album: 'Primordial Darkness',
    spotifyEmbed: 'https://open.spotify.com/embed/track/2uXsPSS3GOSHXS3gdTfY4t?utm_source=generator&theme=0',
    spotifyLink: 'https://open.spotify.com/track/2uXsPSS3GOSHXS3gdTfY4t'
  },
  { 
    title: 'Dawn of Decay', 
    duration: '5:03', 
    plays: '8.2K',
    album: 'Primordial Darkness',
    spotifyEmbed: 'https://open.spotify.com/embed/track/0zrgJ7JtlXC7yrRzdx4EVH?utm_source=generator&theme=0',
    spotifyLink: 'https://open.spotify.com/track/0zrgJ7JtlXC7yrRzdx4EVH'
  },
  { 
    title: 'The Great Epilogue', 
    duration: '6:18', 
    plays: '6.9K',
    album: 'Primordial Darkness',
    spotifyEmbed: 'https://open.spotify.com/embed/track/3VXVxmrCv30tX9wULttpOs?utm_source=generator&theme=0',
    spotifyLink: 'https://open.spotify.com/track/3VXVxmrCv30tX9wULttpOs'
  },
];

const TopSongs = () => {
  const { t } = useTranslation();

  const handleSongClick = (spotifyLink: string) => {
    window.open(spotifyLink, '_blank');
  };

  const handleAlbumClick = () => {
    window.open('https://open.spotify.com/album/1h3GYTiuhNOEXSCRafqhqP', '_blank');
  };

  return (
    <section id="music" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('topSongs.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Album Art */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div 
                className="relative group cursor-pointer"
                onClick={handleAlbumClick}
              >
                <img 
                  src={album} 
                  alt="Primordial Darkness Album" 
                  className="w-full aspect-square object-cover rounded-lg purple-glow"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors rounded-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-silver opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                </div>
              </div>
              <p className="text-center mt-4 font-cinzel text-silver/70 text-sm tracking-wider">
                {t('topSongs.latestAlbum')}
              </p>
            </div>

            {/* Song List */}
            <div className="flex-1 w-full">
              {songs.map((song, index) => (
                <div 
                  key={song.title}
                  onClick={() => handleSongClick(song.spotifyLink)}
                  className="group flex items-center gap-4 p-4 rounded-lg hover:bg-charcoal-light transition-colors border-b border-silver/10 last:border-0 cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-muted-foreground group-hover:hidden font-cinzel">
                      {index + 1}
                    </span>
                    <Play className="w-5 h-5 text-primary hidden group-hover:block" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-cinzel text-silver truncate group-hover:text-primary transition-colors">{song.title}</h3>
                    <p className="text-sm text-muted-foreground">{song.album}</p>
                  </div>

                  <div className="text-sm text-muted-foreground hidden sm:block">
                    {song.plays} {t('topSongs.plays')}
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{song.duration}</span>
                  </div>

                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}

              <div className="mt-6 text-center">
                <a 
                  href="https://open.spotify.com/album/1h3GYTiuhNOEXSCRafqhqP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-gothic text-sm inline-flex items-center gap-2"
                >
                  {t('topSongs.listenOnSpotify')}
                  <ExternalLink className="w-4 h-4" />
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
