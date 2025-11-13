import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import passedStamp from "@/assets/passed-stamp.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  participants: string;
  color: string;
}
const upcomingEvents: Event[] = [{
  title: "Fallfest 🍂",
  date: "20 Kasım 2025",
  location: "Gölet Kafe",
  description: "Into Community tarafından gerçekleştirilecek olan bu festivale katılın, birbirinden farklı standlarda ve etkinliklerde arkadaşlarınızla beraber eğlenin!",
  participants: "18:00 - 22:00",
  color: "primary"
}, {
  title: "Speaking Club 🗣️",
  date: "22 Ekim 2025",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "secondary"
}, {
  title: "Speaking Club 🗣️",
  date: "12 Kasım 2025",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "accent"
}, {
  title: "Speaking Club 🗣️",
  date: "14 Ekim 2024",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "highlight"
}, {
  title: "Speaking Club 🗣️",
  date: "22 Ekim 2024",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "primary"
}];
const Events = () => {
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
      return dateB.getTime() - dateA.getTime(); // Most recent passed first
    }
    if (!aIsPassed && !bIsPassed) {
      return dateA.getTime() - dateB.getTime(); // Soonest upcoming first
    }
    
    // Passed events come before upcoming events
    return aIsPassed ? -1 : 1;
  });

  // Find the index of the latest passed event to start carousel there
  const latestPassedIndex = sortedEvents.findIndex((event, index) => {
    const isPassed = isEventPassed(event.date);
    const nextIsUpcoming = index < sortedEvents.length - 1 && !isEventPassed(sortedEvents[index + 1].date);
    return isPassed && nextIsUpcoming;
  });
  
  const startIndex = latestPassedIndex >= 0 ? latestPassedIndex : 0;

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
                  </CardContent>
                </Card>
              </CarouselItem>;
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>;
};
export default Events;