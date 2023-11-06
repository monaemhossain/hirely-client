import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../../Components/Jobs/JobCard/JobCard";

const MyJobs = () => {
    const [myJobs, setMyJobs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/jobs')
            .then(res => setMyJobs(res.data))

    }, [])
    console.log(myJobs);
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
        </div>
    );
};

export default MyJobs;