import { Calendar, MapPin, Ticket } from 'lucide-react';

const shows = [
  {
    date: 'Dec 28, 2024',
    venue: 'The Black Cathedral',
    city: 'Los Angeles, CA',
    status: 'On Sale',
  },
  {
    date: 'Jan 15, 2025',
    venue: 'Darkness Festival',
    city: 'Berlin, Germany',
    status: 'On Sale',
  },
  {
    date: 'Feb 22, 2025',
    venue: 'Nightfall Arena',
    city: 'London, UK',
    status: 'Coming Soon',
  },
  {
    date: 'Mar 10, 2025',
    venue: 'Gothic Theater',
    city: 'Mexico City, MX',
    status: 'Coming Soon',
  },
];

const Shows = () => {
  return (
    <section id="shows" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Upcoming Shows
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-4xl mx-auto space-y-4">
          {shows.map((show, index) => (
            <div 
              key={index}
              className="card-gothic p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 group hover:border-primary/30 transition-all"
            >
              {/* Date */}
              <div className="flex items-center gap-3 md:w-48">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-cinzel text-silver tracking-wider">
                  {show.date}
                </span>
              </div>

              {/* Venue & City */}
              <div className="flex-1">
                <h3 className="font-cinzel text-silver text-lg group-hover:text-primary transition-colors">
                  {show.venue}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-cormorant">{show.city}</span>
                </div>
              </div>

              {/* Status & Button */}
              <div className="flex items-center gap-4">
                <span className={`text-xs font-cinzel tracking-wider px-3 py-1 rounded ${
                  show.status === 'On Sale' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-silver/10 text-muted-foreground'
                }`}>
                  {show.status}
                </span>
                <button 
                  className={`btn-outline-gothic text-sm flex items-center gap-2 ${
                    show.status !== 'On Sale' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={show.status !== 'On Sale'}
                >
                  <Ticket className="w-4 h-4" />
                  <span className="hidden sm:inline">Get Tickets</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-cormorant mt-8">
          More dates to be announced. Follow us on social media for updates.
        </p>
      </div>
    </section>
  );
};

export default Shows;
