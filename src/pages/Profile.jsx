import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {

    const {userPhoto} = useContext(AuthContext);
    console.log(userPhoto); 

    return (
        <div>
            <img className="w-48" src={userPhoto} alt="" />
            <h1>Its profile</h1>
        </div>
    );
};

export default Profile;