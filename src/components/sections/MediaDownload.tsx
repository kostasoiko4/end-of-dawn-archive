import { Download, Image, FileText } from 'lucide-react';
import eod1 from '@/assets/band/eod1.jpg';
import eod2 from '@/assets/band/eod2.jpg';
import eod3 from '@/assets/band/eod3.jpg';
import eod4 from '@/assets/band/eod4.jpg';
import eod5 from '@/assets/band/eod5.jpg';
import eod6 from '@/assets/band/eod6.jpg';

const photos = [
  { src: eod1, title: 'Live Performance 1' },
  { src: eod2, title: 'Live Performance 2' },
  { src: eod3, title: 'Band Photo 1' },
  { src: eod4, title: 'Live Performance 3' },
  { src: eod5, title: 'Live Performance 4' },
  { src: eod6, title: 'Live Performance 5' },
];

const MediaDownload = () => {
  const handleDownload = (imageSrc: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `end-of-dawn-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="media" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="gothic-title text-3xl md:text-4xl text-center mb-4">
          Press & Media
        </h2>
        <div className="section-divider mb-12" />

        <div className="max-w-6xl mx-auto">
          {/* Info */}
          <div className="text-center mb-12">
            <p className="text-foreground/80 font-cormorant text-lg max-w-2xl mx-auto">
              High-resolution press photos and promotional materials available for download. 
              For press inquiries, please contact our management.
            </p>
          </div>

          {/* Quick Downloads */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn-outline-gothic text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Press Kit (PDF)
            </button>
            <button className="btn-outline-gothic text-sm flex items-center gap-2">
              <Image className="w-4 h-4" />
              Logo Pack (ZIP)
            </button>
            <button className="btn-outline-gothic text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              All Photos (ZIP)
            </button>
          </div>

          {/* Photo Grid */}
          <h3 className="gothic-subtitle text-xl text-center mb-8">Press Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="group relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => handleDownload(photo.src, photo.title)}
                    className="btn-gothic text-sm flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                  <p className="text-xs text-silver/80 font-cinzel">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaDownload;
