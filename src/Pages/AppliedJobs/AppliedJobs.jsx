import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import JobCard from "../../Components/Jobs/JobCard/JobCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AppliedJobs = () => {
    useEffect(() => {
        document.title = 'Hirely | Applied Jobs';
    }, []);
    const {user} = useContext(AuthContext);

    const [appliedJob, setAppliedJob] = useState([]) 
    useEffect(() => {
        axios.get('http://localhost:5000/application')
            .then(res => setAppliedJob(res.data))
    }, [])
    const myApplications = appliedJob.filter(job => job.applicantEmail == user.email)
    return (
        <div className="my-14 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="my-8">
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Your applied jobs
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    myApplications.map((item, idx) => (<JobCard key={idx} data={item}></JobCard>))
                }
            </div>
            <Loader />
        </div>
    );
};

export default AppliedJobs;