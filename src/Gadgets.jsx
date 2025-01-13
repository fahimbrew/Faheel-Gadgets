import PropTypes from "prop-types";
import Gadget from "./Gadget";

const Gadgets = ({gadgets,handleToCart}) => {


    return (
        <div className="mt-10">
            <h3 className="text-3xl text-red-400 font-bold">Gadgets {gadgets.length} </h3>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4">
                {
                    gadgets.map((gadget,idx)=><Gadget key={idx} 
                    gadget = {gadget}
                    handleToCart = {handleToCart}
                    ></Gadget>)
                }
            </div>
        </div>
    );
};

Gadgets.propTypes = {
    gadgets : PropTypes.array,
    handleToCart : PropTypes.func,
}

export default Gadgets;