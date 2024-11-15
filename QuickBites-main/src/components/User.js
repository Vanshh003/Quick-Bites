import { useEffect, useState } from "react"

const User = (props) => {

    // const [count] = useState(0);
    // const [count2] = useState(1);
    const [userInfo, setUserInfo] = useState({
        name: "Default Name",
        location: "Default",
        avatar_url: "Default url"
    });


    useEffect(() => {
        // API Calls
        getUserInfo();
    }, []);

    async function getUserInfo () {
        const data = await fetch("https://api.github.com/users/Vansh003");
        const json = await data.json();

        setUserInfo(json);
    }


    const { name, location, avatar_url } = userInfo;

    return (
        <div className="font-bold user-card m-4 p-4 bg-gray-50 rounded-lg flex justify-center">
            {/* <img className=" h-12" src={avatar_url} /> */}
            <div className="flex justify-center mx-4">
                <img className="h-20 w-20" src={avatar_url} alt="User Avatar" />
            </div>

            <div className="flex flex-col items-start">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: quickBytes@gmail.com</h4>
            </div>
            
        </div>
    )
}

export default User