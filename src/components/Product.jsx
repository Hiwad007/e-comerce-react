import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function Product() {
    let [Product , setProduct] = useState([]);
    let [load , setLoad] = useState(false)
    let {id} = useParams()

    let componentMounted = true;
    useEffect(()=>{

        const getProduct = async () =>{
            setLoad(true)
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if(componentMounted){
                setProduct(await response.json());
                setLoad(false)
            }

            return () =>{
                componentMounted =false;
            }
        }



        getProduct()

    },[])

    const Load = () =>{
        return(
            <>
                <h2>Loading.....</h2>
            </>
        )
    }

    const ShowProduct = () =>{
        return(
            <>
                <div className="col-lg-6">
                    <img src={Product.image} height="500px" alt="" />
                </div>

                <div className="col-lg-6">
                    <p className='text-uppercase fs-3 text-black-50'>Category : {Product.category}</p>
                    <hr className='w-75' />
                    <h3 className='mb-4'>{Product.title}</h3>
                    <h5>Rating : {Product.rating && Product.rating.rate}
                        <i className='fa fa-star ms-3 ' style={{color : "orange"}}></i>
                    </h5>
                    <h4 className='fw-bold mb-4 lead fs-4'>Price : $ {Product.price}</h4>
                    <h3>Description:</h3>
                    <h4 className=' mb-3 text-black-50'> {Product.description}</h4>
                    <h5>SIZE : </h5>
                    <select name="" className='form-control' id="">
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>

                    <div className='d-flex gap-3 mt-5'>
                    <button className='btn btn-outline-dark w-50 fw-bold fs-5'>Add To Cart</button>
                    <button className='btn btn-outline-dark w-50 fw-bold fs-5'>Buy Now</button>
                    </div>
                </div>
            </>
        )
    }
    return (
    <>
       
       <div className="container mt-5">
        <div className="row">
            {load ? <Load/> : <ShowProduct/>}
        </div>
       </div>
    </>
  )
}

export default Product