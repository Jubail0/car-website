import React from 'react'

const Container = ({children, h, br}) => {
  return (
    <div className={`w-full flex items-center px-8 ${h} bg-[var(--secondary-color)] ${br} shadow-lg mt-2 border-[1px] border-white`}>
        {children}
    </div>
  )
}

export default Container