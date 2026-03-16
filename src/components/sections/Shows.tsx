import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { format } from "date-fns";
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

const Shows = () => {
  const { t } = useTranslation();
  const allShows = useSelector((state: RootState) => state.content.shows);

  console.log(allShows)

  const now = new Date();
  const upcoming = allShows
    .filter(show => new Date(show.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = allShows
    .filter(show => new Date(show.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="shows" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {upcoming.length > 0 && (
          <>
            <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
              {t('shows.upcoming')}
            </h2>
            <div className="section-divider mb-12" />

            <div className="max-w-5xl mx-auto grid gap-6 mb-10" style={{marginBottom: '10rem'}}>
              {upcoming.map((show) => (
                <span 
                  key={show.id}
                  className="card-gothic overflow-hidden group hover:border-primary/30 purple-glow transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 md:h-auto flex-shrink-0 relative overflow-hidden">
                      <img 
                        src={show.image} 
                        alt={show.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal md:block hidden" />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-3 md:w-36">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-cinzel text-silver tracking-wider text-sm">
                          {format(new Date(show.date), "dd / MM / yyyy")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-cinzel text-silver text-lg group-hover:text-primary transition-colors mb-1">
                          {show.title}
                        </h3>
                        <p className="text-muted-foreground font-cormorant text-sm mb-2 line-clamp-1">
                          {show.bands}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="font-cormorant text-sm">{show.location}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <a href={show.url} target="_blank" className="btn-outline-gothic text-xs flex items-center gap-2 mb-4">
                            {t('shows.viewEvent')}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        {show.ticketsUrl && (
                          <div className="flex items-center">
                            <a href={show.ticketsUrl} target="_blank" className="btn-outline-gothic text-xs flex items-center gap-2">
                              {t('shows.getTickets')}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </>
        )}

        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('shows.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-5xl mx-auto grid gap-6">
          {past.map((show) => (
            <a 
              key={show.id}
              href={show.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gothic overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-32 md:h-auto flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal md:block hidden" />
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-36">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-cinzel text-silver tracking-wider text-sm">
                      {format(new Date(show.date), "dd / MM / yyyy")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-cinzel text-silver text-lg group-hover:text-primary transition-colors mb-1">
                      {show.title}
                    </h3>
                    <p className="text-muted-foreground font-cormorant text-sm mb-2 line-clamp-1">
                      {show.bands}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="font-cormorant text-sm">{show.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="btn-outline-gothic text-xs flex items-center gap-2">
                      {t('shows.viewEvent')}
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-cormorant mt-8">
          {t('shows.moreInfo')}
        </p>
      </div>
    </section>
  );
};

export default Shows;
