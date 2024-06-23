import React, { FormEvent, ChangeEvent } from 'react';

interface SearchProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  category: string;
  setCategory: (category: string) => void;
  size: string;
  setSize: (size: string) => void;
  handleSearch: (event: FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<SearchProps> = ({
  keyword,
  setKeyword,
  category,
  setCategory,
  size,
  setSize,
  handleSearch,
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
          <option value='Kostum Fullset'>Kostum Fullset</option>
          <option value='Kostum Only'>Kostum Only</option>
          <option value='Aksesoris'>Aksesoris</option>
          <option value='Wig'>Wig</option>
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
          <option value='S'>S</option>
          <option value='M'>M</option>
          <option value='L'>L</option>
          <option value='XL'>XL</option>
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
            className='ml-2 rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg'
          >
            Cari
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
