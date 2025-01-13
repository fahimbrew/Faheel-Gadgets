import { useEffect } from "react";
import { useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
const [gadgets,setGadgets] = useState([]);
useEffect(()=>{
    fetch('gadgets.json')
    .then(res=>res.json())
    .then(data=>setGadgets(data))
},[])

    return (
        <div className="mt-10">
            <h3 className="text-3xl text-red-400 font-bold">Gadgets {gadgets.length} </h3>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4">
                {
                    gadgets.map((gadget,idx)=><Gadget key={idx} gadget = {gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;