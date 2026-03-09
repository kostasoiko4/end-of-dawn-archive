import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { XMLParser } from "fast-xml-parser";

const Videos = () => {
  const { t } = useTranslation();
  const rssUrl = import.meta.env.VITE_API_YOUTUBE_BASE_URL
  const currentChannelId = import.meta.env.VITE_API_YOUTUBE_ID
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      if (currentChannelId && rssUrl) {
        try {
          const res = await fetch("https://eod-proxy-83beb47ab8db.herokuapp.com/youtube-feed");
          const xml = await res.text();

          const parser = new XMLParser();
          const data = parser.parse(xml);
          const videos = data.feed.entry.splice(0,6)
          const embeded = videos.map(video => {
            return {
              title: video.title,
              url: `https://www.youtube.com/embed/${video['yt:videoId']}`
            }
          })
          setVideos(embeded);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);

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
                  src={video.url}
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
