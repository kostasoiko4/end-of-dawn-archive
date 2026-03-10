import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { selectCartItems, selectTotalPrice, updateQuantity, removeItem } from '@/store/cartSlice';

const Checkout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <p className="font-cinzel text-silver text-xl mb-6">{t('cart.empty')}</p>
        <button onClick={() => navigate('/')} className="btn-gothic">{t('checkout.backToStore')}</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-silver transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-cinzel text-sm tracking-wider">{t('checkout.backToStore')}</span>
        </button>

        <h1 className="gothic-title text-3xl md:text-4xl mb-8">{t('checkout.title')}</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.name} className="card-gothic p-4 flex gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-cinzel text-silver text-sm">{item.name}</h3>
                <p className="text-primary font-cinzel mt-1">{item.price}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))} className="w-7 h-7 flex items-center justify-center border border-silver/20 rounded text-silver hover:bg-primary/20 transition-colors">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-silver font-cinzel">{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))} className="w-7 h-7 flex items-center justify-center border border-silver/20 rounded text-silver hover:bg-primary/20 transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                  <button onClick={() => dispatch(removeItem(item.name))} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-gothic p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="font-cinzel text-silver tracking-wider uppercase">{t('cart.total')}</span>
            <span className="font-cinzel text-primary text-2xl">€{totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={() => navigate('/payment')} className="btn-gothic w-full text-center">
            {t('checkout.proceedToPayment')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
