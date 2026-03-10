import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { selectCartItems, selectTotalPrice, clearCart } from '@/store/cartSlice';

const PAYPAL_CLIENT_ID = 'test'; // Replace with real PayPal client ID

const PaymentContent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const [success, setSuccess] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '', address: '', city: '', zip: '', country: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  const isFormValid = buyerInfo.name && buyerInfo.email && buyerInfo.address && buyerInfo.city && buyerInfo.zip && buyerInfo.country;

  const sendOrderEmail = async (orderId: string) => {
    const itemsList = items.map(i => `${i.name} x${i.quantity} - ${i.price}`).join('\n');
    const templateParams = {
      name: buyerInfo.name,
      email: buyerInfo.email,
      subject: `New Order #${orderId}`,
      message: `New order received!\n\nCustomer: ${buyerInfo.name}\nEmail: ${buyerInfo.email}\nAddress: ${buyerInfo.address}, ${buyerInfo.city}, ${buyerInfo.zip}, ${buyerInfo.country}\n\nItems:\n${itemsList}\n\nTotal: €${totalPrice.toFixed(2)}`,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_API_MAIL_SERVICE_ID,
        import.meta.env.VITE_API_MAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_API_MAIL_PUBLIC_KEY,
      );
    } catch (err) {
      console.error('Email send failed:', err);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="gothic-title text-3xl mb-4">{t('payment.successTitle')}</h1>
        <p className="text-muted-foreground font-cormorant text-lg mb-8 max-w-md">{t('payment.successMessage')}</p>
        <button onClick={() => navigate('/')} className="btn-gothic">{t('checkout.backToStore')}</button>
      </div>
    );
  }

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
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <button onClick={() => navigate('/checkout')} className="flex items-center gap-2 text-muted-foreground hover:text-silver transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-cinzel text-sm tracking-wider">{t('payment.backToCheckout')}</span>
        </button>

        <h1 className="gothic-title text-3xl md:text-4xl mb-8">{t('payment.title')}</h1>

        {/* Shipping Details */}
        <div className="card-gothic p-6 mb-8">
          <h2 className="font-cinzel text-silver text-lg mb-4 tracking-wider">{t('payment.shippingDetails')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(['name', 'email', 'address', 'city', 'zip', 'country'] as const).map((field) => (
              <div key={field} className={field === 'address' ? 'sm:col-span-2' : ''}>
                <label className="block text-sm font-cinzel text-silver/70 mb-1 tracking-wider">{t(`payment.${field}`)}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={buyerInfo[field]}
                  onChange={handleInputChange}
                  required
                  className="input-gothic w-full"
                  placeholder={t(`payment.${field}Placeholder`)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="card-gothic p-6 mb-8">
          <h2 className="font-cinzel text-silver text-lg mb-4 tracking-wider">{t('payment.orderSummary')}</h2>
          {items.map(item => (
            <div key={item.name} className="flex justify-between py-2 border-b border-silver/10 last:border-0">
              <span className="text-muted-foreground font-cormorant">{item.name} × {item.quantity}</span>
              <span className="text-silver font-cinzel">€{(parseFloat(item.price.replace('€', '')) * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 mt-2">
            <span className="font-cinzel text-silver tracking-wider uppercase">{t('cart.total')}</span>
            <span className="font-cinzel text-primary text-xl">€{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* PayPal */}
        {isFormValid ? (
          <div className="card-gothic p-6">
            <h2 className="font-cinzel text-silver text-lg mb-4 tracking-wider">{t('payment.payWith')}</h2>
            <PayPalButtons
              style={{ layout: 'vertical', color: 'black', shape: 'rect', label: 'pay' }}
              createOrder={(_data, actions) => {
                return actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [{
                    amount: {
                      currency_code: 'EUR',
                      value: totalPrice.toFixed(2),
                    },
                    description: `End of Dawn Merch Order`,
                  }],
                });
              }}
              onApprove={async (_data, actions) => {
                const details = await actions.order?.capture();
                if (details) {
                  await sendOrderEmail(details.id || 'unknown');
                  dispatch(clearCart());
                  setSuccess(true);
                }
              }}
              onError={(err) => {
                console.error('PayPal error:', err);
              }}
            />
          </div>
        ) : (
          <p className="text-center text-muted-foreground font-cormorant">{t('payment.fillDetails')}</p>
        )}
      </div>
    </div>
  );
};

const Payment = () => (
  <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'EUR' }}>
    <PaymentContent />
  </PayPalScriptProvider>
);

export default Payment;
