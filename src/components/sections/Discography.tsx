import { useTranslation } from 'react-i18next';
import { Play, ExternalLink } from 'lucide-react';
import album from '@/assets/band/primordial-darkness.jpg';
import single from '@/assets/band/eodShadow.jpg';

const releases = [
  {
    title: 'Primordial Darkness',
    date: '15 / 11 / 2024',
    type: 'Full Length',
    label: 'WormHoleDeath',
    tracks: 11,
    image: album,
    featured: true,
    link: 'https://endofdawn.bandcamp.com/album/primordial-darkness',
  },
  {
    title: 'Shadow',
    date: '18 / 10 / 2024',
    type: 'Single',
    label: 'Independent',
    tracks: 1,
    image: single,
    featured: false,
    link: 'https://endofdawn.bandcamp.com/track/shadow',
  },
];

const Discography = () => {
  const { t } = useTranslation();

  return (
    <section id="discography" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('discography.title')}
        </h2>
        <div className="section-divider mb-12" />

        {/* Featured Album */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-gothic p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-72 flex-shrink-0">
                <a 
                  href="https://endofdawn.bandcamp.com/album/primordial-darkness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block"
                >
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
                </a>
              </div>

              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-cinzel tracking-wider rounded mb-4">
                  {t('discography.latestRelease')}
                </div>
                <h3 className="font-gothic text-2xl md:text-3xl text-silver mb-2">
                  Primordial Darkness
                </h3>
                <p className="text-muted-foreground font-cinzel tracking-wider mb-4">
                  Full Length • 15 / 11 / 2024 • 11 Tracks
                </p>
                <p className="text-muted-foreground font-cinzel tracking-wider mb-4 text-sm">
                  Label: WormHoleDeath
                </p>
                
                <p className="text-foreground/80 font-cormorant text-lg mb-6">
                  The debut full-length album plunges listeners into an abyss of orchestral darkness. Eleven haunting tracks that chronicle the fall of light and the rise of eternal shadow, drawing upon mythological and existential themes.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://open.spotify.com/album/1h3GYTiuhNOEXSCRafqhqP" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gothic text-sm"
                  >
                    {t('discography.streamNow')}
                  </a>
                  <a 
                    href="https://endofdawn.bandcamp.com/album/primordial-darkness" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gothic text-sm inline-flex items-center gap-2"
                  >
                    <span>{t('discography.buyPhysical')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Releases */}
        <div className="max-w-4xl mx-auto">
          <h3 className="gothic-subtitle text-xl text-center mb-8">{t('discography.previousReleases')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {releases.filter(r => !r.featured).map((release) => (
              <a 
                key={release.title} 
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-gothic p-4 flex gap-4 group cursor-pointer hover:border-silver/30 transition-colors"
              >
                <div className="w-20 h-20 bg-charcoal-light rounded flex items-center justify-center flex-shrink-0">
                  <img src={release.image} className="text-3xl text-silver/30 font-gothic"/>
                </div>
                <div>
                  <h4 className="font-cinzel text-silver group-hover:text-primary transition-colors">
                    {release.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {release.type} • {release.date}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Label: {release.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {release.tracks} {release.tracks === 1 ? 'track' : 'tracks'}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;
