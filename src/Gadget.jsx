import PropTypes from "prop-types";

const Gadget = ({gadget}) => {
    // console.log(gadget);
    const {price,category,cover,type,brand} = gadget;
    return (
        <div className="card card-compact bg-base-100 border p-3">
  <figure>
    <img className="w-full h-[300px] object-cover"
      src={cover}
      alt={category} />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex justify-between"><span>{brand}</span><span>{category}</span></h2>
    <div className="divider"></div>
    <div className="flex justify-between">
    <span>Price : ${price}</span>
    <span>Type : {type} </span>
    </div>
    
    <div className="card-actions mt-3">
      <button className="btn bg-red-300">Add to cart</button>
    </div>
  </div>
</div>
    );
};
Gadget.propTypes = {
    gadget : PropTypes.object,
}
export default Gadget;