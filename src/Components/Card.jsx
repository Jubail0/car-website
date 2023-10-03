import React from 'react'

const Card = ({id,model_name,seats, model_year,emi, distance_per_kilometer, fuel_type, transmission, alt, image_url}) => {
  const features = [
    {
      id:1,
      logo:"fa-solid fa-user-group",
      text: `${seats} People`
    },
    {
      id:2,
      logo:"fas fa-gas-pump",
      text: fuel_type
    },
    {
      id:3,
      logo:"fa-solid fa-gauge",
      text: `${distance_per_kilometer} km / 1-litre`
    },
    {
      id:4,
      logo:"fa-solid fa-circle-notch",
      text:transmission
    },
    
  ]
  const displayFeatures = features.map(({id,logo,text}) => (
    <span key={id}>
    <i className={`${logo} text-sky-500 mr-2`}></i>
      {text}
    </span>
  ))

  return (
    <div className='flex flex-col shadow-lg rounded-[20px] p-3 border-[1px] border-white w-[420px] bg-[var(----secondary-color)]'>
      <div className='w-full h-64 rounded-[18px]'>
        <img className='rounded-[18px]' src={image_url} alt={alt}/>
      </div>

      <div className='w-full p-3 mt-3'>
        <div className='flex flex-row justify-between items-center'>
          <h4 className='text-xl'>{model_name}</h4>
          <span className='px-4 p-1 rounded-[16px] border border-dashed border-[rgb(159,204,244)]'>{model_year}</span>
        </div>
        <div className='mt-4 grid gap-4 grid-cols-2 grid-rows-2 text-sm'>
         {displayFeatures}
        </div>
        <div className='w-full h-[1px] bg-zinc-300 mt-6'></div>
        <div className='mt-6 flex justify-between items-center'>
          <div className='font-medium text-xs' >
            <span className='text-2xl '>${emi} </span>
            /month</div>
          <div className=' flex justify-center items-center gap-3'>
            <button className='w-[30px] h-[30px] p-5 rounded-[12px] bg-sky-100 flex justify-center items-center'>
            <i className="fa fa-heart-o text-sky-500" aria-hidden="true"></i>
            </button>
            <button className='w-24 text-sm h-[30px] px-2 py-5 text-white rounded-[12px] bg-[var(--primary-btn-color)] mx-auto flex justify-center items-center'>
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card