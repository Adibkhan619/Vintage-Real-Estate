import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div className=" bg-cover bg-center bg-no-repeat poppins" style={{backgroundImage: `url('https://i.postimg.cc/d13M5kNN/trianglify-lowres-1.png')`}}>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto py-8">
                <Outlet></Outlet>    
            </div>
                <Footer></Footer> 
        </div>
    );
};

export default Root;