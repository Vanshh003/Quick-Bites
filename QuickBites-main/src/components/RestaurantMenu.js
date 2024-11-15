import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resID } = useParams();
    const resInfo = useRestaurantMenu(resID);
    const [showIndex, setShowIndex] = useState(0);

    if (!resInfo) {
        return <Shimmer />;
    }

    console.log(resInfo);

    // Destructure with fallback values
    const { name = "Unknown Restaurant", cuisines = [], costForTwo = "N/A", rating = "No rating", menu = [] } = resInfo;

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>Cost for Two: {costForTwo}</p>
            <p>Rating: {rating}</p>
            {menu.map((category, index) => (
                <RestaurantCategory 
                    key={category.title} 
                    data={category} 
                    showItems={index === showIndex} 
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
