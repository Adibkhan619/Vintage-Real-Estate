import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-ring flex  h-64 mx-auto loading-lg"></span>
    }
    if(user){
        return children;
    }
    // else{
    //     toast("Please login first") 
        
    // }
    return (
        <Navigate to="/login"></Navigate>
        
    );
   
};

export default PrivateRoutes;
