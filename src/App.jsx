import Banner from "./Banner"
import Gadgets from "./Gadgets"
import Header from "./Header"
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [gadgets,setGadgets] = useState([]);
  const [addItems,setAddItems] = useState([]);
  const [addPrice,setAddPrice] = useState(0);
  
  useEffect(()=>{
      fetch('gadgets.json')
      .then(res=>res.json())
      .then(data=>setGadgets(data))
  },[])

  const handleToCart = (gadget) =>{
    // setAddItems(addItems+1);
    // check if the id is exist
    const isExist = addItems.find(p=>p.id == gadget.id);
    if(addItems.length>4){
      return toast.error("Can not add more than 5 items");
      
    }
    if(!isExist){
      toast.success("Successfully Added")
      setAddItems([...addItems,gadget])
      setAddPrice(gadget.price + addPrice);
    }else{
      toast.error('Already Exist')
    }
    
    

    
    
  }

  const handleRemoveFromCart = gadget =>{
    // console.log(gadget);
    // console.log("ami delete korar kaaj kori")
    const remainigCart = addItems.filter(p=>p.id !== gadget.id);
    setAddItems(remainigCart);
    setAddPrice(addPrice-gadget.price);
    toast.error(`${gadget.brand} has been removed from the cart`);
  }

  return (
    <main>
      <section className="container mx-auto">
      <Header 
      addItems = {addItems}
      addPrice = {addPrice}
      gadgets = {gadgets}
      handleToCart = {handleToCart}
      handleRemoveFromCart = {handleRemoveFromCart}
      ></Header>
      <Banner></Banner>
      <Gadgets 
      gadgets = {gadgets}
      handleToCart = {handleToCart}
      ></Gadgets>
      </section>
      <ToastContainer />
    </main>
  )
}

export default App
