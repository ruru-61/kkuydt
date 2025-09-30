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

const upcomingEvents: Event[] = [
  {
    title: "İngilizce Konuşma Kulübü",
    date: "15 Ocak 2025",
    location: "Kampüs Kafe",
    description: "Her seviyeden öğrencilerin rahatça İngilizce pratik yapabileceği sohbet etkinliği. Kahve eşliğinde keyifli bir öğrenme deneyimi!",
    participants: "25",
    color: "primary"
  },
  {
    title: "Fransızca Film Gecesi 🎬",
    date: "22 Ocak 2025",
    location: "Sinema Salonu",
    description: "Klasik bir Fransız filmi izleyip tartışacağız. Alt yazılı gösterim ve kültürel sohbet!",
    participants: "40",
    color: "secondary"
  },
  {
    title: "Çok Kültürlü Yemek Festivali",
    date: "5 Şubat 2025",
    location: "Öğrenci Merkezi",
    description: "Farklı ülkelerden geleneksel yemekler, müzik ve dans performansları. Kültürler arası dostluk şenliği!",
    participants: "100+",
    color: "accent"
  },
  {
    title: "İspanyolca Karaoke 🎤",
    date: "12 Şubat 2025",
    location: "Etkinlik Salonu",
    description: "Latin müzikleri eşliğinde eğlenceli bir karaoke gecesi. Şarkı söyleyerek İspanyolca pratiği!",
    participants: "30",
    color: "highlight"
  }
];

const Events = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          <span className="gradient-secondary bg-clip-text text-transparent">Yaklaşan Etkinlikler</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Heyecan dolu programlarımıza katılın! 🎉
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index}
              className={`border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer ${
                event.color === 'primary' ? 'border-primary/20 hover:border-primary' :
                event.color === 'secondary' ? 'border-secondary/20 hover:border-secondary' :
                event.color === 'accent' ? 'border-accent/20 hover:border-accent' :
                'border-highlight/20 hover:border-highlight'
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-start justify-between gap-4">
                  <span className={
                    event.color === 'primary' ? 'text-primary' :
                    event.color === 'secondary' ? 'text-secondary' :
                    event.color === 'accent' ? 'text-accent' :
                    'text-highlight'
                  }>
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
                    <span>{event.participants} katılımcı bekleniyor</span>
                  </div>
                </div>
                
                <Button 
                  variant={event.color as any} 
                  className="w-full mt-4"
                >
                  Katılmak İstiyorum!
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
