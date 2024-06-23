import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from './Product.module.css';
import React from "react"

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(
					'https://api.cospl.my.id/api/product/'
				);
				setProducts(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
		<div className='pt-10 bg-gray-100'>
			<div className={styles.productList}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div></>
	);
};

export default ProductList;