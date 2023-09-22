import React from 'react';
import Productscard from './productscard';


const Home = ({setmode}) => {

        
    
    

    return (
        <div className=' '>

       


                {                    
                        
                      <Productscard  setmode={setmode} />                           
                       
                }
                

            
        </div>
    );
}

export default Home;
