import React from 'react';
import { Link } from 'react-router-dom';


const Footer = (props) => {
  
    
  

    return (
        <div className='bg-light  text-center fixed-bottom p-2 ' >
        <div className="footer-icons">
          <span className="icon p-4 m-auto ">
          <Link to="/home">
          <i className="fas fa-home" > </i>
            </Link>  
          </span>
         
          <span className="icon p-4   m-auto ">
            <Link to="Cart" className='text-decoration-none text-danger'  onClick={()=>props.handleshow()} >
            <i className="fas fa-shopping-cart"></i>
            {props.count}
            </Link>
          </span>

          <span className="icon p-4  m-auto ">
    <Link to="/Register">
   <i className="fas fa-user-plus text-black"></i>
    </Link> 
       </span>
          <span className="icon p-4  m-auto ">
  
       </span>
          </div>
      </div>
  
    );
}

export default Footer;

