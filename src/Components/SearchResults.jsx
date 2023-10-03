import React from 'react';
import Card from './Card';

const SearchResults = ({filteredCars}) => {
  return (
    <>
    {filteredCars.length > 0 ?
    filteredCars.map(({id,model_name,seats, emi,model_year, distance_per_kilometer, fuel_type, transmission, alt, image_url}) => (
          <Card 
          key={id}
          id={id}
          model_name={model_name}
          seats={seats}
          emi={emi}
          model_year={model_year}
          distance_per_kilometer={distance_per_kilometer}
          fuel_type={fuel_type}
          transmission={transmission}
          alt={alt}
          image_url={image_url}
          />
        )):

        <div className='font-medium text-[#808A9D] text-center'>No cars match the search criteria.</div>
        
        }
  </>
  )
}

export default SearchResults