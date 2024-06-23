import React from 'react';
import Auth from 'src/auth/Auth';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Auth(Dashboard);
