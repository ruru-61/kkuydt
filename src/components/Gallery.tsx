import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import eventStudy from "@/assets/education-session.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventCafe from "@/assets/event-cafe.jpg";
import studyEvent1 from "@/assets/study-event-1.jpg";
import studyEvent2 from "@/assets/study-event-2.jpg";
import studyEvent3 from "@/assets/study-event-3.jpg";
import studyEvent4 from "@/assets/study-event-4.jpg";
import festival1 from "@/assets/festival-1.jpg";
import festival2 from "@/assets/festival-2.jpg";
import festival3 from "@/assets/festival-3.jpg";
import festival4 from "@/assets/festival-4.jpg";
import festival5 from "@/assets/festival-5.jpg";
import festival6 from "@/assets/festival-6.jpg";
import festival7 from "@/assets/festival-7.jpg";
import festival8 from "@/assets/festival-8.jpg";
import festival9 from "@/assets/festival-9.jpg";
import festival10 from "@/assets/festival-10.jpg";
import speakingClub1 from "@/assets/speaking-club-1.jpg";
import speakingClub2 from "@/assets/speaking-club-2.jpg";
import speakingClub3 from "@/assets/speaking-club-3.jpg";
import speakingClub4 from "@/assets/speaking-club-4.jpg";
import speakingClub5 from "@/assets/speaking-club-5.jpg";
import speakingClub6 from "@/assets/speaking-club-6.jpg";
import speakingClub7 from "@/assets/speaking-club-7.jpg";
import speakingClub8 from "@/assets/speaking-club-8.jpg";
import speakingClub9 from "@/assets/speaking-club-9.jpg";
import speakingClub10 from "@/assets/speaking-club-10.jpg";

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
  image: eventFestival,
  title: "Festivallerimiz",
  emoji: "🎉",
  popupImages: [festival1, festival2, festival3, festival4, festival5, festival6, festival7, festival8, festival9, festival10]
}, {
  image: eventCafe,
  title: "Speaking Clublarımız",
  emoji: "☕",
  popupImages: [speakingClub1, speakingClub2, speakingClub3, speakingClub4, speakingClub5, speakingClub6, speakingClub7, speakingClub8, speakingClub9, speakingClub10]
}];
const Gallery = () => {
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [openGallery, setOpenGallery] = useState<number | null>(null);
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
    setOpenGallery(index);
  };

  const handleItemClick = (index: number) => {
    if (!isMobile) {
      setOpenGallery(index);
    }
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
          {galleryItems.map((item, index) => <div key={index} ref={el => itemRefs.current[index] = el} className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer" onMouseEnter={(e) => handleMouseEnter(index, e)} onMouseLeave={handleMouseLeave} onClick={(e) => {
            handleMobileClick(index, e);
            handleItemClick(index);
          }}>
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
      
      {/* Floating Popup Galleries - Desktop Hover Only */}
      {activePopup !== null && !isMobile && (
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

      {/* Photo Gallery Modal */}
      {openGallery !== null && (
        <Dialog open={openGallery !== null} onOpenChange={() => setOpenGallery(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <span className="text-3xl">{galleryItems[openGallery].emoji}</span>
                {galleryItems[openGallery].title}
              </DialogTitle>
            </DialogHeader>
            
            <div className={`grid gap-4 mt-4 ${
              galleryItems[openGallery].popupImages.length <= 4 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-2 md:grid-cols-3'
            }`}>
              {galleryItems[openGallery].popupImages.map((img, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={img} 
                    alt={`${galleryItems[openGallery].title} ${imgIndex + 1}`} 
                    className={`w-full object-cover ${
                      galleryItems[openGallery].popupImages.length <= 4 
                        ? 'h-64 md:h-80' 
                        : 'h-48'
                    }`}
                  />
                </div>
              ))}
              
              {/* Add More Photos Button */}
              <button className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-dashed border-primary/30 bg-muted/30 hover:bg-muted/50 flex flex-col items-center justify-center h-48 gap-2 group">
                <Upload className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Add Photos
                </span>
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>;
};

export default Gallery;