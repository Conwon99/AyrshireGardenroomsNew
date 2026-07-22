import { Badge } from "@/components/Badge";
import { TestimonialsCarousel } from "@/sections/ExperienceSection/components/TestimonialsCarousel";

export const ExperienceImage = () => {
  return (
    <div className="relative self-start box-border caret-transparent overflow-hidden rounded-[20px]">
      <div className="relative">
        <img
          src="/imgs/WhatsApp Image 2025-12-27 at 4.02.59 PM.jpeg"
          alt="Ayrshire Garden Rooms team working on a garden room installation in Ayrshire"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.03587px] md:scale-[1.03477px]"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: '#323232',
            mixBlendMode: 'multiply',
            opacity: 0.4
          }}
        ></div>
      </div>
      <Badge />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};
