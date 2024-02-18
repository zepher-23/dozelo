import React from "react";
import '../globals.css'
import Cart from './Cart'
const Navbar = () => {
  return (
    <>
    <div className=" bg-stone-900 flex justify-center items-center " style={{width:'100vw',height:'100px'}}>
<h1 className="text-lime-500 font-sans text-3xl font-extrabold flex-grow" >Dozelo</h1><Cart />
    </div>
    
    </>
  )
};

export default Navbar;
