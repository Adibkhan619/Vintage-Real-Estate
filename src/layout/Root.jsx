import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto mt-8">
                <Outlet></Outlet>    
            </div>
                 
        </div>
    );
};

export default Root;