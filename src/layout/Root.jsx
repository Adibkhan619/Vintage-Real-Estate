import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div className=" bg-cover bg-center bg-no-repeat opacity-95" style={{backgroundImage: `url('https://i.postimg.cc/kGqPm1TG/cool-background-5.png')`}}>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto py-8">
                <Outlet></Outlet>    
            </div>
                <Footer></Footer> 
        </div>
    );
};

export default Root;