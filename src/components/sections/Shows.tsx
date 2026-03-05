import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { format } from "date-fns"
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';

import firebaseConfig from '../../../firebase_config.json'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Shows = () => {
  const { t } = useTranslation();
  const [showsFeed, setShowsFeed] = useState({
    upcoming: [],
    past: []
  })

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getShows = async () => {
    const showsCol = collection(db, 'shows')
    const showsSnaptshot = await getDocs(showsCol)
    const showsList = showsSnaptshot.docs.map(doc => doc.data());
    return showsList
  }

  useEffect(() => {
    getShows()
    .then(res => {
      const upcoming = res.filter(show => new Date(show.date) * 1000 > new Date())
      const past = res.filter(show => new Date(show.date) * 1000 < new Date())

      upcoming.sort((a, b) => a.date - b.date)
      past.sort((a, b) => b.date - a.date)

      setShowsFeed({
        upcoming: upcoming,
        past: past
      })
    })
  }, [])

  return (
    <section id="shows" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {showsFeed.upcoming.length ?
          <>
            <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
              {t('shows.upcoming')}
            </h2>
            <div className="section-divider mb-12" />

            <div className="max-w-5xl mx-auto grid gap-6 mb-10" style={{marginBottom: '10rem'}}>
              {showsFeed.upcoming.map((show) => 
                <a 
                  key={show.id}
                  href={show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-gothic overflow-hidden group hover:border-primary/30 purple-glow transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-48 h-32 md:h-auto flex-shrink-0 relative overflow-hidden">
                      <img 
                        src={show.image} 
                        alt={show.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal md:block hidden" />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 flex-1 flex flex-col md:flex-row md:items-center gap-4">
                      {/* Date */}
                      <div className="flex items-center gap-3 md:w-36">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-cinzel text-silver tracking-wider text-sm">
                          {format(new Date(show.date) * 1000, "dd / MM / yyyy")}
                        </span>
                      </div>

                      {/* Event Info */}
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

                      {/* Button */}
                      <div className="flex items-center">
                        <span className="btn-outline-gothic text-xs flex items-center gap-2">
                          {t('shows.viewEvent')}
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </> : <></>
        }

        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('shows.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-5xl mx-auto grid gap-6">
          {showsFeed.past.map((show) => 
              <a 
                key={show.id}
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-gothic overflow-hidden group hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-48 h-32 md:h-auto flex-shrink-0 relative overflow-hidden">
                    <img 
                      src={show.image} 
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal md:block hidden" />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex-1 flex flex-col md:flex-row md:items-center gap-4">
                    {/* Date */}
                    <div className="flex items-center gap-3 md:w-36">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-cinzel text-silver tracking-wider text-sm">
                        {format(new Date(show.date) * 1000, "dd / MM / yyyy")}
                      </span>
                    </div>

                    {/* Event Info */}
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

                    {/* Button */}
                    <div className="flex items-center">
                      <span className="btn-outline-gothic text-xs flex items-center gap-2">
                        {t('shows.viewEvent')}
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            )}
        </div>

        <p className="text-center text-muted-foreground font-cormorant mt-8">
          {t('shows.moreInfo')}
        </p>
      </div>
    </section>
  );
};

export default Shows;
