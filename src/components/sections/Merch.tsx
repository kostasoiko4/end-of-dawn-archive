import { useTranslation } from 'react-i18next';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import merch1 from '@/assets/merch1.jpg';
import merch2 from '@/assets/merch2.jpg';
import merch3 from '@/assets/merch3.jpg';
import merch4 from '@/assets/merch4.jpg';

const products = [
  {
    name: 'End of Dawn - Official T-shirt',
    price: '€12',
    image: merch1,
    category: 'Apparel',
    bgDark: false,
    link: 'https://endofdawn.bandcamp.com/merch/end-of-dawn-official-t-shirt',
  },
  {
    name: 'End of Dawn - Primordial Darkness Official T-shirt',
    price: '€15',
    image: merch2,
    category: 'Apparel',
    bgDark: false,
    link: 'https://endofdawn.bandcamp.com/merch/end-of-dawn-primordial-darkness-official-t-shirt',
  },
  {
    name: 'End of Dawn - Primordial Darkness CD',
    price: '€10',
    image: merch3,
    category: 'Music',
    bgDark: false,
    link: 'https://endofdawn.bandcamp.com/album/primordial-darkness',
  },
  {
    name: 'Bundle Edition: T-shirt + Album CD (Primordial Darkness)',
    price: '€20',
    image: merch4,
    category: 'Bundle',
    bgDark: false,
    link: 'https://endofdawn.bandcamp.com/merch/bundle-edition-t-shirt-primordial-darkness-album-cd-primordial-darkness',
  },
];

const Merch = () => {
  const { t } = useTranslation();

  return (
    <section id="merch" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('merch.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <a 
              key={product.name} 
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`card-gothic overflow-hidden ${product.bgDark ? 'bg-charcoal' : ''}`} style={{minHeight: '25rem'}}>
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${product.bgDark ? 'p-8 opacity-80' : ''}`}
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                    <span className="btn-gothic text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                      <ShoppingBag className="w-4 h-4 mr-2 inline" />
                      {t('merch.addToCart')}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-cinzel tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-cinzel text-silver text-sm mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-silver-light font-cinzel font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://endofdawn.bandcamp.com/merch" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gothic inline-flex items-center gap-2"
          >
            <span>{t('merch.visitStore')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Merch;
