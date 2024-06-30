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

          {/* <i className="fa-regular fa-envelope text-lg"></i>
          <i className="fa-regular fa-bell text-lg"></i> */}
          <div className="ml-4 flex items-center">
            <a href="/login" className="no-underline flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src="https://static.wikia.nocookie.net/virtualyoutuber/images/3/3b/Kobo_Kanaeru_Portrait.png"
                alt="Profile"
              />
              <span className="text-gray-600">Anita MaxWynn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAdmin;
