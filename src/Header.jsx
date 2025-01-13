import PropTypes from "prop-types";
import Modal from "./Modal";

const Header = ({addItems,addPrice,handleRemoveFromCart}) => {
    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-red-400 text-3xl"><span className="text-purple-500">Faheel Gadget</span> & Gear</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">{addItems.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{addItems.length} Items</span>
                <span className="text-info">Subtotal: ${addPrice}</span>
                <div className="card-actions">
                  {/* modal starts */}
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-purple-300 text-white" onSubmit={handleSubmit} onClick={()=>
    {document.getElementById('my_modal_1').showModal()
    
    }
    
    }>View Cart</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="text-center underline text-2xl font-semibold">Items List</h3>
  <div>
    {
      addItems.map((gadget,idx)=><Modal key={idx} 
      gadget = {gadget}
      handleRemoveFromCart = {handleRemoveFromCart}
      ></Modal>)
    }
  </div>
    <div className="modal-action w-full">
      <form className="w-full" method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn w-full">Close</button>
      </form>
    </div>
  </div>
</dialog>
                  {/* modal ends */}
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img className="object-cover"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/p2Lsff4/photo-1662348317573-594daeff9ce1-q-80-w-2924-auto-format-fit-crop-ixlib-rb-4-0.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

Header.propTypes = {
    addItems : PropTypes.array,
    addPrice : PropTypes.number,
    handleToCart : PropTypes.func,
    handleRemoveFromCart : PropTypes.func,
}
export default Header;