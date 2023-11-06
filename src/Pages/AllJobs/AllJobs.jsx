import JobCard from "../../Components/Jobs/JobCard/JobCard";

const AllJobs = () => {

    const jobs = [
        {
            title: "UI – Front End Dev",
            desc: "Currently, ManTech is seeking a motivated, career and customer-oriented Software Developer to join our team in Fort Meade, MD.",
            date: "May 17, 2022",
            salary: "98,000 USD",
            type: "Full-time",
            location: "Columbia, MD",
            href: "#"
        },
        {
            title: "Back End Developer",
            desc: " Help us solve problems and develop great user interface tools for our developers.",
            date: "Nov 11, 2022",
            salary: "$105,000 USD",
            type: "Part-time",
            location: "Remote",
            href: "#"
        },
        {
            title: "Full-Stack Developer",
            desc: "This position is 100% remote, working as part of a small, multi-functional team. You must be confident at working alone.",
            date: "Jan 2, 2022",
            salary: "163,273 USD",
            type: "Full-time",
            location: "Remote",
            href: "#"
        },
    ]

    return (
        <div className="mt-12 max-w-screen-lg mx-auto px-4 md:px-8">
            <div>
                <h1 className="text-gray-800 text-3xl font-semibold">
                    Explore The Jobs
                </h1>
            </div>
            {
                jobs.map((item, idx) => (<JobCard key={idx} data={item}></JobCard>))
            }
        </div>
    );
};

export default AllJobs;