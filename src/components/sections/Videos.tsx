import { Play, ExternalLink } from 'lucide-react';
import eod7 from '@/assets/band/eod7.jpg';
import eod4 from '@/assets/band/eod4.jpg';
import eod5 from '@/assets/band/eod5.jpg';

const videos = [
  {
    title: 'Primordial Darkness - Official Music Video',
    thumbnail: eod7,
    views: '125K views',
    date: 'Oct 2024',
  },
  {
    title: 'Live at Darkness Festival 2024',
    thumbnail: eod4,
    views: '89K views',
    date: 'Sep 2024',
  },
  {
    title: 'Behind the Scenes - Album Recording',
    thumbnail: eod5,
    views: '45K views',
    date: 'Aug 2024',
  },
];

const Videos = () => {
  return (
    <section id="videos" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Latest Videos
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.title} className="group cursor-pointer">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform purple-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <h3 className="font-cinzel text-silver group-hover:text-primary transition-colors mb-2">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {video.views} • {video.date}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="btn-outline-gothic inline-flex items-center gap-2"
          >
            <span>View All on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
