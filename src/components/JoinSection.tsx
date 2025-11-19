import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Globe } from "lucide-react";
const JoinSection = () => {
  return <section id="join" className="py-24 px-4 gradient-hero relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-20 animate-float opacity-30">
        <Sparkles className="w-16 h-16 text-card" />
      </div>
      <div className="absolute bottom-10 right-20 animate-float-delayed opacity-30">
        <Heart className="w-20 h-20 text-card" />
      </div>
      <div className="absolute top-1/2 left-10 animate-float opacity-20">
        <Globe className="w-24 h-24 text-card" />
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-card mb-8 drop-shadow-2xl">
          Aramıza Katıl! 🌟
        </h2>
        
        <p className="text-xl md:text-2xl text-card/90 mb-6 drop-shadow-lg leading-relaxed">
          Yeni arkadaşlar edin, farklı dilleri öğren, dünyayı keşfet!
        </p>
        
        <p className="text-lg md:text-xl text-card/80 mb-12 drop-shadow-lg max-w-2xl mx-auto">
          Her hafta düzenlenen etkinliklerimiz, sosyal aktivitelerimiz ve öğrenme atölyelerimizle 
          seni bekliyoruz. Formu doldurup ailemizin bir parçası ol! 💫
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="xl" className="text-xl font-bold shadow-2xl" asChild>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe67oMMHtY8N5UARMoFRSd-RqUdQ8CJiOIISMks4VvEyABHcg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              Üyelik Formu 📝
            </a>
          </Button>
          
          
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-card drop-shadow-lg">350+</p>
            <p className="text-card/80 mt-2 drop-shadow-lg">Aktif Üye</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-card drop-shadow-lg">6+</p>
            <p className="text-card/80 mt-2 drop-shadow-lg">Yıllık Deneyim  </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-card drop-shadow-lg">3+</p>
            <p className="text-card/80 mt-2 drop-shadow-lg">Dil Programı</p>
          </div>
        </div>
      </div>
    </section>;
};
export default JoinSection;