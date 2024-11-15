
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";

const ItemList = ({ items }) => {

    // this dispatch is a function that we get from a hook useDispatch
    // useSelector for reading
    // useDispatch for dispatching
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));  // whatever we pass inside this will go to the reducer function, as action.payload, inside the cart
        // whenever we dispatch this action, redux'll take whatever data it's passing in, it'll create an object, and will create payload inside that object and add whatever data passed to that payload.. and it'll take this object and pass it as the second argument in the cartSlice
        
        // Show success toast message when item is added
        toast.success(`${item.name} successfully added to cart`, {
            position: 'top-right',  // Show toast in the top right corner
        });

        // {
        //     payload: "pizza"
        // }
    };

    return (
        <div>
           {items.map((item) => (
                <div key={item.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.name}</span>
                            <span> - ₹ {item.price ? item.price / 100 : item.defaultPrice / 100}</span>
                        </div>

                        <p className="text-xs">{item.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button 
                                className="p-2 mx-20 rounded-lg bg-black text-white shadow-lg"
                                // dispatch and action on click of the button
                                onClick={() => handleAddItem(item)}
                            >
                                Add+
                            </button>
                        </div>
                       
                        <img src={CDN_URL + item.imageId} className="w-full"/>
                    </div>
                
                </div>
           ))}
        </div>
    );
};

export default ItemList;
