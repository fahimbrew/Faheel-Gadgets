import PropTypes from "prop-types";
import { ImBin2 } from "react-icons/im";
const Modal = ({gadget,handleRemoveFromCart}) => {
    // console.log(gadget);
    const {brand,price,cover,category} = gadget;
    return (
        <div>
            
            <div className="flex justify-between m-2">
            <div className="flex gap-4">
                <img className="w-12 h-12 object-cover" src={cover} alt="" />
                <div>
                    <h3 className="font-bold">{brand}</h3>
                    <p className="text-gray-400">{category}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
               <p>${price}</p>
               <button onClick={()=>handleRemoveFromCart(gadget)} className="text-red-500"><ImBin2 /></button>
            </div>
        </div>
        </div>
    );
};
Modal.propTypes = {
    gadget : PropTypes.object,
    handleRemoveFromCart : PropTypes.func,
}
export default Modal;