import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="mb-6">
            <Navber></Navber>
            </div>

            <div className="mb-1">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;