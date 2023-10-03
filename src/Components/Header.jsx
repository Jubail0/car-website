import React from 'react'
import Container from './Container';
import Search from './Search';

const Header = () => {
  return (
    <Container h="h-[80px]" br="rounded-[25px]">
        <header className='h-full flex items-center gap-10'>
            <Search/>
            
            <ul className='flex flex-row gap-12'>
              <li className='flex items-center justify-center gap-2 font-medium text-[#808A9D]'>
                Relevance
                <i className="fa fa-angle-down " aria-hidden="true"></i>
              </li>
              <li className='flex items-center justify-center gap-2 font-medium text-[#808A9D]'>
                All brands
                <i className="fa fa-angle-down " aria-hidden="true"></i>
              </li>
            </ul>
        </header>
    </Container>
  )
}

export default Header