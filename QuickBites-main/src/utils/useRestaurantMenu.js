
import { useEffect, useState } from "react";
import axios from 'axios';

const useRestaurantMenu = (resID) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resID]); // Add resID as a dependency if it can change

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/restaurants/${resID}`, {
                maxBodyLength: Infinity,
                headers: {}
            });
            setResInfo(response.data); // Directly set the response data
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;
