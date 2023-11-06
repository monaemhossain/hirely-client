import { useEffect } from "react";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
    useEffect(() => {
        document.title = 'Hirely | Home';
    }, []);
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;