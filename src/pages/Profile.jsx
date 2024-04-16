import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {

    const {user} = useContext(AuthContext);
     

    return (
        <div>
            <img className="w-48" src={user.photoURL} alt="" />
            <h1>Its profile</h1>
        </div>
    );
};

export default Profile;