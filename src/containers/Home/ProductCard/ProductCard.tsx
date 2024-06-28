// import React from 'react';
// import './ProductCard.module.css';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="ml-10 my-10 w-[234px] h-[451px] rounded-xl bg-white p-6 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
//       <h2>{product.namaproduk}</h2>
//       {/* <p>{product.deskripsi}</p> */}
//       <p>Price: {product.harga}</p>
//       <p>Sizes: {product.ukuran1}, {product.ukuran2}, {product.ukuran3}</p>
//       <p>Categories: {product.katagori1}, {product.katagori2}, {product.katagori3}</p>
//       <p><a href={product.link_produk}>Product Link</a></p>
//       <img src={product.gambar} alt={product.namaproduk} width="100" />
//     </div>
//   );
// };

// export default ProductCard;

// components/ProductCard/ProductCard.tsx
import React from 'react';
import Link from 'next/link';
import styles from './ProductCard.module.css';

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="ml-10 my-10 w-[234px] h-[451px] rounded-xl bg-white p-6 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <h2>{product.namaproduk}</h2>
      {/* <p>{product.deskripsi}</p> */}
      <p>Price: {product.harga}</p>
      <p>Sizes: {product.ukuran1}, {product.ukuran2}, {product.ukuran3}</p>
      <p>Categories: {product.katagori1}, {product.katagori2}, {product.katagori3}</p>
      <p><a href={product.link_produk}>Product Link</a></p>
      <img src={product.gambar} alt={product.namaproduk} width="100" />
      <Link href={`/productdetail/${product.id}`} legacyBehavior>
        <a className="text-blue-500 hover:underline">Lihat Detail</a>
      </Link>
    </div>
  );
};

export default ProductCard;
