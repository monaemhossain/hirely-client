import { useEffect } from "react";
import Banner from "../../Components/Header/Banner/Banner";
import JobTabs from "../../Components/JobTabs/JobTabs";
import WhoIsHiring from "../../Components/WhoIsHiring/WhoIsHiring";
import Contact from "../../Components/Contact/Contact";
import FAQs from "../../Components/FAQs/FAQs";

const Home = () => {
    useEffect(() => {
        document.title = 'Hirely | Home';
    }, []);
    return (
        <div>
            <Banner />
            
            <div className="max-w-screen-xl mx-auto px-4 py-14">
            <JobTabs />
            <WhoIsHiring />
            <FAQs />
            
            <Contact />
            </div>
        </div>
    );
};

export default Home;