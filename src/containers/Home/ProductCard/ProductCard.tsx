import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image dari next/image
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

const formatHarga = (harga: number) => {
  if (harga >= 1000) {
    return `${Math.round(harga / 1000)}K`;
  }
  return harga.toString();
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imagePath = `/image/${product.gambar}`;

  return (
    <div className="ml-10 my-10 w-[234px] h-[451px] rounded-xl bg-white p-6 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <Image src={imagePath} alt={product.namaproduk} width={300} height={300} className={styles.imageFullCover}/>
      <h2 className='font-medium'>{product.namaproduk}</h2>
      <p className={styles.textSize}>Sizes: {product.ukuran1}, {product.ukuran2}, {product.ukuran3}</p>
      <p>
        <span className={styles.textBlack}>Price:</span> 
        <span className={styles.textBlue500}> {formatHarga(product.harga)}</span>
      </p>
      <Link href={`/productdetail/${product.id}`} legacyBehavior>
        <a className={styles.linkButton}>Lihat Detail</a>
      </Link>
    </div>
  );
};

export default ProductCard;
