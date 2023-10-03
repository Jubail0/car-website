import React from 'react'
import "./App.css";
import HomeLayout from './Components/HomeLayout';
import { getCarsDetails } from './redux/actions/car';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(state => state.cars);
  
  React.useEffect(() => {
    dispatch(getCarsDetails())
  },[]);

  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout cars={cars}/>
    },
    {
      path:'page/:page',
      element:<HomeLayout cars={cars}/>
    }
  ])

  return (
   <RouterProvider router={router}/>
  )
}

export default App