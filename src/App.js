import React from "react";
import Navbar from "./componant/Navbar";
import Home from "./componant/Home";
import Footer from "./componant/Footer";
import About from "./componant/About";
import Contacts from "./componant/Register";
import Details from "./componant/Details";
import { Route, Routes } from "react-router-dom";
import Register from "./componant/Register";
import { useState } from "react";
import Cartlist from "./componant/Cartlist";
import Create from "./componant/Create";
import Productscard from "./componant/productscard";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Searchproduct from "./componant/Searchproduct";



function App() {

      const [cart,setcart]=useState([]);

      const [mymode,setmode]=useState('light');

      const darkTheme = createTheme({
        palette: {
          mode: mymode ,
        },
      });
      

      const addproduct = (data)=>{
        console.log(data)
        setcart([...cart,{...data,quantity:1}]);
      }          

      const [showcart,setshowcart]=useState([])

      const handleshow=(value)=>{
        setshowcart(value)
      }


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Navbar/>
    <Routes>
      <Route path="create" element ={<Create/>} />
      <Route path="home" element ={<Home setmode={setmode}  />} />
      <Route path="About" element ={<About/>} />
      <Route path="/Register" element ={<Register/>} />
      <Route path="Productscard" element ={<Productscard setmode={setmode}  />} />
      <Route path="Details/:id" element ={<Details  addproduct={addproduct}   />} />
      <Route path="Cart" element ={<Cartlist  cart={cart} />} />
    </Routes>

    <Footer  handleshow={handleshow}   count={cart.length}   />


      </ThemeProvider>
    </div>
  );
}

export default App;
