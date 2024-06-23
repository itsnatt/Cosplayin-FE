import React from "react"

const Search = ({
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
				<label
					htmlFor='category'
					className='text-sm text-gray-800 mb-1'
				>
					Kategori
				</label>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
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
					onChange={(e) => setSize(e.target.value)}
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
						onChange={(e) => setKeyword(e.target.value)}
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
