import { useContext } from 'react';
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { loggedInuser } = useContext(UserContext);

    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        rating, 
        costForTwo, 
        deliveryTime,  
    } = resData;
    
    return (
        // <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
        <div 
            className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200' 
            // style={{ backgroundColor: "#f0f0f0" }}
        >
            <img 
                // className='res-logo'
                className="rounded-lg"
                alt='res-logo'
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{rating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>User: {loggedInuser}</h4> 
        </div>
        
    );
};




// higher order component for restautant card with promoted label
    // input - RestaurantCard
    // output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}





export default RestaurantCard