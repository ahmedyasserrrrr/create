import React, { useEffect } from 'react';

const Cartlist = ({cart}) => {

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.01'
        }
      }]
    });
  },
  onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('thanks for paying dear ' + details.payer.name.given_name);
      });
    }

}).render('#paypal-button');
  
    },[]);

   

    

    return (
        <div>
              {
                cart.map((cartiems,cartindex)=>{
                    return <div className="container">
                            <div className="card  shadow p-3 mb-5 bg-body-tertiary rounded py-4 mt-3  ">
                                <img src={cartiems.image} width={100}  alt="" />

                        <h2>{cartiems.title} </h2>
                        <br />
                        <div className='d-flex  '>              
                             <br />
                          <h5>the price of one piece: {cartiems.price}$ </h5>
                        </div>
                    </div>
                    </div>
                   
                })
            }

        <p  className='text-center  shadow p-3 mb-5 bg-body-tertiary text-black rounded' > Total : $
                {
                    cart.map(item=>item.price * item.quantity).reduce((total,value)=>total+value,0)
                    
                }

            </p>


     <p id="paypal-button"></p>
                

          
        </div>
        
    );
}

export default Cartlist;
