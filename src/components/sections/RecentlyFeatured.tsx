import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Music, Video, Calendar, ShoppingBag } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Skeleton } from '@/components/ui/skeleton';
import eod14 from '@/assets/band/eod14.jpg';
import eod15 from '@/assets/band/eod15.jpg';
import eod16 from '@/assets/band/eod16.jpg';
import primordialDarkness from '@/assets/band/primordial-darkness.jpg';
import albumImg from '@/assets/band/primordial-darkness.jpg';
import singleImg from '@/assets/band/eodShadow.jpg';
import merch1 from '@/assets/merch1.jpg';
import merch2 from '@/assets/merch2.jpg';
import merch3 from '@/assets/merch3.jpg';
import merch4 from '@/assets/merch4.jpg';
import { format } from 'date-fns';

const imageMap: Record<string, string> = {
  'primordial-darkness': primordialDarkness,
  eod14, eod15, eod16,
  'shadow': singleImg,
  merch1, merch2, merch3, merch4,
};

const iconMap: Record<string, typeof Music> = {
  release: Music,
  video: Video,
  show: Calendar,
  merch: ShoppingBag,
};

interface FeaturedCard {
  id: string;
  type: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  sortDate: number;
}

const RecentlyFeatured = () => {
  const { t } = useTranslation();
  const { releases, shows, merch, songs, loading } = useSelector((state: RootState) => state.content);

  const getImage = (imageKey: string) => {
    if (imageKey.startsWith('http') || imageKey.startsWith('/') || imageKey.startsWith('data:')) return imageKey;
    return imageMap[imageKey.toLowerCase()] || '';
  };

  const featuredItems = useMemo(() => {
    const items: FeaturedCard[] = [];

    // Add releases
    releases.forEach(r => {
      const dateStr = r.date;
      // Try parsing the date
      let sortDate = 0;
      try {
        // Handle "15 / 11 / 2024" format
        const cleaned = dateStr.replace(/\s/g, '');
        const parts = cleaned.split('/');
        if (parts.length === 3) {
          sortDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
        } else {
          sortDate = new Date(dateStr).getTime();
        }
      } catch { sortDate = 0; }

      items.push({
        id: r.id || r.title,
        type: 'release',
        tag: r.type || 'Release',
        title: r.title,
        description: r.description || `${r.type} • ${r.tracks} tracks • ${r.label}`,
        image: getImage(r.image),
        link: r.streamLink || r.link,
        date: dateStr,
        sortDate,
      });
    });

    // Add upcoming shows (next ones)
    const now = Date.now();
    shows
      .filter(s => new Date(s.date).getTime() > now)
      .slice(0, 3)
      .forEach(s => {
        items.push({
          id: s.id,
          type: 'show',
          tag: 'Live Show',
          title: s.title,
          description: s.bands,
          image: s.image,
          link: s.url,
          date: s.date,
          sortDate: new Date(s.date).getTime(),
        });
      });

    // Add latest merch (last 2)
    merch.slice(0, 2).forEach(m => {
      items.push({
        id: m.id || m.name,
        type: 'merch',
        tag: m.category,
        title: m.name,
        description: m.price,
        image: getImage(m.image),
        link: m.link,
        date: '',
        sortDate: 0,
      });
    });

    // Sort: items with future dates first (shows), then by date descending
    return items.sort((a, b) => {
      // Shows (future) first
      if (a.sortDate > now && b.sortDate <= now) return -1;
      if (b.sortDate > now && a.sortDate <= now) return 1;
      return b.sortDate - a.sortDate;
    }).slice(0, 8);
  }, [releases, shows, merch, songs]);

  if (loading) {
    return (
      <section className="py-16 relative overflow-hidden bg-charcoal">
        <div className="mx-auto relative z-10">
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-silver/10" />
          <div className="section-divider mb-10" />
          <div className="mx-auto px-12 flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 min-w-[250px]">
                <Skeleton className="h-48 w-full rounded-t-lg bg-silver/10" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-3 w-20 bg-silver/10" />
                  <Skeleton className="h-5 w-3/4 bg-silver/10" />
                  <Skeleton className="h-3 w-full bg-silver/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (featuredItems.length === 0) return null;

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
                            src={item.image}
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
                          {item.date && (
                            <p className="text-xs text-muted-foreground font-cinzel tracking-wider mb-2">{format(new Date(item.date), "dd / MM / yyyy")}</p>
                          )}
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
