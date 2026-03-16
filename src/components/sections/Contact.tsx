import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { Send, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = useSelector((state: RootState) => state.content.contact);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
    .sendForm(import.meta.env.VITE_API_MAIL_SERVICE_ID, import.meta.env.VITE_API_MAIL_TEMPLATE_ID, formRef.current, {
      publicKey: import.meta.env.VITE_API_MAIL_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );

    toast.success(t('contact.success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-background to-charcoal" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          {t('contact.title')}
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-cinzel text-xl text-silver mb-6">{t('contact.getInTouch')}</h3>
            <p className="text-foreground/80 font-cormorant text-lg mb-8">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-cinzel text-silver text-sm tracking-wider">{t('contact.generalInquiries')}</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-cinzel text-silver text-sm tracking-wider">{t('contact.phone')}</h4>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-cinzel text-silver mb-2 tracking-wider">
                  {t('contact.name')}
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-gothic" placeholder={t('contact.yourName')} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-cinzel text-silver mb-2 tracking-wider">
                  {t('contact.email')}
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-gothic" placeholder={t('contact.yourEmail')} />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-cinzel text-silver mb-2 tracking-wider">
                  {t('contact.subject')}
                </label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="input-gothic">
                  <option value="">{t('contact.selectSubject')}</option>
                  <option value="Booking Inquiry">{t('contact.booking')}</option>
                  <option value="Press/Media">{t('contact.press')}</option>
                  <option value="Merchandise">{t('contact.merchandise')}</option>
                  <option value="General Questions">{t('contact.general')}</option>
                  <option value="Other">{t('contact.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-cinzel text-silver mb-2 tracking-wider">
                  {t('contact.message')}
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-gothic resize-none" placeholder={t('contact.yourMessage')} />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-gothic w-full flex items-center justify-center gap-2 disabled:opacity-50">
                {isSubmitting ? (
                  <span>{t('contact.sending')}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t('contact.send')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
