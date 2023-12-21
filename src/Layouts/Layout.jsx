import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div>
            <div className="min-h-screen">
            <Nav/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;