import React, { FormEvent, ChangeEvent } from 'react';

interface SearchProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  category: string;
  setCategory: (category: string) => void;
  size: string;
  setSize: (size: string) => void;
  handleSearch: (event: FormEvent<HTMLFormElement>) => void;
  categories: string[];
  sizes: string[];
}

const Search: React.FC<SearchProps> = ({
  keyword,
  setKeyword,
  category,
  setCategory,
  size,
  setSize,
  handleSearch,
  categories,
  sizes,
}) => {
  return (
    <form
      onSubmit={handleSearch}
      className='mb-1 flex flex-wrap md:flex-nowrap items-center justify-center'
    >
      <div className='flex flex-col pr-2'>
        <label htmlFor='category' className='text-sm text-gray-800 mb-1'>
          Kategori
        </label>
        <select
          value={category}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          id='category'
          className='bg-gray-100 rounded-md border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          <option value=''>Semua</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-col pr-2'>
        <label htmlFor='size' className='text-sm text-gray-800 mb-1'>
          Size
        </label>
        <select
          value={size}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSize(e.target.value)}
          id='size'
          className='bg-gray-100 rounded-md border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          <option value=''>Semua</option>
          {sizes.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-col pr-2'>
        <label htmlFor='keyword' className='text-sm text-gray-800 mb-1'>
          Cari berdasarkan judul
        </label>
        <div className='flex items-center'>
          <input
            type='text'
            value={keyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
            placeholder='Yaemiko'
            className='bg-gray-100 rounded-md border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <button
            type='submit'
            className='ml-2 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            Cari
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
