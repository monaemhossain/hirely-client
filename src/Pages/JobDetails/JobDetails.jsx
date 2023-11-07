import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { _id, bannerPhoto, jobTitle, userName, jobCategory, postingDate, deadLine, jobDescription, priceRageMin, priceRageMax, applicantsNumber, userEmail, jobType } = data

    const handleApplyJob = () => {

    }
    return (
        <section className="max-w-screen-xl mx-auto py-24">

            <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2">
                <figure><img src={bannerPhoto} alt={`${jobTitle} banner image`} className="object-cover h-full"/></figure>
                <div className="card-body">
                    <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job posted by:</span> {userName}</p>
                    <div className="grid gap-2">
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Posted date:</span> {postingDate}</p>
                        <p className="flex gap-2"><span className="font-bold text-theme-color-4">Application deadline:</span> {deadLine}</p>
                    </div>
                    <div className="grid gap-2">
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Price range:</span> ${priceRageMin} - ${priceRageMax}</p>
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job Category:</span> {jobCategory}</p>
                        <p className="flex justify-start gap-2"><span className="font-bold text-theme-color-4">Job Type:</span> {jobType} job</p>

                    </div>
                    <h2 className="card-title"><span className="font-bold text-theme-color-4">Role:</span> {jobTitle}</h2>
                    <p><span className="font-bold text-theme-color-4 text-lg">Job description: </span><br />{jobDescription}</p>
                    <div className="card-actions justify-end items-center">
                        <p><span className="font-bold text-theme-color-4">Number of Applicants:</span> <span className="font-bold">{applicantsNumber}</span></p>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn bg-white border border-theme-color-5 text-theme-color-5 hover:bg-theme-color-1 transition-all hover:text-white px-16">Apply</button>
                    </div>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <form onSubmit={handleApplyJob} className="grid gap-2">
                        <label htmlFor="userName">Applicant name</label>
                        <input
                            id="userName"
                            defaultValue={userName}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-2 shadow-sm rounded-lg"
                        />
                        
                        <label htmlFor="userEmail">Applicant email</label>
                        <input
                            id="userEmail"
                            defaultValue={userEmail}
                            type="text"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-2 shadow-sm rounded-lg"
                            disabled
                        />
                        <label htmlFor="resumeLink">Applicant resume link</label>
                        <input
                            id="resumeLink"
                            type="text"
                            placeholder="Your resume link address"
                            className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-2 shadow-sm rounded-lg"
                        />
                    </form>



                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </section>
    );
};

export default JobDetails;