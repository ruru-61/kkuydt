import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
const MissionVision = () => {
  return <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-primary bg-clip-text text-blue-800">
          Misyon & Vizyon
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <CardHeader className="space-y-4">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                <Target className="w-8 h-8 text-card" />
              </div>
              <CardTitle className="text-3xl text-primary">Misyonumuz</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-foreground/80">
              Farklı kültürlerden öğrencileri bir araya getirerek dil öğrenme sürecini sosyal ve eğlenceli hale getirmek. 
              Öğrencilerimizin hem akademik hem de sosyal gelişimlerine katkıda bulunarak küresel vatandaşlar yetiştirmek.
            </CardContent>
          </Card>
          
          <Card className="border-2 border-accent/20 hover:border-accent hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <CardHeader className="space-y-4">
              <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center">
                <Eye className="w-8 h-8 text-card" />
              </div>
              <CardTitle className="text-3xl text-accent">Vizyonumuz</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-foreground/80">
              Üniversitemizin en aktif ve tanınan topluluklarından biri olmak. 
              Öğrencilerimizin farklı dillerde kendini ifade edebildiği, uluslararası etkinliklere ev sahipliği yapan bir merkez olmak.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default MissionVision;