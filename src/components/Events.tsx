import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  participants: string;
  color: string;
}
const upcomingEvents: Event[] = [{
  title: "Speaking Club 🗣️",
  date: "1 Ekim 2024",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "primary"
}, {
  title: "Speaking Club 🗣️",
  date: "8 Ekim 2024",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "secondary"
}, {
  title: "Speaking Club 🗣️",
  date: "14 Ekim 2024",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "accent"
}, {
  title: "Speaking Club 🗣️",
  date: "22 Ekim 2024",
  location: "Microlot Café",
  description: "İngilizce, Fransızca, Arapça ve Türkçe masalarında konuşma pratiği yapın! Farklı dil seviyelerinden öğrencilerle tanışın.",
  participants: "İngilizce • Fransızca • Arapça • Türkçe",
  color: "highlight"
}];
const Events = () => {
  return <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-black">
          <span className="gradient-secondary bg-clip-text text-slate-50">Yaklaşan Etkinlikler</span>
        </h2>
        <p className="text-center text-xl mb-16 text-black">
          Heyecan dolu programlarımıza katılın! 🎉
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => <Card key={index} className={`border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer ${event.color === 'primary' ? 'border-primary/20 hover:border-primary' : event.color === 'secondary' ? 'border-secondary/20 hover:border-secondary' : event.color === 'accent' ? 'border-accent/20 hover:border-accent' : 'border-highlight/20 hover:border-highlight'}`}>
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
                    <span>19:00 – 21:00 • {event.participants}</span>
                  </div>
                </div>
                
                
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Events;