import axios from "axios";
import { useContext, useEffect, useState } from "react";
import JobCard from "../../Components/Jobs/JobCard/JobCard";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyJobs = () => {
    useEffect(() => {
        document.title = 'Hirely | My Jobs';
    }, []);
    const [jobs, setJobs] = useState([])
    const {user} = useContext(AuthContext)
    
    useEffect(() => {
        axios.get('http://localhost:5000/job')
        .then(res => setJobs(res.data))
    }, [])
    
    
    const myJobs = jobs.filter(job => job.userEmail == user.email) 
    // console.log(jobs);
    // console.log(user.email);
    // console.log(myJobs);

    return (
        <div className="my-14 max-w-screen-lg mx-auto px-4 md:px-8">
            <div className="my-8">
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Explore The Jobs
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    myJobs.map((item, idx) => (<JobCard key={idx} data={item}></JobCard>))
                }
            </div>
            <Loader />
        </div>
    );
};

export default MyJobs;