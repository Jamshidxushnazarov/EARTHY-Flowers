import { heroData } from '../../constants/heroData';
import { Carousel } from 'antd';

const Hero = () => {
  return (
    <Carousel
      autoplay
      infinite
      autoplaySpeed={6000} // Har bir slayd 4 soniyada almashadi
      speed={2000} // Silliq o‘tish uchun 1 soniya
      arrows
      pauseOnHover={false} // Sichqoncha kelsa ham slayd davom etsin
    >
      {heroData.map((hero) => (
        <div key={hero.id} className="relative w-full h-screen">
          {/* Background video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={hero.videoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-end h-full px-20 pb-50 text-white bg-black/30">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-4">{hero.title}</h1>
              <p className="text-lg mb-6">{hero.description}</p>
              <button className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
                {hero.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
