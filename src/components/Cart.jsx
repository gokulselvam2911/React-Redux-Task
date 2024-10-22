import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeItem } from "../features/cartSlice";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleBuyItem = (item) => {
    alert(`Purchased: ${item.title} for ₹${item.price.toFixed(2)}`);
    // Logic to handle item purchase, such as calling an API
  };

  const handleBuyAll = () => {
    if (cartItems.length > 0) {
      alert(`Purchased all items for ₹${totalAmount.toFixed(2)}`);
      // Logic to handle purchasing all items in the cart
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">₹{Number(item.price).toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <FaMinusCircle />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-secondary"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <FaPlusCircle />
                    </button>
                  </div>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove <FaTrash />
                  </button>
                  &nbsp;
                  &nbsp;
                  <button
                    className="btn btn-success mt-2"
                    onClick={() => handleBuyItem(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-right">
        <h4>Total Quantity: {totalQuantity}</h4>
        <h4>Total Amount: ₹{Number(totalAmount).toFixed(2)}</h4>
        <button className="btn btn-primary mt-3" onClick={handleBuyAll}>
          Buy All
        </button>
      </div>
    </div>
  );
};

export default Cart;
