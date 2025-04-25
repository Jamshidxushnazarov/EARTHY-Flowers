import React, { useState, useEffect } from 'react';
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardOutlined /> },
    { name: 'Manage Users', icon: <UserOutlined /> },
    { name: 'Settings', icon: <SettingOutlined /> },
    { name: 'Reports', icon: <ProfileOutlined /> },
    { name: 'Analytics', icon: <BarChartOutlined /> },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const changePage = (page) => {
    setActivePage(page);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const renderContent = () => (
    <h2 className="text-2xl font-semibold">{activePage} Page</h2>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-full transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-20' : 'w-64'} hidden md:flex flex-col`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <h1 className="text-xl font-bold">A</h1>
        </div>
        <ul className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => changePage(item.name)}
              className={`flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer transition-all ${
                activePage === item.name ? 'bg-gray-700' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isSidebarOpen && (
                <span className="ml-3 whitespace-nowrap">{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top navbar */}
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          <button onClick={toggleSidebar} className="text-2xl text-gray-800">
            <MenuOutlined />
          </button>
          <div className="text-lg font-semibold hidden md:block">
            {activePage}
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white py-1 px-4 rounded flex items-center gap-2">
              <UserOutlined />
              <span>Profile</span>
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded flex items-center gap-2">
              <LogoutOutlined />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminPage;
