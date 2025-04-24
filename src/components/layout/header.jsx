import { useState } from 'react';
import { Input, Dropdown, Menu, Button } from 'antd';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiFilter,
  FiChevronDown,
} from 'react-icons/fi';
import { GiFlowerPot } from 'react-icons/gi';
import { FaLeaf, FaRegSmileBeam } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState('');
  const [activeLink, setActiveLink] = useState('home');

  const categories = [
    { label: 'Barchasi', key: 'all', icon: <GiFlowerPot /> },
    { label: 'Gullar', key: 'flowers', icon: <GiFlowerPot /> },
    { label: 'Atirgullar', key: 'roses', icon: <GiFlowerPot /> },
    { label: 'Lolalar', key: 'tulips', icon: <FaLeaf /> },
    { label: 'Sovgʻa toʻplamlari', key: 'gifts', icon: <FaRegSmileBeam /> },
  ];

  const userMenuItems = [
    { label: <Link to="/admin">Admin</Link>, key: 'profile' },
    { label: <Link to="/orders">Buyurtmalarim</Link>, key: 'orders' },
    { label: <Link to="/login">Kirish</Link>, key: 'sign-in' },
    {
      label: (
        <Link to="/register" className="text-green-600 font-medium">
          Roʻyxatdan oʻtish
        </Link>
      ),
      key: 'sign-up',
    },
  ];

  return (
    <header className="bg-gradient-to-r from-green-50 to-white border-b border-green-100 p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2 group">
        <GiFlowerPot className="text-3xl text-green-600 group-hover:text-green-700 transition-colors" />
        <h3 className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors">
          Guliston
        </h3>
      </Link>

      <nav className="flex space-x-6">
        {[
          { path: '/', name: 'Bosh sahifa', key: 'home' },
          { path: '/shop', name: 'Doʻkon', key: 'shop' },
          { path: '/about', name: 'Biz haqimizda', key: 'about' },
          { path: '/contact', name: 'Aloqa', key: 'contact' },
        ].map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`relative px-2 py-1 text-gray-700 hover:text-green-600 transition-colors ${activeLink === item.key ? 'text-green-600 font-medium' : ''}`}
            onClick={() => setActiveLink(item.key)}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <Input
          className="w-64 rounded-full border-gray-300 hover:border-green-400 focus:border-green-500 pl-10 pr-4 py-2"
          placeholder="Gullar qidiruvi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          prefix={<FiSearch className="text-gray-400" />}
        />

        <Dropdown menu={{ items: categories }} trigger={['click']}>
          <Button className="flex items-center space-x-1 bg-white border border-gray-300 hover:border-green-400 hover:text-green-600 rounded-full px-4 py-2 transition-colors">
            <FiFilter />
            <span>Kategoriyalar</span>
            <FiChevronDown className="text-xs" />
          </Button>
        </Dropdown>

        <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors relative">
          <FiShoppingCart className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </button>

        <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
          <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
            <FiUser className="text-xl" />
          </button>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
