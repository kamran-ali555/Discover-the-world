import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000',
    title: 'Explore the World\'s Most Beautiful Places',
    subtitle: 'Create unforgettable memories with our curated travel experiences'
  },
  {
    image: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&w=2000',
    title: 'Discover Hidden Gems',
    subtitle: 'Journey to extraordinary destinations off the beaten path'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000',
    title: 'Experience Paradise',
    subtitle: 'Relax and unwind in the world\'s most beautiful beaches'
  }
];

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
              </div>

              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-3xl">
                  <h1 
                    className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up"
                    style={{animation: 'fadeInUp 1s ease-out'}}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="text-xl md:text-2xl mb-8 animate-fade-in-up"
                    style={{animation: 'fadeInUp 1s ease-out 0.3s'}}
                  >
                    {slide.subtitle}
                  </p>
                  <div 
                    className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up"
                    style={{animation: 'fadeInUp 1s ease-out 0.6s'}}
                  >
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Start Planning
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;