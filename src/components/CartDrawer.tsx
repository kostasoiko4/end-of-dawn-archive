import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import {
  selectCartItems, selectCartIsOpen, selectTotalItems, selectTotalPrice,
  closeCart, removeItem, updateQuantity,
} from '@/store/cartSlice';

const CartDrawer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const isOpen = useSelector(selectCartIsOpen);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate('/checkout');
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && dispatch(closeCart())}>
      <SheetContent side="right" className="bg-charcoal border-silver/10 w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-cinzel text-silver tracking-wider uppercase flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            {t('cart.title')} ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
            <p className="font-cinzel tracking-wider">{t('cart.empty')}</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.name} className="flex gap-3 p-3 card-gothic">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-cinzel text-silver text-xs leading-tight line-clamp-2">{item.name}</h4>
                    <p className="text-primary font-cinzel text-sm mt-1">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))} className="w-6 h-6 flex items-center justify-center border border-silver/20 rounded text-silver hover:bg-primary/20 transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-silver font-cinzel text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))} className="w-6 h-6 flex items-center justify-center border border-silver/20 rounded text-silver hover:bg-primary/20 transition-colors">
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

            <div className="border-t border-silver/10 pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-cinzel text-silver tracking-wider uppercase text-sm">{t('cart.total')}</span>
                <span className="font-cinzel text-primary text-lg">€{totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="btn-gothic w-full text-center flex items-center justify-center gap-2"
              >
                {t('cart.proceedToCheckout')}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
