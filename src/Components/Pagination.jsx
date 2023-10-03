import React from 'react'
import Container from './Container';
import { Link  } from 'react-router-dom';

const Pagination = ({currentPage, perPage, totalCars}) => {
  const [displayPages, setDisplayPages] = React.useState([]);
  const activeColor = "text-[--primary-btn-color]"
  const buttonStyle =  "w-[30px] h-[30px] rounded-lg bg-white shadow-md flex justify-center items-center";
  const totalPages = 10;

  const renderPages = () => {
    const pageNumbers = [];
    for(let i = 1; i<= totalPages; i++){
      pageNumbers.push(i);
    }
    setDisplayPages(pageNumbers);
  }

  React.useEffect(() => {
    renderPages()
  },[])
  
  return (
    <Container h="h-[60px]" br="rounded-[16px]">
      <div className='w-full flex flex-row justify-between items-center'>
        <h4>{`${perPage} from ${totalCars}`}</h4>

        <div className='flex gap-3 items-center'>
        {currentPage === 1 ?
          <button className={`${buttonStyle}`} disabled={currentPage === 1}>
            <i class="fas fa-chevron-left"></i>
          </button>
         :
          <Link 
          to={`/page/${currentPage - 1}`} 
          className={`${buttonStyle}`}>
          <i class="fas fa-chevron-left"></i>
        </Link>
        }
         {
          displayPages.map((num) => (
            <Link 
            to={`/page/${num}`} 
            className={`${buttonStyle} ${currentPage === num ? activeColor : ''}`}>
              {num}
            </Link>
          ))
         }
           {
          currentPage === totalPages ?
          <button className={`${buttonStyle}`} disabled>
            <i class="fas fa-chevron-right"></i>
          </button> :
          <Link 
          to={`/page/${currentPage + 1}`} 
          className={`${buttonStyle}`}>
          <i class="fas fa-chevron-right"></i>
        </Link>
        }
        </div>
      </div>
    </Container>
  )
}

export default Pagination;
