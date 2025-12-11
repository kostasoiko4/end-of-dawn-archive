import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const videos = [
  {
    title: 'Burning Echoes - Official Music Video',
    youtubeId: 'OW4P2oxKtE4',
    embedUrl: 'https://www.youtube.com/embed/OW4P2oxKtE4?si=1iNvDZrGUi56cxnM',
  },
  {
    title: 'The Great Epilogue - Official Music Video',
    youtubeId: 'UlNyF26zKqo',
    embedUrl: 'https://www.youtube.com/embed/UlNyF26zKqo?si=OzFLND3G7rKuA5tg',
  },
];

const Videos = () => {
  const { t } = useTranslation();

  return (
    <section id="videos" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('videos.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div key={video.youtubeId} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 silver-border">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="font-cinzel text-silver text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@EndofDawn.official" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gothic inline-flex items-center gap-2"
          >
            <span>{t('videos.viewAll')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
