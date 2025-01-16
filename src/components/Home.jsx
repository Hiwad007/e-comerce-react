import React from 'react'
import bg2 from '../assets/images/bg2.webp'
import Products from './Products'
function Home() {
  return (
    <>
    <div class="card text-black">
  <img src={bg2} class="card-img" height="600px" alt="..."/>
  <div class="card-img-overlay d-flex justify-content-center flex-column">
    <div className="container">
    <h5 class="card-title display-1 fw-bold">All New Arrivals</h5>
    <hr className='w-50' />
    <p class="card-text fs-4 fw-bold">Go And Check Out Our New Trend</p>
    </div>
  </div>
</div>
<Products/>
    </>
  )
}

export default Home