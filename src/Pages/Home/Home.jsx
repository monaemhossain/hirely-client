import { useEffect } from "react";
import Banner from "../../Components/Header/Banner/Banner";
import JobTabs from "../../Components/JobTabs/JobTabs";

const Home = () => {
    useEffect(() => {
        document.title = 'Hirely | Home';
    }, []);
    return (
        <div>
            <Banner />
            
            <div className="max-w-screen-xl mx-auto px-4 py-14">
            <JobTabs />
            </div>
        </div>
    );
};

export default Home;