import { Button } from "@/components/ui/button";
import { Globe, Languages, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Language learning community illustration" className="w-full h-full object-cover" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-highlight/30 backdrop-blur-sm flex items-center justify-center">
          <Globe className="w-10 h-10 text-card" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-20 animate-float-delayed">
        <div className="w-24 h-24 rounded-full bg-secondary/30 backdrop-blur-sm flex items-center justify-center">
          <Languages className="w-12 h-12 text-card" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-card drop-shadow-2xl leading-tight">
            Yabancı Diller <br />Topluluğu
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 text-card/90 text-lg md:text-2xl font-semibold">
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Languages className="w-6 h-6" />
              <span>3+ Dil</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users className="w-6 h-6" />
              <span>350+ Aktif Üye</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Globe className="w-6 h-6" />
              <span>6+ Yıllık Deneyim</span>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-card font-medium drop-shadow-lg">
            Farklı kültürlerden öğrencileri bir araya getirerek <br className="hidden md:block" />
            dil öğrenme sürecini sosyal ve eğlenceli hale getiriyoruz! 🌍
          </p>
          
          <div className="pt-8">
            <Button variant="hero" size="xl" className="text-xl font-bold" onClick={() => document.getElementById('join')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Topluluğa Katıl 🚀
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-card/50 flex items-start justify-center p-2">
          <div className="w-2 h-3 rounded-full bg-card/50" />
        </div>
      </div>
    </section>;
};
export default Hero;