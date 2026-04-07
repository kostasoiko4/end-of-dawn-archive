import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Skeleton } from '@/components/ui/skeleton';
import eod3 from '@/assets/band/eod3.jpg';

const Bio = () => {
  const { t } = useTranslation();
  const { bio, loading } = useSelector((state: RootState) => state.content);

  return (
    <section id="bio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('bio.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={eod3} 
              alt="End of Dawn performing" 
              loading="lazy"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
          </div>

          <div className="space-y-6">
            {loading ? (
              <>
                <Skeleton className="h-5 w-full bg-silver/10" />
                <Skeleton className="h-5 w-11/12 bg-silver/10" />
                <Skeleton className="h-5 w-full bg-silver/10" />
                <Skeleton className="h-5 w-10/12 bg-silver/10" />
                <Skeleton className="h-5 w-full bg-silver/10" />
                <Skeleton className="h-5 w-9/12 bg-silver/10" />
                <Skeleton className="h-8 w-3/4 bg-silver/10 mt-4" />
              </>
            ) : (
              <>
                <p className="text-lg text-foreground/90 leading-relaxed font-cormorant">
                  <strong className="text-silver">End of Dawn</strong> {bio.paragraph1.replace('End of Dawn ', '')}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed font-cormorant">
                  {bio.paragraph2}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed font-cormorant">
                  {bio.paragraph3}
                </p>
                <blockquote className="border-l-2 border-primary pl-4 italic text-silver/80 font-cormorant text-xl">
                  "{bio.quote}"
                </blockquote>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
