import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { GiEvilMoon } from 'react-icons/gi';

const Productscard = ({setmode}) => {
    const [prod, setprod] = useState([]);
    const [search, setsearch] = useState('');

    const theme=useTheme();



    useEffect(() => {
        const fetchprod = (async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                setprod(response.data);
            }
            catch (error) {
                console.log(error)
            };
        })
        fetchprod()
    });

    const handlesearch = (e) => {
        setsearch(e.target.value);
    }

    const filterprod = prod.filter((prod) =>
        prod.category && prod.category.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
        <nav className="navbar navbar-expand-lg  bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" href="/">
                    Shopo Shop
                    </Link>
         <input type="search" className=' form-control-sm m-auto' placeholder='search product' value={search} onChange={handlesearch} />
          
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   Menu               
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/create">Home</Link>
                        </li>
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to='/About'>About </Link>
                        </li>
                        <li className="nav-item">
                        <Link className='text-dark mt-3 m-auto fs-4' onClick={ () => { setmode(theme.palette.mode === 'light' ? 'dark':'light'  ) }}  > 
                        <GiEvilMoon/>
       </Link>                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        <div className='container'>
            <div className='row'>

                    {

                        filterprod.map((prod) => (

                     <div className="col-md-4  ">

               <div className="card p-2 m-2 text-center shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={prod.image} alt="" height={200} className='text-center w-50 m-auto ' />
                                <h1 className='h-50 ' >  {prod.category}    </h1>
                                <h2>${prod.price} </h2>
                                <Link to={`/Details/${prod.id}`} className=' btn btn-primary p-2 text-white text-decoration-none' >Details</Link>
                            </div>
                        </div>

                        ))};
            </div>
        </div>

    </div>
    );
}

export default Productscard;
