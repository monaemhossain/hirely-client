import { Outlet } from "react-router-dom";
import AppMenu from "../Components/Header/AppMenu/AppMenu";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <AppMenu />
            <div className="min-h-screen bg-blue-gray-50">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;