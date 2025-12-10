import { Instagram, Facebook, Twitter } from 'lucide-react';
import eod9 from '@/assets/band/eod9.jpg';
import eod10 from '@/assets/band/eod10.jpg';
import eod14 from '@/assets/band/eod14.jpg';
import eod15 from '@/assets/band/eod15.jpg';
import eod12 from '@/assets/band/eod12.jpg';
import eod13 from '@/assets/band/eod13.jpg';

const posts = [
  {
    platform: 'Instagram',
    image: eod10,
    caption: 'The ritual begins. See you all at Darkness Festival.',
    likes: '2.3K',
    date: '2 days ago',
  },
  {
    platform: 'Instagram',
    image: eod14,
    caption: 'Purple haze consumes all. The void calls.',
    likes: '3.1K',
    date: '5 days ago',
  },
  {
    platform: 'Instagram',
    image: eod15,
    caption: 'Behind the mask lies eternal darkness.',
    likes: '4.2K',
    date: '1 week ago',
  },
  {
    platform: 'Instagram',
    image: eod9,
    caption: 'When shadows dance and the night awakens.',
    likes: '2.7K',
    date: '2 weeks ago',
  },
  {
    platform: 'Instagram',
    image: eod12,
    caption: 'Backstage moments before we summon the darkness.',
    likes: '1.8K',
    date: '3 weeks ago',
  },
  {
    platform: 'Instagram',
    image: eod13,
    caption: 'Keys to the underworld. Orchestrating chaos.',
    likes: '2.1K',
    date: '1 month ago',
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden silver-border">
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
