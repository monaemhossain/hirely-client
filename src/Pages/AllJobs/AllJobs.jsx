import axios from "axios";
import JobCard from "../../Components/Jobs/JobCard/JobCard";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

const AllJobs = () => {
    useEffect(() => {
        document.title = 'Hirely | All Jobs';
    }, []);
    const [searchInput, setSearchInput] = useState('')
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/job')
            .then(res => setJobs(res.data))

    }, [])

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
        try {
            axios.get(`http://localhost:5000/search/${e.target.value}`)
                .then(res => setJobs(res.data))
                .catch(() => {
                    axios.get('http://localhost:5000/job')
                        .then(res => setJobs(res.data))
                })
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(searchInput);

    return (
        <div className="my-14 max-w-screen-xl mx-auto px-4 md:px-8">

            <div className="my-8">
                <h1 className="text-gray-800 text-3xl font-semibold text-center">
                    Explore The Jobs
                </h1>
                <form
                    className="max-w-md px-4 mx-auto mt-12">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            onChange={handleSearch}
                            id="searchInput"
                            value={searchInput}
                            type="text"
                            placeholder="Search Job"
                            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-theme-color-2"
                        />
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.map((item, idx) => (<JobCard key={idx} data={item}></JobCard>))
                }
            </div>
            <Loader />
        </div>
    );
};

export default AllJobs;