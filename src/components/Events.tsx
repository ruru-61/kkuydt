import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Eye, FileText, ZoomIn, ZoomOut, Sparkles, Heart } from "lucide-react";
import passedStamp from "@/assets/passed-stamp.png";
import fallfestPoster from "@/assets/fallfest-poster.png";
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
  poster?: string;
}
const upcomingEvents: Event[] = [{
  title: "Speaking Club 🗣️",
  date: "22 Ekim 2025",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "secondary",
  eventPhotos: [],
  eventRecap: "Etkinlik detayları yakında eklenecek."
}, {
  title: "Speaking Club 🗣️",
  date: "12 Kasım 2025",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "accent",
  eventPhotos: [speakingClubNov1, speakingClubNov2, speakingClubNov3, speakingClubNov4, speakingClubNov5, speakingClubNov6],
  eventRecap: "12 Kasım 2025 tarihinde Microlot Café'de gerçekleştirdiğimiz Speaking Club etkinliğinde harika bir gece geçirdik! Katılımcılar İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yaparak farklı dil seviyelerinden arkadaşlarla tanıştılar. Oyunlar ve samimi sohbetlerle dolu keyifli bir akşam oldu. Katılan herkese teşekkürler! 💬✨"
}, {
  title: "Fallfest 🍂",
  date: "20 Kasım 2025",
  location: "Gölet Kafe",
  description: "Into Community tarafından gerçekleştirilecek olan bu festivale katılın, birbirinden farklı standlarda ve etkinliklerde arkadaşlarınızla beraber eğlenin!",
  participants: "18:00 - 22:00",
  color: "primary",
  eventPhotos: [],
  eventRecap: "Etkinlik detayları yakında eklenecek.",
  poster: fallfestPoster
}, {
  title: "Speaking Club 🗣️",
  date: "20 Kasım 2025",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "19:00 - 21:00",
  color: "secondary",
  eventPhotos: [],
  eventRecap: "Etkinlik detayları yakında eklenecek."
}, {
  title: "Speaking Club 🗣️",
  date: "3 Aralık 2025",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "19:00 - 21:00",
  color: "accent",
  eventPhotos: [],
  eventRecap: "Etkinlik detayları yakında eklenecek."
}];
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [showPoster, setShowPoster] = useState<string | null>(null);
  const [posterZoom, setPosterZoom] = useState(100);
  const [posterPosition, setPosterPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const isEventPassed = (dateString: string) => {
    const [day, month, year] = dateString.split(' ');
    const monthMap: { [key: string]: number } = {
      'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
      'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
    };
    const eventDate = new Date(parseInt(year), monthMap[month], parseInt(day));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  const getEventDate = (dateString: string) => {
    const [day, month, year] = dateString.split(' ');
    const monthMap: { [key: string]: number } = {
      'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
      'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
    };
    return new Date(parseInt(year), monthMap[month], parseInt(day));
  };

  const sortedEvents = [...upcomingEvents].sort((a, b) => {
    const dateA = getEventDate(a.date);
    const dateB = getEventDate(b.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const aIsPassed = dateA < today;
    const bIsPassed = dateB < today;
    
    // If both passed or both upcoming, sort by date
    if (aIsPassed && bIsPassed) {
      return dateA.getTime() - dateB.getTime(); // Oldest passed first
    }
    if (!aIsPassed && !bIsPassed) {
      return dateA.getTime() - dateB.getTime(); // Soonest upcoming first
    }
    
    // Passed events come before upcoming events
    return aIsPassed ? -1 : 1;
  });

  // Find the index of the latest passed event (the last passed event before upcoming ones)
  const passedEvents = sortedEvents.filter(event => isEventPassed(event.date));
  const startIndex = passedEvents.length > 0 ? passedEvents.length - 1 : 0;

  return <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight tracking-tight text-foreground">
          <span className="gradient-secondary bg-clip-text text-slate-50 block break-words">Yaklaşan Etkinlikler</span>
        </h2>
        <p className="text-center text-xl mb-16 text-black">
          Heyecan dolu programlarımıza katılın! 🎉
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
            startIndex: startIndex,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {sortedEvents.map((event, index) => {
              const isPassed = isEventPassed(event.date);
              return <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <Card className={`border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer relative overflow-hidden h-full ${isPassed ? 'opacity-60' : ''} ${event.color === 'primary' ? 'border-primary/20 hover:border-primary' : event.color === 'secondary' ? 'border-secondary/20 hover:border-secondary' : event.color === 'accent' ? 'border-accent/20 hover:border-accent' : 'border-highlight/20 hover:border-highlight'}`}>
                  {isPassed && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <img 
                        src={passedStamp} 
                        alt="Passed" 
                        className="w-64 h-64 object-contain opacity-80"
                      />
                    </div>
                  )}
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
                    
                    {event.poster && (
                      <Button 
                        variant="outline" 
                        className="w-full mt-4"
                        onClick={() => setShowPoster(event.poster || null)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Etkinlik Hakkında
                      </Button>
                    )}
                    
                    {isPassed && (
                      <Dialog>
                        <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full mt-8 z-20 relative"
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
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>;
            })}
            
            {/* Thank You Banner as last carousel item */}
            <CarouselItem className="pl-4 md:basis-1/2">
              <Card className="border-2 border-amber-300/40 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-rose-950/30 h-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-amber-400/60">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div className="absolute top-4 right-4 text-rose-400/60">
                  <Heart className="w-6 h-6 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 text-rose-400/60">
                  <Heart className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="absolute bottom-4 right-4 text-amber-400/60">
                  <Sparkles className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-center gap-2 text-amber-500">
                    <Sparkles className="w-8 h-8" />
                    <Heart className="w-8 h-8 text-rose-500" />
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                    Bu Dönemin Etkinliklerine Katıldığınız İçin Teşekkürler!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Şubat'ta yeni etkinliklerle görüşmek üzere! 💫
                  </p>
                </div>
              </Card>
            </CarouselItem>
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

        {/* Poster View Dialog */}
        <Dialog open={!!showPoster} onOpenChange={() => { 
          setShowPoster(null); 
          setPosterZoom(100); 
          setPosterPosition({ x: 0, y: 0 });
          setIsDragging(false);
        }}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
            <div 
              className="relative w-full h-full flex items-center justify-center bg-black/90 overflow-auto"
              onWheel={(e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -25 : 25;
                setPosterZoom(prev => Math.min(Math.max(prev + delta, 50), 200));
              }}
              onMouseDown={(e) => {
                setIsDragging(true);
                setDragStart({ x: e.clientX - posterPosition.x, y: e.clientY - posterPosition.y });
              }}
              onMouseMove={(e) => {
                if (isDragging) {
                  setPosterPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                  });
                }
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {showPoster && (
                <img
                  src={showPoster}
                  alt="Event Poster"
                  style={{ 
                    transform: `scale(${posterZoom / 100}) translate(${posterPosition.x}px, ${posterPosition.y}px)`,
                    pointerEvents: 'none'
                  }}
                  className="transition-transform duration-200 max-w-full max-h-[95vh] object-contain select-none"
                  draggable={false}
                />
              )}
              <div className="absolute bottom-4 right-4 flex gap-2 z-50">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setPosterZoom(Math.min(posterZoom + 25, 200))}
                  disabled={posterZoom >= 200}
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setPosterZoom(Math.max(posterZoom - 25, 50))}
                  disabled={posterZoom <= 50}
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default Events;