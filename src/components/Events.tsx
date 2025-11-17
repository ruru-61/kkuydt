import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Eye, FileText } from "lucide-react";
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
}];
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [showPoster, setShowPoster] = useState<string | null>(null);

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
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>;
            })}
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
        <Dialog open={!!showPoster} onOpenChange={() => setShowPoster(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-black/90">
              {showPoster && (
                <img
                  src={showPoster}
                  alt="Event Poster"
                  className="max-w-full max-h-[95vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default Events;