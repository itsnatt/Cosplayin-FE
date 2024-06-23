import axios from 'axios';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Search from 'components/Layout/Header/Search/Search';
import styles from './Product.module.css';
import React from 'react';

interface Product {
  id: number;
  namaproduk: string;
  deskripsi: string;
  harga: number;
  ukuran1: string;
  ukuran2: string;
  ukuran3: string;
  kategori1: string;
  kategori2: string;
  kategori3: string;
  link_produk: string;
  gambar: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.cospl.my.id/api/product/');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = () => {
    const filtered = products.filter(product => {
      const matchesKeyword = product.namaproduk.toLowerCase().includes(keyword.toLowerCase());
      const matchesCategory = category ? (
        product.kategori1 === category ||
        product.kategori2 === category ||
        product.kategori3 === category
      ) : true;
      const matchesSize = size ? (
        product.ukuran1 === size ||
        product.ukuran2 === size ||
        product.ukuran3 === size
      ) : true;
      return matchesKeyword && matchesCategory && matchesSize;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [keyword, category, size, products]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
    filterProducts();
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full max-w-2xl px-4 py-6" style={{ marginTop: '73px' }}>
          <Search
            keyword={keyword}
            setKeyword={setKeyword}
            category={category}
            setCategory={setCategory}
            size={size}
            setSize={setSize}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <div className="flex flex-col items-center min-h-screen pt-10 bg-gray-100">
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
            disabled={currentPage === totalPages}
            className={`${styles.paginationButton}`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
