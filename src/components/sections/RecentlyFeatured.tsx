import { useTranslation } from 'react-i18next';
import { ExternalLink, Music, Video, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import eod14 from '@/assets/band/eod14.jpg';
import eod15 from '@/assets/band/eod15.jpg';
import eod16 from '@/assets/band/eod16.jpg';
import primordialDarkness from '@/assets/band/primordial-darkness.jpg';

const featuredItems = [
  {
    id: 1,
    type: 'release',
    icon: Music,
    tag: 'New Release',
    title: 'Primordial Darkness',
    description: 'Our debut album featuring 11 haunting tracks is out now on all platforms.',
    image: primordialDarkness,
    link: 'https://open.spotify.com/album/1h3GYTiuhNOEXSCRafqhqP',
    date: 'Nov 15, 2024',
  },
  {
    id: 2,
    type: 'video',
    icon: Video,
    tag: 'Music Video',
    title: 'Burning Echoes — Official Video',
    description: 'Watch the official music video for Burning Echoes from Primordial Darkness.',
    image: eod14,
    link: 'https://www.youtube.com/watch?v=OW4P2oxKtE4',
    date: 'Dec 2024',
  },
  {
    id: 3,
    type: 'show',
    icon: Calendar,
    tag: 'Live Show',
    title: 'Frequency of Illusion Release Show',
    description: 'Flames / End of Dawn / Mallevs — Eightball, Thessaloniki',
    image: eod15,
    link: 'https://www.facebook.com/events/634749312780087',
    date: 'Dec 7, 2025',
  },
  {
    id: 4,
    type: 'video',
    icon: Video,
    tag: 'Music Video',
    title: 'The Great Epilogue — Official Video',
    description: 'The official music video for The Great Epilogue is streaming now.',
    image: eod16,
    link: 'https://www.youtube.com/watch?v=UlNyF26zKqo',
    date: 'Jan 2025',
  },
];

const RecentlyFeatured = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative overflow-hidden bg-charcoal">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('featured.title')}
        </h2>
        <div className="section-divider mb-10" />

        <div className="max-w-5xl mx-auto px-12">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {featuredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group h-full"
                    >
                      <div className="card-gothic h-full flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-cinzel uppercase tracking-wider rounded">
                            <Icon className="w-3 h-3" />
                            {item.tag}
                          </span>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <p className="text-xs text-muted-foreground font-cinzel tracking-wider mb-2">{item.date}</p>
                          <h3 className="font-cinzel text-silver text-lg mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground font-cormorant text-sm flex-1">
                            {item.description}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-primary text-xs font-cinzel uppercase tracking-wider">
                            {t('featured.learnMore')} <ExternalLink className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="border-silver/30 text-silver hover:bg-primary/20 hover:text-primary-foreground" />
            <CarouselNext className="border-silver/30 text-silver hover:bg-primary/20 hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecentlyFeatured;
