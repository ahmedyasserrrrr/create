import React, { useState } from 'react';
import './Login.css';

const Register = () => {
    const[user,setuser]=useState('');
    const[pass,setpass]=useState('');
    const[gmail,setgmail]=useState('');
    const[error,seterror]=useState(false);

        
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(user.length ==0 && pass.length == 0 && gmail.length==0 ){
          seterror(true)
        }
      
      }
    
    return (
        <div>
             <div className="cardd  mt-3 ">
      <form  onSubmit={handlesubmit} className="  mb-3 " >
        <label htmlFor="name">NAME:</label>
        <input type="text" id="name" name="name" placeholder=" ENTER YOUR NAME"  onChange={(e)=>{setuser(e.target.value)}}  />
        {error && user.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your name</small> : '' }
        <label htmlFor="email"> GMAIL : </label>
        <input type="email" id="email" name="email" placeholder=" ENTER YOUR GMAIL "  onChange={(e)=>{setgmail(e.target.value)}} />
        {error && gmail.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your Gmail</small> :'' }
        <label htmlFor="password">PASSWORD:</label>
        <input type="email" id="email" name="email" placeholder=" ENTER YOUR PASSWORD "  onChange={(e)=>{setpass(e.target.value)}} />
        {error && pass.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your Pass..</small> :'' }

        <input type="submit" value="Submit"    />
      </form>
    </div>
        </div>
    );
}

export default Register;
