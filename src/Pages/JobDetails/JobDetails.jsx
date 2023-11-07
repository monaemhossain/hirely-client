import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const JobDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user);
    const { bannerPhoto, jobTitle, userName, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax, applicantsNumber, jobType, userEmail } = data
    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }
    const validateUser = isValidUrl(bannerPhoto)

    const handleSubmitApplication = (e) => {
        e.preventDefault()
        const userName = e.target.userName.value
        const userEmail = e.target.userEmail.value
        const userResume = e.target.resumeLink.value
        try {
            new URL(userResume);
            const applicationDetails = { userName, userEmail, userResume, bannerPhoto, jobTitle, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax, applicantsNumber, jobType }
            console.log(applicationDetails);

            // send job data to server
            fetch('http://localhost:5000/application', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(applicationDetails)
            })
                .then(res => res.json())
                .then(() => {
                    toast.success(`Your application successfully sent`)
                })
                .catch((err) => {
                    toast.error(err)
                })
        } catch (err) {
            toast.error('Your resume url is invalid')
            console.log(err);
        }
    }



    const handleUpdateJob = () => {

    }
    const disabledBtn = () => {
        toast.error("Your can't apply for your own job")
        console.log("cliced");
    }

    return (
        <section className="max-w-screen-xl mx-auto py-24">

            <div className="card lg:card-side bg-base-100 shadow-xl lg:grid grid-cols-2">
                <figure><img src={`${validateUser ? bannerPhoto : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'}`} alt={`${jobTitle} banner image`} className="object-cover h-full" /></figure>
                <div className="card-body">
                    <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job posted by:</span> {userName}</p>
                    <div className="grid gap-2">
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Posted date:</span> {postingDate}</p>
                        <p className="flex gap-2"><span className="font-bold text-theme-color-4">Application deadline:</span> {deadLine}</p>
                    </div>
                    <div className="grid gap-2">
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Price range:</span> ${priceRageMin} - ${priceRageMax} /hour</p>
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job Category:</span> {jobCategory}</p>
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job Type:</span> {jobType} job</p>

                    </div>
                    <h2 className="card-title"><span className="font-bold text-theme-color-4">Role:</span> {jobTitle}</h2>
                    <p><span className="font-bold text-theme-color-4 text-lg">Job description: </span><br />{jobDescription}</p>
                    <div className="card-actions lg:justify-end justify-center items-center max-sm:grid grid-flow-row gap-3">
                        <p className="justify-start"><span className="font-bold text-theme-color-4">Number of Applicants:</span> <span className="font-bold">{applicantsNumber}</span></p>
                        {
                            user.email == userEmail ? <button onClick={handleUpdateJob} className='btn bg-white border border-theme-color-5 text-theme-color-5 hover:bg-theme-color-1 transition-all hover:text-white'>Update job details</button> : ''
                        }
                        {
                            user.email == userEmail ? <button onClick={disabledBtn} className="btn bg-gray-200 cursor-not-allowed  text-theme-color-5 transition-all px-12">Apply</button>:<button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn bg-white border border-theme-color-5 text-theme-color-5 hover:bg-theme-color-1 transition-all hover:text-white px-12">Apply</button>
                        }
                    </div>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <form onSubmit={handleSubmitApplication} className="grid gap-2">
                        <label htmlFor="userName">Applicant name</label>
                        <input
                            id="userName"
                            defaultValue={user.displayName}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-2 shadow-sm rounded-lg"
                            required
                        />

                        <label htmlFor="userEmail">Applicant email</label>
                        <input
                            id="userEmail"
                            defaultValue={user.email}
                            type="text"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-2 shadow-sm rounded-lg"
                            required
                            disabled
                        />
                        <label htmlFor="resumeLink">Applicant resume link</label>
                        <input
                            id="resumeLink"
                            type="text"
                            placeholder="Your resume link address"
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-2 shadow-sm rounded-lg"
                            required
                        />
                        <div className="modal-action grid grid-cols-2">
                            <button type="submit" className="btn bg-theme-color-2 hover:bg-theme-color-1 hover:text-white">Submit Application</button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn w-full btn-error text-white hover:bg-red-500 transition-all">Close</button>
                            </form>
                        </div>
                    </form>




                </div>
                <Toaster />
            </dialog>
        </section>
    );
};

export default JobDetails;