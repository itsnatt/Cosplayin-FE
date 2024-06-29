import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [form, setForm] = useState({
    namaproduk: '',
    ukuran1: '',
    ukuran2: '',
    ukuran3: '',
    link_produk: '',
    harga: '',
    satuan: '',
    deskripsi: '',
    katagori1: '',
    katagori2: '',
    katagori3: '',
    gambar: '',
    suka: '',
    visit: '',
    owner_id: '',
    admin_id: '',
    categoory_id: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send form data along with image name to the API
    const productData = { ...form };
    
    try {
      const token = localStorage.getItem('token');
      
      // Make sure token is available
      if (!token) {
        throw new Error('No token available');
      }
      
      const response = await axios.post('https://api.cospl.my.id/api/product/', productData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      console.log('SUCCESS ADD PRODUCT');
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Nama Produk</label>
            <input type="text" id="namaproduk" name="namaproduk" value={form.namaproduk} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Yaemiko Bdsm costume" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Ukuran</label>
            <div className="flex flex-row gap-2">
              <select name="ukuran1" value={form.ukuran1} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Size 1</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select name="ukuran2" value={form.ukuran2} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Size 2</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select name="ukuran3" value={form.ukuran3} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Size 3</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Link Produk</label>
            <input type="url" id="link_produk" name="link_produk" value={form.link_produk} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="www.tokopedia.com/pukisop" required />
          </div>
          <div>
            <div className="flex flex-row gap-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Harga</label>
                <input type="number" id="harga" name="harga" value={form.harga} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="150000" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Satuan</label>
                <input type="text" id="satuan" name="satuan" value={form.satuan} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="hari / 3 hari / any" required />
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
          <label className="block mb-2 text-sm font-medium text-gray-900">Katagori</label>
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
          <input type="text" id="owner_id" name="owner_id" value={form.owner_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Owner ID" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Admin ID</label>
          <input type="text" id="admin_id" name="admin_id" value={form.admin_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Admin ID" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Category ID</label>
          <input type="text" id="categoory_id" name="categoory_id" value={form.categoory_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Category ID" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Gambar</label>
          <input type="file" name="gambar" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          {/* No preview needed for file name-only submission */}
        </div>
        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
