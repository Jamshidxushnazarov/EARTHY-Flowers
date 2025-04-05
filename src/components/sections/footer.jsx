import {
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SendOutlined, // Telegram ikonkasi
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1️⃣ Brend va Tavsif */}
        <div>
          <h2 className="text-2xl font-bold">FlowerShop </h2>
          <p className="mt-2 text-gray-400">
            Tabiiy gullar va nafis sovg‘alar do‘koni. Sizga eng chiroyli
            gullarni yetkazib beramiz!
          </p>
        </div>

        {/* 2️⃣ Tezkor Havolalar */}
        <div>
          <h3 className="text-xl font-semibold">Tezkor havolalar</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Bosh sahifa
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-white">
                Gullar
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Aloqa
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Aloqa Ma'lumotlari */}
        <div>
          <h3 className="text-xl font-semibold">Biz bilan bog‘laning</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <PhoneOutlined className="mr-2" /> +998 90 123 45 67
            </li>
            <li>
              <MailOutlined className="mr-2" /> info@flowershop.uz
            </li>
            <li>
              <EnvironmentOutlined className="mr-2" /> Toshkent, O‘zbekiston
            </li>
          </ul>
        </div>

        {/* 4️⃣ Ijtimoiy Tarmoqlar */}
        <div>
          <h3 className="text-xl font-semibold">Ijtimoiy tarmoqlar</h3>
          <div className="mt-2 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a
              href="https://t.me/flowershop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SendOutlined className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Pastki Qism */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} FlowerShop. Barcha huquqlar
        himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
