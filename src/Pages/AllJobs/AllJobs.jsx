import axios from "axios";
import JobCard from "../../Components/Jobs/JobCard/JobCard";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(res => setJobs(res.data))

    }, [])
   
    
    useEffect(() => {
        document.title = 'Hirely | All Jobs';
    }, []);
    return (
        <div className="my-14 max-w-screen-lg mx-auto px-4 md:px-8">
            
            <div className="my-8">
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Explore The Jobs
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.map((item, idx) => (<JobCard key={idx} data={item}></JobCard>))
                }
            </div>
            <Loader />
        </div>
    );
};

export default AllJobs;