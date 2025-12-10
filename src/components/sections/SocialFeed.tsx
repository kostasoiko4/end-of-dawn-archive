import { Instagram, Facebook, Twitter } from 'lucide-react';
import eod4 from '@/assets/band/eod4.jpg';
import eod5 from '@/assets/band/eod5.jpg';
import eod6 from '@/assets/band/eod6.jpg';
import eod7 from '@/assets/band/eod7.jpg';

const posts = [
  {
    platform: 'Instagram',
    image: eod4,
    caption: 'The ritual begins. See you all at Darkness Festival.',
    likes: '2.3K',
    date: '2 days ago',
  },
  {
    platform: 'Instagram',
    image: eod5,
    caption: 'Backstage moments before we summon the darkness.',
    likes: '1.8K',
    date: '5 days ago',
  },
  {
    platform: 'Instagram',
    image: eod6,
    caption: 'When shadows dance and the night awakens.',
    likes: '3.1K',
    date: '1 week ago',
  },
  {
    platform: 'Instagram',
    image: eod7,
    caption: 'Purple haze and eternal praise.',
    likes: '2.7K',
    date: '2 weeks ago',
  },
];

const SocialFeed = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Follow the Darkness
        </h2>
        <div className="section-divider mb-8" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="text-silver/60 hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-silver/60 hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-silver/60 hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm text-silver line-clamp-2 font-cormorant">
                      {post.caption}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-primary">{post.likes} likes</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Instagram icon overlay */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5 text-silver/80" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-outline-gothic text-sm">
            @EndOfDawnBand
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
