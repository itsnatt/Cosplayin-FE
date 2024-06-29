import { useEffect, useState, FormEvent } from "react";
import axios from 'axios';
import React from "react";

interface Product {
  id: number;
  namaproduk: string;
  deskripsi: string;
  harga: number;
  ukuran1: string;
  ukuran2: string;
  ukuran3: string;
  katagori1: string;
  katagori2: string;
  katagori3: string;
  link_produk: string;
  gambar: string;
}

const MyProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.cospl.my.id/api/product/');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setCategories(getUniqueCategories(response.data));
        setSizes(getUniqueSizes(response.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getUniqueCategories = (products: Product[]) => {
    const allCategories = products.flatMap(product => [product.katagori1, product.katagori2, product.katagori3]);
    return Array.from(new Set(allCategories)).filter(Boolean);
  };

  const getUniqueSizes = (products: Product[]) => {
    const allSizes = products.flatMap(product => [product.ukuran1, product.ukuran2, product.ukuran3]);
    return Array.from(new Set(allSizes)).filter(Boolean);
  };

  const filterProducts = () => {
    const filtered = products.filter(product => {
      const matchesKeyword = product.namaproduk.toLowerCase().includes(keyword.toLowerCase());
      const matchesCategory = category ? (
        product.katagori1 === category ||
        product.katagori2 === category ||
        product.katagori3 === category
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
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
    <main className="flex-1 p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold mb-6">Produk Saya</h2>
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            placeholder="Search by keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border rounded p-2 mr-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded p-2 mr-2"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border rounded p-2 mr-2"
          >
            <option value="">All Sizes</option>
            {sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-3">Id</th>
              <th className="p-3">Produk</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={product.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} border-b`}>
                <td className="p-3 flex items-center font-semibold">
                  <span className="mr-2">{product.id}</span>
                </td>
                <td className="p-3 font-semibold">
                <img src={'https://api.cospl.my.id/image/' + product.gambar}  alt={product.namaproduk} className="h-10 w-10 mx-3 rounded" />
                  <span>{product.namaproduk}</span>
                </td>
                <td className="p-3 font-semibold">{product.harga}</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-600">
                    <i className="fa-regular fa-pen-to-square text-xl"></i>
                  </button>
                  <button className="text-red-600">
                    <i className="fa-regular fa-trash-can text-xl"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-white border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 bg-white border-t border-b border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 ${
                  currentPage === index + 1 ? 'bg-gray-200' : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-2 bg-white border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
            >
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default MyProducts;
