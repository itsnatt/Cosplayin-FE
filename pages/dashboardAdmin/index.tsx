import React from 'react';
import Auth from 'src/auth/Auth';

// const DashboardAdmin: React.FC = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard!</p>
//     </div>
//   );
// };

// export default Auth(DashboardAdmin);
// pages/Register.tsx

import DashboardAdmin from "containers/DashboardAdmin/DashboardAdmin";

export default Auth(DashboardAdmin);
