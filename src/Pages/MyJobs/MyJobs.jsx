import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import validator from "validator";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const MyJobs = () => {
    useEffect(() => {
        document.title = 'Hirely | My Jobs';
    }, []);
    const [jobs, setJobs] = useState([])

    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get('https://hirely-server.vercel.app/job')
            .then(res => setJobs(res.data))
    }, [])

    const navigate = useNavigate()

    const handleDeleteJob = (id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://hirely-server.vercel.app/job/${id}`)
                        .then(() => {
                            axios.get('https://hirely-server.vercel.app/job')
                                .then(res => setJobs(res.data))
                                .catch((err) => console.log(err))
                            swal("Your Job has been deleted!", {
                                icon: "success",
                            })
                        });
                } else {
                    swal("Canceled!");
                }
            });
    }
    const myJobs = jobs?.filter(job => job.userEmail == user.email)
    const handleUpdateJob = (id) => {
        navigate(`/update/${id}`)
    }


    return (
        <div className="my-14 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="my-8">
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Your posted jobs
                </h1>
            </div>
            {
                myJobs == '' ? <div className="h-40 grid justify-center items-center text-center"><h1 className="text-4xl">You did not posted any job yet</h1></div> :
                    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left">
                            <thead className="text-gray-600 font-medium border-b">
                                <tr>
                                    <th className="py-3 px-6">Thumbnail</th>
                                    <th className="py-3 px-6">Job Title</th>
                                    <th className="py-3 px-6"> Username</th>
                                    <th className="py-3 px-6">Job Category</th>
                                    <th className="py-3 px-6">Salary range</th>
                                    <th className="py-3 px-6">Description</th>
                                    <th className="py-3 px-6">Deadline</th>
                                    <th className="py-3 px-6">Applicant count</th>
                                    <th className="py-3 px-6"></th>

                                </tr>
                            </thead>
                            <tbody className="text-gray-600 divide-y">
                                {
                                    myJobs.map((item, idx) => (
                                        <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                                            <td className="px-6 py-4 items-center gap-x-4 text-black">
                                                <img className="h-18 w-20 object-contain" src={validator.isURL(item.bannerPhoto) ? item.bannerPhoto : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt="" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.jobTitle.slice(0, 10)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap items-center gap-x-4"><p>{item.userName}</p></td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.jobCategory.length > 15 ? `${item.jobCategory.slice(0, 15)}...` : item.jobCategory}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">${item.priceRageMin} - ${item.priceRageMax} /hr</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.jobDescription.length > 15 ? `${item.jobDescription.slice(0, 15)}...` : item.jobDescription}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.deadLine}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{item.applicantsNumber}</td>
                                            <td className="text-right px-6 whitespace-nowrap">
                                                <button onClick={() => handleUpdateJob(item._id)} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDeleteJob(item._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }
            <Toaster />
            <Loader />
        </div>
    );
};

export default MyJobs;


