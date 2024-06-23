// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import api from '../lib/api';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import SearchForm from '../components/SearchForm';
// import ProductList from '../components/ProductList';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [keyword, setKeyword] = useState('');
//   const [category, setCategory] = useState('');
//   const [size, setSize] = useState('');
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [error, setError] = useState('');

//   const fetchProducts = async (queryParams) => {
//     try {
//       const res = await api.get('/product', { params: queryParams });
//       setProducts(res.data.products);
//       setTotalPages(res.data.totalPages);
//     } catch (err) {
//       console.error('Error fetching products:', err);
//       setError('Failed to fetch products. Please try again later.');
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchProducts({ keyword, category, size, page: 1 });
//   };

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//     fetchProducts({ keyword, category, size, page: newPage });
//   };

//   useEffect(() => {
//     fetchProducts({ keyword, category, size, page });
//   }, [keyword, category, size, page]);

//   return (
//     <>
//       <Head>
//         <title>Home</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
//       </Head>
//       <div className="min-h-screen flex flex-col">
//         <NavBar />
//         <div className="flex-grow pt-20 bg-white">
//           <div className="container mx-auto px-4 py-8">
//             <h2 className="mb-4 lg:mb-5 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">Daftar Kostum</h2>
//             <SearchForm
//               keyword={keyword}
//               setKeyword={setKeyword}
//               category={category}
//               setCategory={setCategory}
//               size={size}
//               setSize={setSize}
//               handleSearch={handleSearch}
//             />
//           </div>
//         </div>
//         <ProductList products={products} error={error} />
//         <div className="flex justify-center mt-4">
//           {page > 1 && (
//             <button onClick={() => handlePageChange(page - 1)} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Back</button>
//           )}
//           {page < totalPages && (
//             <button onClick={() => handlePageChange(page + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Next</button>
//           )}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;

// pages/products.js

import Layout from "components/Layout/Layout";
import React from "react";
import ProductList from "./Product/Product";

const Home = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Home;
