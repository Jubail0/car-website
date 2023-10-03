import React from 'react'
import Header from './Header';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import SearchResults from './SearchResults';
import CarsLists from './CarsLists';
import { createContext } from 'react';

export const QueryContext = createContext();

const HomeLayout = ({cars}) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const {page} = useParams();
    const currentPage = parseInt(page, 10) || 1;
    const productPerPage = 6;
    const firstIndex = (currentPage - 1 ) * productPerPage; 
    const lastIndex = firstIndex + productPerPage; 
  
    const queryStates = {
      searchQuery,
      setSearchQuery
    }
    
    const filterCars = cars.filter((car) => {
      return searchQuery.toLowerCase() == car.model_name.toLowerCase();
    })

  return (
    <div className='container px-28 pb-10 mx-auto flex flex-col'>
    <QueryContext.Provider value={queryStates}>
    <Header/>
    </QueryContext.Provider>
    <main id='card-layout' className='grid gap-6 grid-cols-3 grid-rows-2 my-6 w-full '>
    {
      searchQuery ? 
      <SearchResults filteredCars={filterCars}/> 
      : 
      <CarsLists 
      cars={cars} 
      firstIndex={firstIndex} 
      lastIndex = {lastIndex}/>
    }
    </main>

    { !searchQuery && 
    <Pagination 
    currentPage={currentPage} 
    perPage={productPerPage * currentPage} 
    totalCars={cars.length}
    />}
  </div>
  )

}

export default HomeLayout