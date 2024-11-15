import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="text-center">
      <h1 className=" py-4 text-2xl font-semibold">Cart</h1>
      {items.length !== 0 ? (
        <button
          onClick={handleClearCart}
          className="bg-black text-white rounded-xl p-2 m-2"
        >
          Clear cart
        </button>
      ) : (
        items.length === 0 && <h1>Cart is Empty</h1>
      )}

      <div className="w-6/12 m-auto">
        <ItemList itemName={items} />
      </div>
    </div>
  );
};
export default Cart;
