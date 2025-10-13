import { Instagram, Mail, Phone, Linkedin } from "lucide-react";
import xLogo from "@/assets/x-logo.png";
const Footer = () => {
  return <footer className="bg-foreground/5 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-slate-50">
              Yabancı Diller Topluluğu
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dil öğrenme sürecini sosyal ve eğlenceli hale getiren, 
              kültürlerarası dostluk köprüleri kuran üniversite topluluğu.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-black">İletişim</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <a href="mailto:info@ydtoplulugu.edu.tr" className="hover:text-primary transition-colors">contactkkuydt@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 text-accent" />
                <span>0545 449 09 55</span>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-black">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kku.ydt?utm_source=ig_web_button_share_sheet&igsh=MXFnNmo4YmwxbnR1eA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-card" />
              </a>
              
              <a href="https://x.com/kkuydt?fbclid=PAZXh0bgNhZW0CMTEAAad-pMphLlpHZhfHNxIvvPCmrKaHSGhhSrhoZQ8E5q7lKhrK8uJjdHrdmZXXeg_aem_7e6PGz4kbf57F5OnZC2puA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="X">
                <img src={xLogo} alt="X Logo" className="w-8 h-8" />
              </a>
              
              <a href="https://www.linkedin.com/in/k%C4%B1r%C4%B1kkale-%C3%BCniversitesi-yabanc%C4%B1-diller-toplulu%C4%9Fu-259b60381" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-card" />
              </a>
              
              
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Etkinlik duyuruları ve güncellemeler için bizi takip edin! ✨
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 Yabancı Diller Topluluğu. Tüm hakları saklıdır.</p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;