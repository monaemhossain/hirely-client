import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PostJob.css';

const PostJob = () => {

    const { user } = useContext(AuthContext);

    // const [successMsg, setSuccessMsg] = useState('')
    // const [errorMsg, setErrorMsg] = useState('')
    const [postDate, setPostDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())

    const handlePostJob = (e) => {
        e.preventDefault();
        const bannerPhoto = e.target.bannerPhoto.value
        const jobTitle = e.target.jobTitle.value
        const userName = e.target.userName.value
        const jobCategory = e.target.jobCategory.value
        const postingDate = e.target.postingDate.value
        const deadLine = e.target.deadLine.value
        const jobDescription = e.target.jobDescription.value
        const priceRageMin = e.target.priceRageMin.value
        const priceRageMax = e.target.priceRageMax.value
        const applicantsNumber = 0;

        const jobData = { bannerPhoto, jobTitle, userName, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax,applicantsNumber }
        console.log(jobData);
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



                        <div>
                            <select id="jobCategory" className="select select-bordered w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg" required>
                                <option value="0">Select Job Category</option>
                                <option>On Site</option>
                                <option >Remote</option>
                                <option>Part-Time</option>
                                <option>Hybrid</option>
                            </select>
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
                                <DatePicker id='deadLine' selected={startDate} onChange={(date) => setStartDate(date)} className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg' />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="jobDescription">
                                Job Description
                            </label>
                            <textarea
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
        </main>
    )

}

export default PostJob;