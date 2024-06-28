import NavbarAdmin from 'components/NavbarAdmin/NavbarAdmin';
import Sidebar from 'components/Sidebar/Sidebar';
import React, { useState } from 'react';
import Auth from 'src/auth/Auth'; // Make sure to adjust the path as necessary
import DashboardInfo from './DashboardInfo/DashboardInfo';
import MyProducts from 'containers/DashboardAdmin/MyProducts/MyProducts';

const DashboardAdmin = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="h-screen flex flex-col">
      <NavbarAdmin />
      <div className="flex flex-1">
        <Sidebar setCurrentView={setCurrentView} />
        <div className="flex-1 p-4 overflow-y-auto">
          {currentView === 'dashboard' && <DashboardInfo />}
          {currentView === 'myProducts' && <MyProducts />}
          {/* Add more conditions for different views as needed */}
        </div>
      </div>
    </div>
  );
};

export default Auth(DashboardAdmin);
