import { ShoppingBag, ExternalLink } from 'lucide-react';
import emblem from '@/assets/band/emblem.png';
import album from '@/assets/band/primordial-darkness.jpg';

const products = [
  {
    name: 'Primordial Darkness Shirt',
    price: '$35',
    image: album,
    category: 'Apparel',
  },
  {
    name: 'Logo Hoodie',
    price: '$55',
    image: emblem,
    category: 'Apparel',
    bgDark: true,
  },
  {
    name: 'Album CD + Poster Bundle',
    price: '$25',
    image: album,
    category: 'Music',
  },
  {
    name: 'Emblem Patch',
    price: '$12',
    image: emblem,
    category: 'Accessories',
    bgDark: true,
  },
];

const Merch = () => {
  return (
    <section id="merch" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Merchandise
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className={`card-gothic overflow-hidden ${product.bgDark ? 'bg-charcoal' : ''}`}>
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${product.bgDark ? 'p-8 opacity-80' : ''}`}
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                    <button className="btn-gothic text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                      <ShoppingBag className="w-4 h-4 mr-2 inline" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-cinzel tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-cinzel text-silver text-sm mt-1 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-silver-light font-cinzel font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-gothic inline-flex items-center gap-2">
            <span>Visit Full Store</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Merch;
