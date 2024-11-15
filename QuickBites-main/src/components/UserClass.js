// class based component of user

import React, { Component } from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Default",
                avata_url: "Default Photo"
            },
        };
    }

    async componentDidMount() {
        // API Call
        const data = await fetch("https://api.github.com/users/Vansh003");
        const json = await data.json();

        // console.log(json);

        this.setState({
            userInfo: json,
        });
    };

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    };

    componentWillUnmount() {
        // console.log("componentWillUnmount");
    };

    render() {

        const { name, location, avatar_url } = this.state.userInfo;
        // debugger;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: quickBytes@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;


// LIFECYCLE OF A COMPONENT 

// --- MOUNTING CYCLE ---
//     Constructor (updates the state with dummy data)
    
//     Render (happens with dummy data)
//         <HTML> has dummy data now (component is rendered with dummy data)
    
//     componentDidMount() is called
//         <API call is made>
//         <this.setState> -> state variable is updated
// --- MOUNTING CYCLE FINISHED ---

// --- UPDATE CYCLE ---
//     Render (now it'll happen with new API data)
//         <HTML> has new data.. now react Updates the DOM

//     componentDidUpdate() is called
// --- UPDATE CYCLE FINISHED ---

// --- UNMOUNTING ---
//     componentWillUnmount() will be called just before the unmounting of the component
// --- UNMOUNTING IS DONE ---

