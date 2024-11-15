
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";

const About = () => {
  const { loggedInuser } = useContext(UserContext);

  return (
    <div className="text-center">
      <h1 className="text-center text-3xl font-bold m-4 p-4">About Us</h1>
      
      {/* <div>
        Loggedin User
        <h1 className="text-xl font-bold">{loggedInuser}</h1>
      </div> */}

      {/* <h2>This is QuickBytes using React</h2> */}
      <User />
    </div>
  );
};

export default About;
