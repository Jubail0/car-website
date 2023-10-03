import React from 'react'
import { useContext } from 'react';
import { QueryContext } from './HomeLayout';

const Search = () => {
    const context = useContext(QueryContext);
    const [searchValue, setSearchValue] = React.useState('')
    console.log(context)
    const handleKeyDown = (e) => {
        if(e.key === "Enter") context.setSearchQuery(searchValue);
    }
  return (
    <div className='w-96 py-2 px-3  rounded-[20px] flex items-center bg-white border-[1px]'>
      <input 
      className='text-lg outline-none w-full mx-3' 
      type='text' 
      placeholder='Search...'
      value={searchValue}
      onChange={(e)=> setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
      />
      <button className='mr-3' onClick={() => context.setSearchQuery(searchValue)}>
      <i className="fa fa-search text-[#808A9D] text-xl" aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default Search