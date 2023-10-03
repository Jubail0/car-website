import React from 'react'
import Card from './Card'
const CarsLists = ({cars, firstIndex, lastIndex}) => {
  return (
    <>
      {  cars.slice(firstIndex, lastIndex).map(({id,model_name,seats, emi,model_year, distance_per_kilometer, fuel_type, transmission, alt, image_url}) => (
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
        ))}
    </>
  )
}

export default CarsLists