import React from 'react';

const NavbarAdmin: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2 no-underline">
            <img
              className="h-10 w-auto"
              src="/assets/logo2.png"
              alt="Logo"
            />
            <span className="text-black font-bold text-xl">Cosplay.in</span>
          </a>
    
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari Produk" 
              className="bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2" 
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          </div>
          {/* <i className="fa-regular fa-envelope text-lg"></i>
          <i className="fa-regular fa-bell text-lg"></i> */}
          <div className="ml-4 flex items-center">
            <a href="/login" className="no-underline flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/144/2023/10/17/WhatsApp-Image-2023-10-17-at-050245-1814274796.jpg"
                alt="Profile"
              />
              <span className="text-gray-600">Yuni Maria</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAdmin;
