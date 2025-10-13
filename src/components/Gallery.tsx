import { useState } from "react";
import eventStudy from "@/assets/event-study.jpg";
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
}
const galleryItems: GalleryItem[] = [{
  image: eventStudy,
  title: "Eğitimlerimiz",
  emoji: "📚"
}, {
  image: eventKaraoke,
  title: "Festivallerimiz",
  emoji: "🎉"
}, {
  image: eventCafe,
  title: "Speaking Clublarımız",
  emoji: "☕"
}];
const studyGalleryImages = [studyEvent1, studyEvent2, studyEvent3, studyEvent4];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-primary bg-clip-text text-slate-50">Geçmiş Etkinlikler</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Unutulmaz anılarımızdan kareler 📸
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="text-center text-card">
                  <p className="text-4xl mb-2">{item.emoji}</p>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
              </div>
              
              {/* Floating Gallery Window - Only for first item */}
              {index === 0 && hoveredIndex === 0 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full z-50 pointer-events-none animate-in slide-in-from-left-8 fade-in duration-300">
                  <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-border/50">
                    <div className="grid grid-cols-2 gap-3 w-64">
                      {studyGalleryImages.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <img 
                            src={img} 
                            alt={`Eğitim etkinliği ${imgIndex + 1}`}
                            className="w-full h-28 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Daha fazla fotoğraf için sosyal medya hesaplarımızı takip edin! 📱
          </p>
        </div>
      </div>
    </section>;
};
export default Gallery;