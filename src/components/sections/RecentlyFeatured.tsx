import { useTranslation } from 'react-i18next';
import { ExternalLink, Music, Video, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import eod14 from '@/assets/band/eod14.jpg';
import eod15 from '@/assets/band/eod15.jpg';
import eod16 from '@/assets/band/eod16.jpg';
import primordialDarkness from '@/assets/band/primordial-darkness.jpg';

// Map image keys to imported assets
const imageMap: Record<string, string> = {
  'primordial-darkness': primordialDarkness,
  eod14, eod15, eod16,
};

const iconMap: Record<string, typeof Music> = {
  release: Music,
  video: Video,
  show: Calendar,
};

const RecentlyFeatured = () => {
  const { t } = useTranslation();
  const featuredItems = useSelector((state: RootState) => state.content.featured);

  const getImage = (imageKey: string) => {
    if (imageKey.startsWith('http') || imageKey.startsWith('/') || imageKey.startsWith('data:')) return imageKey;
    return imageMap[imageKey.toLowerCase()] || '';
  };

  return (
    <section className="py-16 relative overflow-hidden bg-charcoal">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="mx-auto relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('featured.title')}
        </h2>
        <div className="section-divider mb-10" />

        <div className="mx-auto px-12">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {featuredItems.map((item) => {
                const Icon = iconMap[item.type] || Music;
                return (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group h-full"
                    >
                      <div className="card-gothic h-full flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={getImage(item.image)}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
