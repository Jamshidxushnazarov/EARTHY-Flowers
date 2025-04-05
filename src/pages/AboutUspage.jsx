import flowers from '../assets/images/image-flower.webp';

const AboutUsPage = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${flowers})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>

      <div className="relative z-10 max-w-4xl text-center px-6 py-12 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          🌸 Gullar – Muhabbat, Go‘zallik va Nafosat Timsoli
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Gullar tabiatning eng nafis yaratilmalaridan biridir. Ular insonlarga
          quvonch, muhabbat va iliqlik ulashadi. Har bir gul o‘ziga xos ma’noga
          ega bo‘lib, ba’zilari sevgi va sadoqatni, ba’zilari esa do‘stlik va
          hurmatni ifodalaydi.
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-4">
          Biz faqatgina eng yangi va sifatli gullarni taqdim etamiz. Ularni
          sevgi va mehr bilan tanlab, har bir mijozimiz uchun o‘ziga xos
          buketlar yaratamiz.
        </p>
        <p className="text-lg md:text-xl text-yellow-400 font-semibold mt-6">
          📍 Har bir buket – san’at, har bir gul – sevgi!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
