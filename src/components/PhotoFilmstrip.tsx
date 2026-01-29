import { useRef } from "react";

// Import all photos from Gallery
import eventStudy from "@/assets/education-session.jpg";
import eventFestival from "@/assets/event-festival.jpg";
import eventCafe from "@/assets/event-cafe.jpg";
import studyEvent1 from "@/assets/study-event-1.jpg";
import studyEvent2 from "@/assets/study-event-2.jpg";
import studyEvent3 from "@/assets/study-event-3.jpg";
import studyEvent4 from "@/assets/study-event-4.jpg";
import festival1 from "@/assets/festival-1.jpg";
import festival2 from "@/assets/festival-2.jpg";
import festival3 from "@/assets/festival-3.jpg";
import festival4 from "@/assets/festival-4.jpg";
import festival5 from "@/assets/festival-5.jpg";
import festival6 from "@/assets/festival-6.jpg";
import festival7 from "@/assets/festival-7.jpg";
import festival8 from "@/assets/festival-8.jpg";
import festival9 from "@/assets/festival-9.jpg";
import festival10 from "@/assets/festival-10.jpg";
import festival11 from "@/assets/festival-11.jpg";
import festival12 from "@/assets/festival-12.jpg";
import festival13 from "@/assets/festival-13.jpg";
import festival14 from "@/assets/festival-14.jpg";
import festival15 from "@/assets/festival-15.jpg";
import festival16 from "@/assets/festival-16.jpg";
import festival17 from "@/assets/festival-17.jpg";
import festival18 from "@/assets/festival-18.jpg";
import festival19 from "@/assets/festival-19.jpg";
import festival20 from "@/assets/festival-20.jpg";
import festival21 from "@/assets/festival-21.jpg";
import speakingClub1 from "@/assets/speaking-club-1.jpg";
import speakingClub2 from "@/assets/speaking-club-2.jpg";
import speakingClub3 from "@/assets/speaking-club-3.jpg";
import speakingClub4 from "@/assets/speaking-club-4.jpg";
import speakingClub5 from "@/assets/speaking-club-5.jpg";
import speakingClub6 from "@/assets/speaking-club-6.jpg";
import speakingClub7 from "@/assets/speaking-club-7.jpg";
import speakingClub8 from "@/assets/speaking-club-8.jpg";
import speakingClub9 from "@/assets/speaking-club-9.jpg";
import speakingClub10 from "@/assets/speaking-club-10.jpg";
import speakingClub11 from "@/assets/speaking-club-11.jpg";
import speakingClub12 from "@/assets/speaking-club-12.jpg";

interface FilmstripPhoto {
  src: string;
  galleryId: number; // 0 = Eğitimlerimiz, 1 = Festivallerimiz, 2 = Speaking Clublarımız
}

const filmstripPhotos: FilmstripPhoto[] = [
  // Eğitimlerimiz (galleryId: 0)
  { src: eventStudy, galleryId: 0 },
  { src: studyEvent1, galleryId: 0 },
  { src: studyEvent2, galleryId: 0 },
  { src: studyEvent3, galleryId: 0 },
  { src: studyEvent4, galleryId: 0 },
  // Festivallerimiz (galleryId: 1)
  { src: eventFestival, galleryId: 1 },
  { src: festival1, galleryId: 1 },
  { src: festival2, galleryId: 1 },
  { src: festival3, galleryId: 1 },
  { src: festival4, galleryId: 1 },
  { src: festival5, galleryId: 1 },
  { src: festival6, galleryId: 1 },
  { src: festival7, galleryId: 1 },
  { src: festival8, galleryId: 1 },
  { src: festival9, galleryId: 1 },
  { src: festival10, galleryId: 1 },
  { src: festival11, galleryId: 1 },
  { src: festival12, galleryId: 1 },
  { src: festival13, galleryId: 1 },
  { src: festival14, galleryId: 1 },
  { src: festival21, galleryId: 1 },
  // Speaking Clublarımız (galleryId: 2)
  { src: eventCafe, galleryId: 2 },
  { src: speakingClub1, galleryId: 2 },
  { src: speakingClub2, galleryId: 2 },
  { src: speakingClub3, galleryId: 2 },
  { src: speakingClub4, galleryId: 2 },
  { src: speakingClub5, galleryId: 2 },
  { src: speakingClub6, galleryId: 2 },
  { src: speakingClub7, galleryId: 2 },
  { src: speakingClub8, galleryId: 2 },
  { src: speakingClub9, galleryId: 2 },
  { src: speakingClub10, galleryId: 2 },
  { src: speakingClub11, galleryId: 2 },
  { src: speakingClub12, galleryId: 2 },
  { src: festival15, galleryId: 2 },
  { src: festival16, galleryId: 2 },
  { src: festival17, galleryId: 2 },
  { src: festival18, galleryId: 2 },
  { src: festival19, galleryId: 2 },
  { src: festival20, galleryId: 2 },
];

interface PhotoFilmstripProps {
  onPhotoClick?: (galleryId: number) => void;
}

const PhotoFilmstrip = ({ onPhotoClick }: PhotoFilmstripProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePhotoClick = (galleryId: number) => {
    // Scroll to gallery section using id
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
    onPhotoClick?.(galleryId);
  };

  // Duplicate photos for seamless loop
  const duplicatedPhotos = [...filmstripPhotos, ...filmstripPhotos];

  return (
    <div className="filmstrip-wrapper relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-background/50 backdrop-blur-sm py-3 mb-6">
      <div 
        ref={containerRef}
        className="filmstrip-container flex gap-1"
      >
        {duplicatedPhotos.map((photo, index) => (
          <div
            key={index}
            className="filmstrip-item flex-shrink-0 cursor-pointer group"
            onClick={() => handlePhotoClick(photo.galleryId)}
          >
            <div className="relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:z-20">
              <img
                src={photo.src}
                alt={`Gallery photo ${index + 1}`}
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .filmstrip-wrapper {
          max-width: 100vw;
        }
        
        .filmstrip-container {
          width: max-content;
          animation: filmstrip-scroll 80s linear infinite;
        }
        
        .filmstrip-container:has(.filmstrip-item:hover) {
          animation-play-state: paused;
        }
        
        @keyframes filmstrip-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoFilmstrip;
