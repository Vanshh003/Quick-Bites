import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {

    // to read the cart items (store items) you need to subscribe to the store
    const cartItems = useSelector((store) => store.cart.items);


    // the same can also be written as, if we subscribe to the whole store and then extract the required items
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

 
    // both these two will work exactly the same, but the 2nd one is way less efficient that 1st one
    // when we write like this, the 2nd way, this store variable is subscribed to the redux store.. whenever anything changes inside the store, the cart component will get to know.. i.e. this store variable will be updated whenever anything changes in the entire store.. 
    // which leads to unnecessary changes and updatation.. hence only subscribe to the small portion of the store..  only the required one..




    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())

        toast.success("Cart is cleared!")
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>

            <div className="w-6/12 m-auto">
                <button 
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>

                {cartItems.length === 0 && <h1> Cart is Empty. Add Items! </h1>}

                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;