import { useState, useRef, useEffect } from "react";
import eventStudy from "@/assets/education-session.jpg";
import eventKaraoke from "@/assets/event-karaoke.jpg";
import eventCafe from "@/assets/event-cafe.jpg";
import studyEvent1 from "@/assets/study-event-1.jpg";
import studyEvent2 from "@/assets/study-event-2.jpg";
import studyEvent3 from "@/assets/study-event-3.jpg";
import studyEvent4 from "@/assets/study-event-4.jpg";

interface GalleryItem {
  image: string;
  title: string;
  emoji: string;
  popupImages: string[];
}

const galleryItems: GalleryItem[] = [{
  image: eventStudy,
  title: "Eğitimlerimiz",
  emoji: "📚",
  popupImages: [studyEvent1, studyEvent2, studyEvent3, studyEvent4]
}, {
  image: eventKaraoke,
  title: "Festivallerimiz",
  emoji: "🎉",
  popupImages: [studyEvent2, studyEvent4, studyEvent1, studyEvent3]
}, {
  image: eventCafe,
  title: "Speaking Clublarımız",
  emoji: "☕",
  popupImages: [studyEvent3, studyEvent1, studyEvent4, studyEvent2]
}];
const Gallery = () => {
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const isLastItem = index === galleryItems.length - 1;
    
    setPopupPosition({
      top: rect.top + window.scrollY,
      left: isLastItem ? rect.left - 320 : rect.right + 20
    });
    setActivePopup(index);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setActivePopup(null);
  };

  const handleMobileClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    
    setPopupPosition({
      top: rect.top + window.scrollY + rect.height / 2 - 150,
      left: window.innerWidth / 2 - 150
    });
    setActivePopup(activePopup === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && activePopup !== null) {
        const target = e.target as HTMLElement;
        if (!target.closest('.popup-gallery') && !target.closest('.gallery-item')) {
          setActivePopup(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, activePopup]);

  return <section className="py-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight sm:leading-tight md:leading-[1.15] mb-2 sm:mb-4 px-4">
          <span className="block gradient-primary bg-clip-text break-words text-slate-50">Geçmiş Etkinlikler</span>
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 md:mb-16 max-w-2xl mx-auto px-4">
          Unutulmaz anılarımızdan kareler 📸
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => <div key={index} ref={el => itemRefs.current[index] = el} className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(index, e)} onMouseLeave={handleMouseLeave} onClick={(e) => handleMobileClick(index, e)}>
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 sm:p-6">
                <div className="text-center text-card">
                  <span className="text-2xl sm:text-3xl md:text-4xl mb-2 block">{item.emoji}</span>
                  <p className="text-base sm:text-lg md:text-xl font-bold">{item.title}</p>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            Daha fazla fotoğraf için sosyal medya hesaplarımızı takip edin! 📱
          </p>
        </div>
      </div>
      
      {/* Floating Popup Galleries */}
      {activePopup !== null && (
        <div 
          className="popup-gallery fixed z-50 pointer-events-none"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            animation: 'fade-in 0.3s ease-out, scale-in 0.2s ease-out'
          }}
        >
          <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-primary/20 pointer-events-auto">
            <div className="grid grid-cols-2 gap-3 w-[300px]">
              {galleryItems[activePopup].popupImages.map((img, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    animation: `fade-in 0.3s ease-out ${imgIndex * 0.05}s backwards`
                  }}
                >
                  <img 
                    src={img} 
                    alt={`${galleryItems[activePopup].title} ${imgIndex + 1}`} 
                    className="w-full h-32 object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>;
};

export default Gallery;