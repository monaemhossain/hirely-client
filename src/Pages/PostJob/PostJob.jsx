import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PostJob.css';
import toast, { Toaster } from "react-hot-toast";

const PostJob = () => {
    useEffect(() => {
        document.title = 'Hirely | Post Job';
    }, []);

    const { user } = useContext(AuthContext);
    
    const [postDate, setPostDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())

    const handlePostJob = (e) => {
        e.preventDefault();
        const bannerPhoto = e.target.bannerPhoto.value
        const jobTitle = e.target.jobTitle.value
        const userName = e.target.userName.value
        const userEmail = user.email;
        const jobCategory = e.target.jobCategory.value
        const jobType = e.target.jobType.value
        const postingDate = e.target.postingDate.value
        const deadLine = e.target.deadLine.value
        const jobDescription = e.target.jobDescription.value
        const priceRageMin = e.target.priceRageMin.value
        const priceRageMax = e.target.priceRageMax.value
        const applicantsNumber = 0;

        const jobData = { bannerPhoto, jobTitle, userName, userEmail, jobType, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax, applicantsNumber }
        // console.log(jobData);
        // send job data to server
        fetch('https://hirely-server.vercel.app/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(`${jobTitle} Successfully Posted`)
            })
            .catch((err)=>{
                toast.error(err)
            })
        document.postJobForm.reset();


    }



    return (
        <main className="w-full h-full py-10 flex flex-col items-center justify-center bg-gray-50 sm:px-4">

            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">

                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Post your job</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handlePostJob}
                        className="space-y-5"
                        name="postJobForm"
                    >
                        <div>
                            <label className="font-medium" htmlFor="bannerPhoto">
                                Banner photo url
                            </label>
                            <input
                                placeholder="https://example.com/banner.jpg"
                                id="bannerPhoto"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="jobTitle">
                                Job Title
                            </label>
                            <input
                                id="jobTitle"
                                type="text"
                                placeholder="Marketing Coordinator, Sales Manager"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="userName">
                                User Name
                            </label>
                            <input
                                id="userName"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"
                                defaultValue={user.displayName}

                            />
                        </div>

                        <div className="md:grid grid-cols-2 gap-2.5 justify-center items-center">
                            <div>
                                <label className="font-medium " htmlFor="jobType">
                                    Job type
                                </label>
                                <select id="jobType" className="h-[42px] mt-2 px-2  w-full  text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg" height='40' required>
                                    <option value="" defaultValue disabled>Select Job Type</option>
                                    <option>On Site</option>
                                    <option >Remote</option>
                                    <option>Part-Time</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className="font-medium" htmlFor="jobCategory">
                                    Job Category
                                </label>
                                <input
                                    id="jobCategory"
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"

                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-medium">
                                Price Range:
                            </label>
                            <div className="grid grid-cols-2 gap-2.5">
                                <input
                                    id="priceRageMin"
                                    type="number"
                                    placeholder="$50"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg appearance-none"
                                />
                                <input
                                    id="priceRageMax"
                                    type="number"
                                    placeholder="$200"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg appearance-none"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                            <div>
                                <label className="font-medium" htmlFor="postingDate">
                                    Posting Date
                                </label>
                                <DatePicker id="postingDate" selected={postDate} onChange={(date) => setPostDate(date)} className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg' disabled />
                            </div>
                            <div>
                                <label className="font-medium" htmlFor="deadLine">
                                    Deadline
                                </label>
                                <DatePicker id='deadLine' selected={startDate} onChange={(date) => setStartDate(date)} className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg' required/>
                            </div>
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="jobDescription">
                                Job Description
                            </label>
                            <textarea
                                rows="7"
                                id="jobDescription"
                                type="text"
                                placeholder="Please provide a brief description of your qualifications and experience related to this position"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-theme-color-4 hover:bg-theme-color-1 active:bg-theme-color-4 rounded-lg duration-150"
                        >
                            Post Job
                        </button>
                    </form>

                </div>
            </div>
            <Toaster/>
        </main>
    )

}

export default PostJob;