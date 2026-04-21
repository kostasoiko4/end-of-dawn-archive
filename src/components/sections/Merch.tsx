import { useTranslation } from 'react-i18next';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import type { RootState } from '@/store';
import { Skeleton } from '@/components/ui/skeleton';
import merch1 from '@/assets/merch1.jpg';
import merch2 from '@/assets/merch2.jpg';
import merch3 from '@/assets/merch3.jpg';
import merch4 from '@/assets/merch4.jpg';

import dummy1 from '@/assets/Dummy_1.png';
import dummy2 from '@/assets/Dummy_2.png';
import dummy3 from '@/assets/Dummy_3.png';
import dummy4 from '@/assets/Dummy_4.png';
import dummy5 from '@/assets/Dummy_5.png';

const imageMap: Record<string, string> = {
  merch1, merch2, merch3, merch4,
};

const dummyProducts = [
  { name: 'Το Βρακί του Αχιλλέα', price: '€0', image: dummy1, category: 'Apparel', link: 'https://endofdawn.bandcamp.com/merch/end-of-dawn-official-t-shirt' },
  { name: 'Το χρησιμοποιημένο σφουγκαράκι της Γεωργίας', price: '€0', image: dummy4, category: 'Apparel', link: 'https://endofdawn.bandcamp.com/merch/end-of-dawn-primordial-darkness-official-t-shirt' },
  { name: 'Η μαγκούρα του Γιάννη', price: '€0', image: dummy2, category: 'Music', link: 'https://endofdawn.bandcamp.com/album/primordial-darkness' },
  { name: 'Άλεξ (Ολόκληρος)', price: '€0', image: dummy5, category: 'Bundle', link: 'https://endofdawn.bandcamp.com/merch/bundle-edition-t-shirt-primordial-darkness-album-cd-primordial-darkness' },
  { name: 'Ψήφος στήριξης υποψήφιου δημοτικού συμβούλου Μπουτσιούκη Ιωάννη', price: '€0', image: dummy3, category: 'Bundle', link: 'https://endofdawn.bandcamp.com/merch/bundle-edition-t-shirt-primordial-darkness-album-cd-primordial-darkness' },
];

const Merch = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { merch: merchItems, loading } = useSelector((state: RootState) => state.content);
  const isLocalhost = window.location.href.includes('localhost');

  const getImage = (imageKey: string) => {
    if (imageKey.startsWith('http') || imageKey.startsWith('/') || imageKey.startsWith('data:')) return imageKey;
    return imageMap[imageKey.toLowerCase()] || '';
  };

  const products = isLocalhost
    ? dummyProducts
    : merchItems.map(item => ({ ...item, image: getImage(item.image) }));

  return (
    <section id="merch" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">{t('merch.title')}</h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="card-gothic overflow-hidden" style={{ minHeight: '25rem' }}>
                <Skeleton className="aspect-square w-full bg-silver/10" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-3 w-16 bg-silver/10" />
                  <Skeleton className="h-4 w-3/4 bg-silver/10" />
                  <Skeleton className="h-5 w-12 bg-silver/10" />
                </div>
              </div>
            ))
          ) : (
            products.map((product) => (
              <div key={product.name} className="group block">
                <div className="card-gothic overflow-hidden" style={{ minHeight: '25rem' }}>
                  <div className="aspect-square relative overflow-hidden">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // dispatch(addItem({ name: product.name, price: product.price, image: product.image, link: product.link }));
                          window.open(product.link, '__blank')
                        }}
                        className="btn-gothic text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2 inline" />
                        {t('merch.addToCart')}
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-cinzel tracking-wider">{product.category}</span>
                    <h3 className="font-cinzel text-silver text-sm mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-silver-light font-cinzel font-semibold">{product.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <a href="https://endofdawn.bandcamp.com/merch" target="_blank" rel="noopener noreferrer" className="btn-gothic inline-flex items-center gap-2">
            <span>{t('merch.visitStore')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Merch;
