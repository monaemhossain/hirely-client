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
        axios.get('https://hirely-server.vercel.app/application', { withCredentials: true })
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
            {
                myApplications == '' ? <h1 className="text-4xl text-center">You did not applied yet</h1> :
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        {
                            myApplications.map((item, idx) => (<JobCard key={idx} data={item}></JobCard>))
                        }
                    </div>
                    
            }
            <Loader />
        </div>
    );
};

export default AppliedJobs;
