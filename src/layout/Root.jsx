import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Root = () => {
    return (
        <div>
            <h3>I am Root</h3>
            <Navbar></Navbar>
            <Outlet></Outlet>         
        </div>
    );
};

export default Root;