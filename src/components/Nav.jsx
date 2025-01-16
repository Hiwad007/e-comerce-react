import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
  <div class="container-fluid">
    <a class="navbar-brand fs-3 fw-bold" href="#">Fusion</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
        </li>


        <li class="nav-item">
          <NavLink class="nav-link" to={"/products"}>Products</NavLink>
        </li>

        <li class="nav-item">
          <NavLink class="nav-link" to={"/services"}>Services</NavLink>
        </li>

        <li class="nav-item">
          <NavLink class="nav-link" to={"/about"}>About</NavLink>
        </li>

        <li class="nav-item">
          <NavLink class="nav-link" to={"/contact"}>Contact</NavLink>
        </li>
      </ul>


      <div className="buttons">
        <a href="" className='btn btn-outline-dark me-2 fs-6 fw-bold'>
          <li className='fa fa-sign-in me-2'></li>
          Login</a>
        <a href="" className='btn btn-outline-dark me-2 fs-6 fw-bold'>
          <li className='fa fa-user-plus me-2'></li>
          Register</a>
        <a href="" className='btn btn-outline-dark me-2 fs-6 fw-bold'>
          <li className='fa fa-cart-plus me-2'></li>
          Add To Card 1</a>

      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Nav