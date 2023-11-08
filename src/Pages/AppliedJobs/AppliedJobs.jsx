import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import JobCard from "../../Components/Jobs/JobCard/JobCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AppliedJobs = () => {
    useEffect(() => {
        document.title = 'Hirely | Applied Jobs';
    }, []);
    const { user } = useContext(AuthContext);

    const [appliedJob, setAppliedJob] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/application', { withCredentials: true })
            .then(res => setAppliedJob(res.data))
    }, [])
    const myApplications = appliedJob.filter(job => job.applicantEmail == user.email)
    

    const handleFilterJob = (key) => {
        axios.get(`http://localhost:5000/search/${key}`, { withCredentials: true })
            .then(res => setAppliedJob(res.data))
    }

    return (
        <div className="my-14 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="my-8">
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Your applied jobs
                </h1>


                <select id="filterJob" onChange={handleFilterJob} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Remote</option>
                    <option>On site</option>
                    <option>Part time</option>
                    <option>Full time</option>
                    <option>Hybrid</option>
                </select>



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
