import { useTranslation } from 'react-i18next';
import { Play, ExternalLink } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Skeleton } from '@/components/ui/skeleton';
import albumImg from '@/assets/band/primordial-darkness.jpg';
import singleImg from '@/assets/band/eodShadow.jpg';
import { format } from 'date-fns';

const imageMap: Record<string, string> = {
  'primordial-darkness': albumImg,
  'shadow': singleImg,
};

const Discography = () => {
  const { t } = useTranslation();
  const { releases, loading } = useSelector((state: RootState) => state.content);

  const getImage = (imageKey: string) => {
    if (imageKey.startsWith('http') || imageKey.startsWith('/') || imageKey.startsWith('data:')) return imageKey;
    return imageMap[imageKey.toLowerCase()] || '';
  };

  const featuredRelease = releases.find(r => r.featured);
  const otherReleases = releases.filter(r => !r.featured);

  return (
    <section id="discography" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">{t('discography.title')}</h2>
        <div className="section-divider mb-12" />

        {loading ? (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card-gothic p-6 flex flex-col md:flex-row gap-8">
              <Skeleton className="w-full md:w-72 aspect-square rounded-lg bg-silver/10" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-4 w-24 bg-silver/10" />
                <Skeleton className="h-8 w-3/4 bg-silver/10" />
                <Skeleton className="h-4 w-1/2 bg-silver/10" />
                <Skeleton className="h-20 w-full bg-silver/10" />
                <Skeleton className="h-10 w-40 bg-silver/10" />
              </div>
            </div>
          </div>
        ) : (
          <>
            {featuredRelease && (
              <div className="max-w-4xl mx-auto mb-16">
                <div className="card-gothic p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-72 flex-shrink-0">
                      <a href={featuredRelease.link} target="_blank" rel="noopener noreferrer" className="relative group block">
                        <img src={getImage(featuredRelease.image)} alt={featuredRelease.title} loading="lazy" className="w-full aspect-square object-cover rounded-lg purple-glow" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-cinzel tracking-wider rounded mb-4">{t('discography.latestRelease')}</div>
                      <h3 className="font-gothic text-2xl md:text-3xl text-silver mb-2">{featuredRelease.title}</h3>
                      <p className="text-muted-foreground font-cinzel tracking-wider mb-4">{featuredRelease.type} • {format(new Date(featuredRelease.date), "dd / MM / yyyy")} • {featuredRelease.tracks} Tracks</p>
                      <p className="text-muted-foreground font-cinzel tracking-wider mb-4 text-sm">Label: {featuredRelease.label}</p>
                      {featuredRelease.description && <p className="text-foreground/80 font-cormorant text-lg mb-6">{featuredRelease.description}</p>}
                      <div className="flex flex-wrap gap-4">
                        {featuredRelease.streamLink && (
                          <a href={featuredRelease.streamLink} target="_blank" rel="noopener noreferrer" className="btn-gothic text-sm">{t('discography.streamNow')}</a>
                        )}
                        <a href={featuredRelease.link} target="_blank" rel="noopener noreferrer" className="btn-outline-gothic text-sm inline-flex items-center gap-2">
                          <span>{t('discography.buyPhysical')}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {otherReleases.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <h3 className="gothic-subtitle text-xl text-center mb-8">{t('discography.previousReleases')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {otherReleases.map((release) => (
                    <a key={release.title} href={release.link} target="_blank" rel="noopener noreferrer" className="card-gothic p-4 flex gap-4 group cursor-pointer hover:border-silver/30 transition-colors">
                      <div className="w-20 h-20 bg-charcoal-light rounded flex items-center justify-center flex-shrink-0">
                        <img src={getImage(release.image)} loading="lazy" alt={`${release.title}-image`} className="text-3xl text-silver/30 font-gothic"/>
                      </div>
                      <div>
                        <h4 className="font-cinzel text-silver group-hover:text-primary transition-colors">{release.title}</h4>
                        <p className="text-sm text-muted-foreground">{release.type} • {format(new Date(release.date), "dd / MM / yyyy")}</p>
                        <p className="text-xs text-muted-foreground mt-1">Label: {release.label}</p>
                        <p className="text-xs text-muted-foreground">{release.tracks} {release.tracks === 1 ? 'track' : 'tracks'}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Discography;
