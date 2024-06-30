import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './ProductDetail.module.css'; // Pastikan kamu memiliki file modul CSS ini untuk styling

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

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

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  const isLongDescription = product.deskripsi.length > 100; // Misal panjang deskripsi lebih dari 100 karakter dianggap panjang
  const shortDescription = isLongDescription ? product.deskripsi.slice(0, 100) + '...' : product.deskripsi;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <img
              alt={product.namaproduk}
              className={`w-full object-cover object-center rounded border border-gray-200 ${styles.image}`}
              src={`https://api.cospl.my.id/image/${product.gambar}`}
            />
            <Link href={product.link_produk} target='_blank'>
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Link ke Merchant
            </button>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className={`text-gray-900 text-3xl title-font font-medium mb-1 ${styles.title}`}>{product.namaproduk}</h1>
            <h2 className={styles.smallText}>Susanto Bagus | Wuthering Wave, id</h2>
            <div className="flex">
              <span className={`title-font mt-2 font-medium text-2xl text-blue-700 ${styles.price}`}>Rp{new Intl.NumberFormat('id-ID').format(product.harga)}</span>
            </div>
            <div className="flex mt-4 items-center pb-5">
              <div className={`flex justify-between border border-gray-400 rounded-full px-10 py-2 w-full ${styles.sizes}`}>
                <h1 className='mr-4'>Ukuran</h1>
                <div>
                  <span className="mr-2">{product.ukuran1}</span>
                  <span className="mr-2">{product.ukuran2}</span>
                  <span className="mr-2">{product.ukuran3}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center pb-5 border-b-2 border-gray-200">
              <div className={`flex justify-between border border-gray-400 rounded-full px-10 py-2 w-full ${styles.sizes}`}>
                <h1 className='mr-4'>Ongkir</h1>
                <div>
                  <h1 className='text-green-500'>Rp20.000</h1>
                </div>
              </div>
            </div>
            <div className={`flex mt-2 ${styles.categories}`}>
              <span className="mr-2">{product.katagori1}</span>
              <span className="mr-2">{product.katagori2}</span>
              <span className="mr-2">{product.katagori3}</span>
            </div>
            <div>
              <h1 className='mr-2 mt-4 font-bold'>Deskripsi Produk</h1>
              <p className={`leading-relaxed ${styles.description}`}>
                {showFullDescription ? product.deskripsi : shortDescription}
              </p>
              <button className={styles.readMoreButton} onClick={toggleDescription}>
                Baca Selengkapnya
              </button>
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
