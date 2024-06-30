import axios from 'axios';

interface DeleteProductProps {
  productId: number;
  onDelete: () => void;
}

const DeleteProduct = ({ productId, onDelete }: DeleteProductProps) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Apakah Anda yakin menghapus produk ini?");
    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Tidak ada token tersedia');
      }

      await axios.delete(`https://api.cospl.my.id/api/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Produk berhasil dihapus');
      onDelete();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600">
      <i className="fa-regular fa-trash-can text-xl"></i>
    </button>
  );
};

export default DeleteProduct;
