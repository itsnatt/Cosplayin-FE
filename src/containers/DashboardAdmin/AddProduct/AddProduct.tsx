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
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append('dropzone-file', image);

    try {
      const response = await axios.post('https://api.cospl.my.id/api/product/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <input type="text" id="owner_id" name="owner_id" value={form.owner_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Owner id" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Admin ID</label>
          <input type="text" id="admin_id" name="admin_id" value={form.admin_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Admin id" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Category ID</label>
          <input type="text" id="categoory_id" name="categoory_id" value={form.categoory_id} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Category id" />
        </div>
        <div className="flex items-center justify-center w-full mb-6">
          {imagePreview ? (
            <img src={imagePreview} alt="Image preview" className="object-contain h-48 w-full" />
          ) : (
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18m-7 4l4-4m0 0l-4-4"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
          )}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
