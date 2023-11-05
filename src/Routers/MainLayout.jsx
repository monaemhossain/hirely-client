import { Outlet } from "react-router-dom";
import AppMenu from "../Components/Header/AppMenu/AppMenu";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-theme-color-3 bg-opacity-5">
            <AppMenu />
            <div className="min-h-[calc(100vh-442px)] ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;