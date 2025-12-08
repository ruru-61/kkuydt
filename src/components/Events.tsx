import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Eye, ZoomIn, ZoomOut, Sparkles, Heart } from "lucide-react";
import passedStamp from "@/assets/passed-stamp.png";
import speakingClubNov1 from "@/assets/speaking-club-nov-1.jpg";
import speakingClubNov2 from "@/assets/speaking-club-nov-2.jpg";
import speakingClubNov3 from "@/assets/speaking-club-nov-3.jpg";
import speakingClubNov4 from "@/assets/speaking-club-nov-4.jpg";
import speakingClubNov5 from "@/assets/speaking-club-nov-5.jpg";
import speakingClubNov6 from "@/assets/speaking-club-nov-6.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  participants: string;
  color: string;
  eventPhotos?: string[];
  eventRecap?: string;
}

const pastEvents: Event[] = [
  {
    title: "Speaking Club 🗣️",
    date: "12 Kasım 2025",
    location: "Microlot Café",
    description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
    participants: "İngilizce • Fransızca • Arapça • Türkçe",
    color: "accent",
    eventPhotos: [speakingClubNov1, speakingClubNov2, speakingClubNov3, speakingClubNov4, speakingClubNov5, speakingClubNov6],
    eventRecap: "12 Kasım 2025 tarihinde Microlot Café'de gerçekleştirdiğimiz Speaking Club etkinliğinde harika bir gece geçirdik! Katılımcılar İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yaparak farklı dil seviyelerinden arkadaşlarla tanıştılar. Oyunlar ve samimi sohbetlerle dolu keyifli bir akşam oldu. Katılan herkese teşekkürler! 💬✨"
  },
  {
    title: "Speaking Club 🗣️",
    date: "22 Ekim 2025",
    location: "Microlot Café",
    description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
    participants: "İngilizce • Fransızca • Arapça • Türkçe",
    color: "secondary",
    eventPhotos: [],
    eventRecap: "Etkinlik detayları yakında eklenecek."
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Thank You Banner */}
        <div className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 p-1">
          <div className="relative rounded-[calc(1.5rem-4px)] bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-8 py-16 md:py-20 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-8 animate-pulse">
              <Sparkles className="w-8 h-8 text-amber-400" />
            </div>
            <div className="absolute top-8 right-12 animate-pulse delay-300">
              <Sparkles className="w-6 h-6 text-rose-400" />
            </div>
            <div className="absolute bottom-8 left-16 animate-pulse delay-500">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            </div>
            <div className="absolute bottom-6 right-8 animate-pulse delay-700">
              <Sparkles className="w-7 h-7 text-orange-400" />
            </div>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 animate-pulse delay-200">
              <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div className="absolute top-1/3 right-6 animate-pulse delay-400">
              <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
            </div>
            
            {/* Main content */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent leading-tight">
                Bu Dönemin Etkinliklerine Katıldığınız İçin Teşekkürler!
              </h2>
              <p className="text-lg md:text-xl text-amber-800/80 max-w-2xl mx-auto mb-4">
                Harika bir dönem geçirdik! Şubat ayında yeni etkinliklerimizle tekrar buluşmak üzere...
              </p>
              <div className="flex items-center justify-center gap-2 text-amber-700">
                <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
                <span className="text-lg font-medium">Görüşmek üzere!</span>
                <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight tracking-tight text-foreground">
          <span className="gradient-secondary bg-clip-text text-slate-50 block break-words">Geçmiş Etkinlikler</span>
        </h2>
        <p className="text-center text-xl mb-16 text-black">
          Daha önce gerçekleştirdiğimiz etkinlikler 📸
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pastEvents.map((event, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <Card className={`border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer relative overflow-hidden h-full opacity-60 ${event.color === 'primary' ? 'border-primary/20 hover:border-primary' : event.color === 'secondary' ? 'border-secondary/20 hover:border-secondary' : event.color === 'accent' ? 'border-accent/20 hover:border-accent' : 'border-highlight/20 hover:border-highlight'}`}>
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <img 
                      src={passedStamp} 
                      alt="Passed" 
                      className="w-64 h-64 object-contain opacity-80"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-start justify-between gap-4">
                      <span className={event.color === 'primary' ? 'text-primary' : event.color === 'secondary' ? 'text-secondary' : event.color === 'accent' ? 'text-accent' : 'text-highlight'}>
                        {event.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full mt-4 z-20 relative"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Etkinliği İncele
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">Etkinlik Özeti</h3>
                            <p className="text-muted-foreground">{event.eventRecap}</p>
                          </div>
                          
                          {event.eventPhotos && event.eventPhotos.length > 0 && (
                            <div>
                              <h3 className="text-lg font-semibold mb-4">Etkinlikten Kareler</h3>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {event.eventPhotos.map((photo, idx) => (
                                  <img
                                    key={idx}
                                    src={photo}
                                    alt={`${event.title} - Fotoğraf ${idx + 1}`}
                                    className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                                    onClick={() => setZoomedImage(photo)}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Image Zoom Dialog */}
        <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-black/90">
              {zoomedImage && (
                <img
                  src={zoomedImage}
                  alt="Zoomed event photo"
                  className="max-w-full max-h-[95vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Events;