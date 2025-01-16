import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';

function Products() {
    let [data, setData] = useState([]);
    let [filter, setFilter] = useState(data);
    let [load, setLoad] = useState(false);
    let componentMounted = true;


    useEffect(() => {

        const getProducts = async () => {
            setLoad(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {

                setLoad(false);
                setData(await response.clone().json());
                setFilter(await response.json());
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }

        getProducts()

    }, [])

    const Load = () => {
        return (
            <>
                <h2 className='text-center'>Loading.....</h2>
                <div className="col-lg-4">
                    <Skeleton height="500px" />
                </div>

                <div className="col-lg-4">
                    <Skeleton height="500px" />
                </div>


                <div className="col-lg-4">
                    <Skeleton height="500px" />
                </div>

                <div className="col-lg-4">
                    <Skeleton height="500px" />
                </div>
            </>
        )
    }

    const filterProducts = (hello) =>{
        let updatelist = data.filter((a)=> a.category == hello);
        setFilter(updatelist)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="container d-flex justify-content-center gap-3">
                    <button className='btn btn-outline-dark fs-5 fw-bold' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark fs-5 fw-bold' onClick={()=>filterProducts("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark fs-5 fw-bold' onClick={()=>filterProducts("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark fs-5 fw-bold' onClick={()=>filterProducts("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark fs-5 fw-bold' onClick={()=>filterProducts("electronics")}>Electronics</button>
                </div>

                {filter.map((products) => {
                    return (
                        <>
                        <div className="col-lg-4 mt-3">
                            <div className="card text-center p-3">
                                <img src={products.image} height="400px" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title ">{products.title.substring(0,15)}...</h5>
                                    <p class="card-text lead fw-bold">Price : ${products.price}</p>
                                    <NavLink to={`/products/${products.id}`} class="btn btn-primary">Buy Now</NavLink>
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

            <div className="container py-5">
                <div className="row">
                    <div className="col lg-12">
                        <h2 className='text-center display-3 fw-bold'>All Products!</h2>
                        <hr className='w-50 mx-auto' />
                    </div>

                    {load ? <Load /> : <ShowProducts />}

                </div>
            </div>


        </>
    )
}

export default Products