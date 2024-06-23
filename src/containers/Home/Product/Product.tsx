import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Product.module.css';
import React from 'react';
import Search from 'components/Layout/Header/Search/Search';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.cospl.my.id/api/product/');
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
	<div>
	<div className="flex justify-center container mt-8 mb-0 ml-40 px-4 py-8">
		<Search />
		</div>
    <div className='pt-10 bg-gray-100'>
      <div className={styles.productList}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4 items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`${styles.paginationButton}`}
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={startIndex + itemsPerPage >= products.length}
          className={`${styles.paginationButton}`}
        >
          Next
        </button>
      </div>
    </div>
	</div>
  );
};

export default ProductList;
