import { useState } from "react";
import eventStudy from "@/assets/event-study.jpg";
import eventKaraoke from "@/assets/event-karaoke.jpg";
import eventCafe from "@/assets/event-cafe.jpg";
import studyEvent1 from "@/assets/study-event-1.jpg";
import studyEvent2 from "@/assets/study-event-2.jpg";
import studyEvent3 from "@/assets/study-event-3.jpg";
import studyEvent4 from "@/assets/study-event-4.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
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
              onClick={() => index === 0 && setIsGalleryOpen(true)}
            >
              <img src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="text-center text-card">
                  <span className="text-4xl mb-2 block">{item.emoji}</span>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Daha fazla fotoğraf için sosyal medya hesaplarımızı takip edin! 📱
          </p>
        </div>
      </div>
      
      {/* Popup Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="grid grid-cols-2 gap-4 p-2">
            {studyGalleryImages.map((img, imgIndex) => (
              <div key={imgIndex} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={img} 
                  alt={`Eğitim etkinliği ${imgIndex + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
export default Gallery;