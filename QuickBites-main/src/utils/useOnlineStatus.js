import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    // check if online
    // to check if youre online or offline, an eventlistener will be used which will keep a track of when you're online and when you're offline
    useEffect(() => {
        
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    }, []);


    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;