const ProductList = () => {
    const products = [
        { id: '#20462', name: 'Yor', date: '13/05/1945', price: '90k/3day', image: 'https://ae01.alicdn.com/kf/Sb0d9c4cd53374b2eb933bd453e4a9cb91/Yor-Forger-Kostum-Cosplay-Anime-Spy-X-Family-Cosplay-Wig-Gaun-Setelan-Hitam-Merah-Rok-Seragam.jpg' },
        { id: '#18933', name: 'Zhongli', date: '22/05/1945', price: '130k/3day', image: 'https://ae01.alicdn.com/kf/Sb4fe96db9cde455586bb617f06344ef9A.jpg_640x640Q90.jpg_.webp' },
        { id: '#45169', name: 'Nezuko Kamado', date: '15/06/1945', price: '100k/3day', image: 'https://ae01.alicdn.com/kf/S52c2fbf6a408460ea066fe4256885a392/Kostum-Cosplay-Anime-Setan-Pembunuh-Kamado-Nezuko-Setelan-Dewasa-Wanita-Kimono-Nezuko-Haori-Wig-Pakaian-Kostum.jpg' },
        { id: '#34304', name: 'Cimiwiw', date: '06/09/1945', price: '130k/3day', image: 'https://ae01.alicdn.com/kf/S4ba3bde13bf34d669f0395d690c32872r.jpg_640x640Q90.jpg_.webp' },
        { id: '#17188', name: 'Sakura', date: '25/09/1945', price: '120k/3day', image: 'https://img.ws.mms.shopee.co.id/id-11134207-7qukw-lhq3kq6iqzjz8f' },
        { id: '#73003', name: 'Qomairoh', date: '04/10/1945', price: '90k/3day', image: 'https://img.lazcdn.com/g/ff/kf/Sa7593ae02b834ea7a722d2b292e5ee47c.jpg_720x720q80.jpg' },
        { id: '#58825', name: 'Janda Merah', date: '17/10/1945', price: '90k/3day', image: 'https://s.alicdn.com/@sc04/kf/He2cfa08b8efb4f8889a60516ca6cbd3fu.jpg_720x720q50.jpg' },
        { id: '#44122', name: 'Usman', date: '24/10/1945', price: '130k/3day', image: 'https://img.lazcdn.com/g/ff/kf/S4218465621be4221baa2fc318ce500daF.jpg_720x720q80.jpg' },
        { id: '#89094', name: 'Zero Two', date: '01/11/1945', price: '130k/3day', image: 'https://img.ws.mms.shopee.co.id/f82fb5cb0d31c77178280e689e81450d' },
        { id: '#85252', name: 'Power', date: '22/11/1945', price: '130k/3day', image: 'https://img.lazcdn.com/g/ff/kf/S554e4d9b2b624c0297ac73e5f1756029G.jpg_960x960q80.jpg_.webp' },
      ];
    return (
        <main className="flex-1 p-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-bold mb-6">Produk Saya</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-3">Produk</th>
                  <th className="p-3">Tanggal</th>
                  <th className="p-3">Harga</th>
                  <th className="p-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} border-b`}>
                    <td className="p-3 flex items-center font-semibold">
                      <span className="mr-2">{product.id}</span>
                      <img src={product.image} alt={product.name} className="h-10 w-10 mx-3 rounded" />
                      <span>{product.name}</span>
                    </td>
                    <td className="p-3 font-semibold">{product.date}</td>
                    <td className="p-3 font-semibold">{product.price}</td>
                    <td className="p-3 flex space-x-2">
                      <button className="text-blue-600">
                        <i className="fa-regular fa-pen-to-square text-transparent"></i>
                      </button>
                      <button className="text-red-600">
                        <i className="fa-regular fa-trash-can text-transparent"></i> 
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="px-3 py-2 bg-white border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                  &lt;
                </a>
                <a
                  href="#"
                  className="px-3 py-2 bg-white border-t border-b border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-3 py-2 bg-white border-t border-b border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-3 py-2 bg-white border-t border-b border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-3 py-2 bg-white border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
                >
                  &gt;
                </a>
              </nav>
            </div>
          </div>
        </main>
    )
}
export default ProductList