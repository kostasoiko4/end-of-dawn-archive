import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import eod1 from '@/assets/band/eod1.jpg';
import eod2 from '@/assets/band/eod2.jpg';
import eod3 from '@/assets/band/eod3.jpg';
import eod4 from '@/assets/band/eod4.jpg';
import eod5 from '@/assets/band/eod5.jpg';
import eod6 from '@/assets/band/eod6.jpg';
import eod7 from '@/assets/band/eod7.jpg';
import eod10 from '@/assets/band/eod10.jpg';
import eod14 from '@/assets/band/eod14.jpg';

const shows = [
  {
    id: 7938170,
    image: eod14,
    url: "https://www.facebook.com/events/634749312780087",
    title: "Frequency of Illusion Release Show",
    bands: "Flames / End of Dawn / Mallevs",
    date: "07 / 12 / 2025",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 1086739,
    image: eod10,
    url: "https://www.facebook.com/events/2485658904972489",
    title: "Golden R. Festival",
    bands: "Old Man's Child / God Dethroned / Lucifer's Child / Reflection / Exilium Noctis / Powercross / End of Dawn / Illusive Mirrors",
    date: "30 / 08 / 2025",
    location: "Nea Achialos, Volos"
  },
  {
    id: 5167028,
    image: eod7,
    url: "https://www.facebook.com/events/1912691492597333",
    title: "Primordial Darkness Release Show",
    bands: "End of Dawn / Likno / Aesemina",
    date: "08 / 05 / 2025",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 5380196,
    image: eod6,
    url: "https://www.facebook.com/events/918036716781146",
    title: "Ritual of The Black Mass",
    bands: "Fovitron / End of Dawn / Grotesco Karma / Archegon",
    date: "28 / 02 / 2025",
    location: "Architektoniki, Athens"
  },
  {
    id: 4187692,
    image: eod5,
    url: "https://www.facebook.com/events/1111632866984593",
    title: "Dawn With No Light Release Show",
    bands: "Ignominus / Exilium Noctis / End of Dawn",
    date: "14 / 12 / 2024",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 1790235,
    image: eod4,
    url: "https://www.facebook.com/events/711955963937492",
    title: "Brazilian Attack Over Thessaloniki",
    bands: "Sextrash / Outlaw / Freefall / End of Dawn",
    date: "17 / 02 / 2024",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 8190251,
    image: eod3,
    url: "https://www.facebook.com/events/561143139480525",
    title: "Nightfall Upon Thessaloniki",
    bands: "Drama Noir / Temple of Katharsis / End of Dawn",
    date: "26 / 01 / 2024",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 6190361,
    image: eod2,
    url: "https://www.facebook.com/events/1521234788683449",
    title: "Headspin Festival",
    bands: "End of Dawn / Delta Point / 9F / Opium",
    date: "4 / 11 / 2023",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 9103610,
    image: eod1,
    url: "https://www.facebook.com/events/128779350143956",
    title: "Unholy Gathering of Dark Sonance",
    bands: "Fovitron / End of Dawn / Asfodelos",
    date: "20 / 05 / 2023",
    location: "Eightball, Thessaloniki"
  },
];

const Shows = () => {
  const { t } = useTranslation();

  return (
    <section id="shows" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('shows.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-5xl mx-auto grid gap-6">
          {shows.map((show) => (
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
                      {show.date}
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
