
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './ProductDetail.module.css'; // Ensure you have a CSS module file for styling

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.cospl.my.id/api/product/${id}`)
        .then(response => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  const goBack = () => {
    router.back();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.namaproduk}
            className={`lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 ${styles.image}`}
            src={product.gambar}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className={`text-gray-900 text-3xl title-font font-medium mb-1 ${styles.title}`}>{product.namaproduk}</h1>
            <p className={`leading-relaxed ${styles.description}`}>{product.deskripsi}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className={`flex ${styles.sizes}`}>
                <span className="mr-2">{product.ukuran1}</span>
                <span className="mr-2">{product.ukuran2}</span>
                <span className="mr-2">{product.ukuran3}</span>
              </div>
            </div>
            <div className="flex">
              <span className={`title-font font-medium text-2xl text-gray-900 ${styles.price}`}>Rp{new Intl.NumberFormat('id-ID').format(product.harga)}</span>
            </div>
            <div className={`flex ${styles.categories}`}>
              <span className="mr-2">{product.katagori1}</span>
              <span className="mr-2">{product.katagori2}</span>
              <span className="mr-2">{product.katagori3}</span>
            </div>
          </div>
        </div>
        <button className="mt-8 flex ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={goBack}>
          Kembali
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
