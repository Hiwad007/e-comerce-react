import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// import React, { useEffect, useState } from 'react'

function Products() {
    let [data,setData] = useState([]);
   let[load,setLoad]= useState(false); 

    useEffect(()=>{
        const getProducts = async() =>{
            setLoad(true);
            let responce = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            let result = await responce.json();
            setData(result.meals);
            setLoad(false)
        }
        getProducts()
    },[])

    const Load = () =>{
        return(
            <>
            <h2>Loading...</h2>
            </>
        )
    }
    const ShowProducts = () => {
        return(
            <>
            {data.map((value)=>{
                return(
                    <>
                     <div className="col-lg-4 mt-3">
        <div className="card mt-3 text-center">
            <img src={value.strMealThumb} alt="" />
            <div className="card-body">
                <h5 class="card-title">{value.strMeal}</h5>
                 <p class="card-text">{value.strInstructions.substring(0,50)}</p>
                
                <button className='btn btn-dark w-50'>Buy Now</button> 

            </div>
        </div>
    </div>
                    </>
                )
            })}
            </>
        )
    }
  return (
    <>
   <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <h2 className='text-center fw-bold display-4'>All</h2>
        </div>
        {load ? <Load/> : <ShowProducts/>}
    </div>
   </div>
    </>
  )
}

export default Products

