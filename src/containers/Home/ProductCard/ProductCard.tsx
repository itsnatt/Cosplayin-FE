import React from 'react';
import './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className="ml-10 my-10 w-[234px] h-[451px] rounded-xl bg-white p-6 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <h2>{product.namaproduk}</h2>
      {/* <p>{product.deskripsi}</p> */}
      <p>Price: {product.harga}</p>
      <p>Sizes: {product.ukuran1}, {product.ukuran2}, {product.ukuran3}</p>
      <p>Categories: {product.katagori1}, {product.katagori2}, {product.katagori3}</p>
      <p><a href={product.link_produk}>Product Link</a></p>
      <img src={product.gambar} alt={product.namaproduk} width="100" />
    </div>
  );
};

export default ProductCard;
