import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardInfo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');

        // Pastikan token tersedia
        if (!token) {
          throw new Error('No token available');
        }

        const response = await axios.get('https://api.cospl.my.id/api/product/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Simpan data produk dalam state
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Hitung jumlah produk
  const productCount = products.length;
  const totalVisits = products.reduce((acc, product) => acc + product.visit, 0);
  const totalSuka = products.reduce((acc, product) => acc + product.suka, 0);
  const uniqueMerchant = new Set(products.map(product => product.owner_id)).size

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="text-gray-600 text-xl font-medium">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{productCount}</div>
              <div className="text-xl">Total Products</div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{totalVisits}</div>
              <div className="text-xl">Total Visits</div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{totalSuka}</div>
              <div className="text-xl">Total Likes</div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">{uniqueMerchant}</div>
              <div className="text-xl">Total Merchants</div>
            </div>
            {/* You can add more stats or charts here */}
          </div>
        )}
        {/* Other dashboard components */}
      </div>
    </div>
  );
};

export default DashboardInfo;
