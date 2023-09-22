import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = ({addproduct}) => {
    

    const params = useParams()
    const [product, setproduct] = useState([]);

    const getproduct = (async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setproduct(response.data)
    });
    useEffect(() => {
        getproduct()
    },[] )

    return (
        <div className='container my-3' >
                <div className="row">
                    <div className="col-md-5  m-auto text-center ">
                    <img src={product.image} alt=""  className='text-center w-50 m-auto ' />
                    </div>
                    <div className="col-md-6 m-auto text-center ">
                    <h1 className=' ' > title: {product.title}    </h1>
                    <p className='' > description: {product.description}    </p>
                 <Link to="" className='bg-primary btn btn-lg mb-5 text-white text-decoration-none' onClick={()=>{addproduct(product)}} >Add to cart </Link>
                 
                    </div>
                </div>
                
        </div>
    );
}

export default Details;
