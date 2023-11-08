
const FAQs = () => {


    const faqsList = [
        {
            "q": "How do I create an account on your platform?",
            "a": "To create an account, simply click on the 'Sign Up' button located at the top right corner of the homepage. You'll be directed to a registration page where you can provide your name, email address, and choose a secure password. Once you've filled in these details and clicked 'Sign Up,' you'll have successfully created your account."
        },
        {
            "q": "Can I post multiple job listings from one account?",
            "a": "Yes, absolutely! We encourage employers to post as many job listings as they have available. After logging into your account, navigate to your dashboard where you'll find an option to 'Post a Job.' From there, you can easily create and manage multiple job listings."
        },
        {
            "q": "What types of jobs can I post?",
            "a": "Our platform caters to a wide range of job categories and types. Whether you're looking to fill full-time positions, part-time roles, remote opportunities, or even freelance gigs, you can post them all. We strive to accommodate various employment needs and preferences."
        },
        {
            "q": "How do I edit or update a job listing I've already posted?",
            "a": "Making changes to your job listings is a breeze. Simply access your dashboard and locate the specific job listing you'd like to update. Click on the 'Edit' button associated with that listing. You can then modify any details or requirements and save the changes. Your updated listing will be live."
        },
        {
            "q": "Is there a cost associated with posting jobs?",
            "a": "We offer flexible pricing plans to suit different preferences. We have a free plan available, which includes basic features for job postings. For those looking for enhanced visibility and additional features, we also offer premium plans at a competitive rate. You can choose the plan that best aligns with your recruitment needs."
        },
        {
            "q": "Can I receive applications directly through your platform?",
            "a": "Yes, you can! When candidates view your job listing, they have the option to apply directly through our platform. You'll receive instant notifications when applications are submitted, and you can conveniently manage and review them from your dashboard. This streamlined process ensures you have all the information you need at your fingertips."
        }
    ]


    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}


export default FAQs;