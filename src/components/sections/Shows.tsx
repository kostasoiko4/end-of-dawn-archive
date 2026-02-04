import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import live1 from '@/assets/live1.png';
import live2 from '@/assets/live2.png';
import live3 from '@/assets/live3.jpg';
import live4 from '@/assets/live4.jpg';
import live5 from '@/assets/live5.jpg';
import live6 from '@/assets/live6.jpg';
import live7 from '@/assets/live7.jpg';
import live8 from '@/assets/live8.png';
import live9 from '@/assets/live9.jpg';
import live10 from '@/assets/live10.jpg';
import live11 from '@/assets/live11.png';

const upcomingShows = [
  {
    id: 4858416,
    image: live10,
    url: "https://www.facebook.com/events/877788818126384/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22home%22%7D%2C%7B%22mechanism%22%3A%22search_results%22%2C%22surface%22%3A%22search%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
    title: "Ocean of Eternal Dawn",
    bands: "Ocean of Grief / End of Dawn / Athanatos",
    date: "21 / 02 / 2026",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 7938416,
    image: live11,
    url: "https://www.facebook.com/events/1545122050111450/?acontext=%7B%22action_history%22%3A%22null%22%7D&ref_source=newsfeed&ref_mechanism=feed_attachment&_rdr",
    title: "Storming the Gates vol. V",
    bands: "Melan Selas / Rognirgoden / End of Dawn / Sinistrus Mist",
    date: "18 / 04 / 2026",
    location: "Black Temple, Athens"
  },
]

const shows = [
  {
    id: 7938170,
    image: live9,
    url: "https://www.facebook.com/events/634749312780087",
    title: "Frequency of Illusion Release Show",
    bands: "Flames / End of Dawn / Mallevs",
    date: "07 / 12 / 2025",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 1086739,
    image: live8,
    url: "https://www.facebook.com/events/2485658904972489",
    title: "Golden R. Festival",
    bands: "Old Man's Child / God Dethroned / Lucifer's Child / Reflection / Exilium Noctis / Powercross / End of Dawn / Illusive Mirrors",
    date: "30 / 08 / 2025",
    location: "Nea Achialos, Volos"
  },
  {
    id: 5167028,
    image: live7,
    url: "https://www.facebook.com/events/1912691492597333",
    title: "Primordial Darkness Release Show",
    bands: "End of Dawn / Likno / Aesemina",
    date: "08 / 05 / 2025",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 5380196,
    image: live6,
    url: "https://www.facebook.com/events/918036716781146",
    title: "Ritual of The Black Mass",
    bands: "Fovitron / End of Dawn / Grotesco Karma / Archegon",
    date: "28 / 02 / 2025",
    location: "Architektoniki, Athens"
  },
  {
    id: 4187692,
    image: live5,
    url: "https://www.facebook.com/events/1111632866984593",
    title: "Dawn With No Light Release Show",
    bands: "Ignominus / Exilium Noctis / End of Dawn",
    date: "14 / 12 / 2024",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 1790235,
    image: live4,
    url: "https://www.facebook.com/events/711955963937492",
    title: "Brazilian Attack Over Thessaloniki",
    bands: "Sextrash / Outlaw / Freefall / End of Dawn",
    date: "17 / 02 / 2024",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 8190251,
    image: live3,
    url: "https://www.facebook.com/events/561143139480525",
    title: "Nightfall Upon Thessaloniki",
    bands: "Drama Noir / Temple of Katharsis / End of Dawn",
    date: "26 / 01 / 2024",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 6190361,
    image: live2,
    url: "https://www.facebook.com/events/1521234788683449",
    title: "Headspin Festival",
    bands: "End of Dawn / Delta Point / 9F / Opium",
    date: "4 / 11 / 2023",
    location: "Eightball, Thessaloniki"
  },
  {
    id: 9103610,
    image: live1,
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
          {t('shows.upcoming')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-5xl mx-auto grid gap-6 mb-10">
          {upcomingShows.map((show) => (
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
