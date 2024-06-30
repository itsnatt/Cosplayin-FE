import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    namaproduk: string;
    deskripsi: string;
    harga: number;
    satuan: string;
    ukuran1: string;
    ukuran2: string;
    ukuran3: string;
    katagori1: string;
    katagori2: string;
    katagori3: string;
    link_produk: string;
    gambar: string;
    suka: number;
    visit: number;
    owner_id: string;
    admin_id: string;
    categoory_id: string;
  }

  interface EditProductProps {
  product: Product;
  onUpdate: () => void;
}

const EditProduct = ({ product, onUpdate }: EditProductProps) => {
  const [form, setForm] = useState({
    namaproduk: product.namaproduk,
    ukuran1: product.ukuran1,
    ukuran2: product.ukuran2,
    ukuran3: product.ukuran3,
    link_produk: product.link_produk,
    harga: product.harga,
    satuan: product.satuan,
    deskripsi: product.deskripsi,
    katagori1: product.katagori1,
    katagori2: product.katagori2,
    katagori3: product.katagori3,
    gambar: null,
    suka: product.suka.toString(),
    visit: product.visit.toString(),
    owner_id: product.owner_id,
    admin_id: product.admin_id,
    categoory_id: product.categoory_id
  });

  useEffect(() => {
    setForm({
      namaproduk: product.namaproduk,
      ukuran1: product.ukuran1,
      ukuran2: product.ukuran2,
      ukuran3: product.ukuran3,
      link_produk: product.link_produk,
      harga: product.harga,
      satuan: product.satuan,
      deskripsi: product.deskripsi,
      katagori1: product.katagori1,
      katagori2: product.katagori2,
      katagori3: product.katagori3,
      gambar: null,
      suka: product.suka.toString(),
      visit: product.visit.toString(),
      owner_id: product.owner_id,
      admin_id: product.admin_id,
      categoory_id: product.categoory_id
    });
  }, [product]);

  const handleChange = (e) => {
    if (e.target.name === 'gambar') {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('namaproduk', form.namaproduk);
    formData.append('ukuran1', form.ukuran1);
    formData.append('ukuran2', form.ukuran2);
    formData.append('ukuran3', form.ukuran3);
    formData.append('link_produk', form.link_produk);
    formData.append('harga', form.harga);
    formData.append('satuan', form.satuan);
    formData.append('deskripsi', form.deskripsi);
    formData.append('katagori1', form.katagori1);
    formData.append('katagori2', form.katagori2);
    formData.append('katagori3', form.katagori3);
    formData.append('gambar', form.gambar);
    formData.append('suka', form.suka);
    formData.append('visit', form.visit);
    formData.append('owner_id', form.owner_id);
    formData.append('admin_id', form.admin_id);
    formData.append('categoory_id', form.categoory_id);

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Tidak ada token tersedia');
      }

      const response = await axios.put(`https://api.cospl.my.id/api/product/${product.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response.data);
      alert('Produk berhasil diperbarui');
      onUpdate();
    } catch (error) {
      console.error('Error updating product:', error);
      console.log('Response data:', error.response.data);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Nama Produk</label>
            <input type="text" id="namaproduk" name="namaproduk" value={form.namaproduk} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Ukuran</label>
            <div className="flex flex-row gap-2">
              <select name="ukuran1" value={form.ukuran1} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Ukuran 1</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select name="ukuran2" value={form.ukuran2} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Ukuran 2</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select name="ukuran3" value={form.ukuran3} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Ukuran 3</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Link Produk</label>
            <input type="url" id="link_produk" name="link_produk" value={form.link_produk} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div>
            <div className="flex flex-row gap-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Harga</label>
                <input type="number" id="harga" name="harga" value={form.harga} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Satuan</label>
                <input type="text" id="satuan" name="satuan" value={form.satuan} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Suka</label>
                <input type="number" id="suka" name="suka" value={form.suka} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Visit</label>
                <input type="number" id="visit" name="visit" value={form.visit} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Deskripsi</label>
          <textarea id="deskripsi" name="deskripsi" value={form.deskripsi} onChange={handleChange} className="resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="lorem ipsum"></textarea>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Kategori</label>
          <div className="flex flex-row gap-2">
            <select name="katagori1" value={form.katagori1} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
              <option value="">Kategori 1</option>
              <option value="Wanita">Wanita</option>
              <option value="Pria">Pria</option>
              <option value="Unisex">Unisex</option>
            </select>
            <select name="katagori2" value={form.katagori2} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
              <option value="">Kategori 2</option>
              <option value="Kostum Fullset">Kostum Fullset</option>
              <option value="Kostum Only">Kostum Only</option>
              <option value="Aksesoris">Aksesoris</option>
              <option value="Wig">Wig</option>
            </select>
            <select name="katagori3" value={form.katagori3} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
              <option value="">Kategori 3</option>
              <option value="Aksesoris Rambut">Aksesoris Rambut</option>
              <option value="Sepatu">Sepatu</option>
              <option value="Pakaian">Pakaian</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Owner ID</label>
          <input type="text" id="owner_id" name="owner_id" value={form.owner_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Admin ID</label>
          <input type="text" id="admin_id" name="admin_id" value={form.admin_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Category ID</label>
          <input type="text" id="categoory_id" name="categoory_id" value={form.categoory_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Gambar</label>
          <input type="file" name="gambar" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
  );
};

export default EditProduct;
