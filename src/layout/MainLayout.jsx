import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

 
const MainLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
          <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;