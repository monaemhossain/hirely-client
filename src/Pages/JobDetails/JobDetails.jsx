import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { usePDF } from "react-to-pdf";

const JobDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext)
    // console.log(data);
    const { _id, bannerPhoto, jobTitle, userName,applicantName, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax, applicantsNumber, jobType, userEmail, applicantEmail } = data
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
        const applicantName = e.target.userName.value
        const applicantEmail = e.target.userEmail.value
        const applicantResume = e.target.resumeLink.value
        try {
            new URL(applicantResume);
            const applicationDetails = { applicantName, applicantEmail, applicantResume, bannerPhoto, jobTitle, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax, applicantsNumber, jobType }
            // console.log(applicationDetails);

            // send job data to server
            fetch('https://hirely-server.vercel.app/application', {
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
    // compare job dead line
    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    const today = year + "/" + month + "/" + day;

    const jobDeadLine = deadLine.replace(/-/g, '/')
// navigate to update job page
    const navigate = useNavigate()
    const handleUpdateJob = () => {
        navigate(`/update/${_id}`)
    }
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    return (
        <section className="max-w-screen-xl mx-auto py-24"  ref={targetRef}>

            <div className="card lg:card-side bg-base-100 shadow-xl lg:grid grid-cols-2">
                <figure><img src={`${validateUser ? bannerPhoto : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'}`} alt={`${jobTitle} banner image`} className="object-cover h-full" /></figure>
                <div className="card-body">
                    {
                        userName?<p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job posted by:</span> {userName}</p>:<p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Applicant name:</span> {applicantName}</p>
                    }
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
                            applicantEmail ? <button className="btn"  onClick={() => toPDF()}>Download Application</button> : <>
                                {
                                    applicantEmail ? '' : user.email == userEmail ? <button onClick={handleUpdateJob} className='btn bg-white border border-theme-color-5 text-theme-color-5 hover:bg-theme-color-1 transition-all hover:text-white'>Update job details</button> : ''
                                }
                                {
                                    user.email == userEmail || jobDeadLine > today ? <button className="btn px-5 text-white hover:bg-red-500 transition-all" disabled="disabled">Apply</button> : <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn bg-white border border-theme-color-5 text-theme-color-5 hover:bg-theme-color-1 transition-all hover:text-white px-12">Apply</button>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello! {user.displayName}</h3>
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
                            <button type="submit" className="btn bg-theme-color-2 hover:bg-theme-color-1 hover:text-white mt-5">Submit Application</button>
                    </form>
                        <div className="modal-action grid grid-cols-1">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn w-full btn-error text-white hover:bg-red-500 transition-all">Close</button>
                            </form>
                        </div>




                </div>
                <Toaster />
            </dialog>
        </section>
    );
};

export default JobDetails;