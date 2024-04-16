import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-2xl px-24 flex justify-center mx-auto">
                <Outlet></Outlet>    
            </div>
                 
        </div>
    );
};

export default Root;