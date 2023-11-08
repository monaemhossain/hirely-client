import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './JobTabs.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../Jobs/JobCard/JobCard';
import { Link } from 'react-router-dom';


const JobTabs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const tabCategory = [
        {
            id: 1,
            category: 'Part Time'
        },
        {
            id: 2,
            category: 'Full Time'
        },
        {
            id: 3,
            category: 'On site'
        },
        {
            id: 4,
            category: 'Remote'
        },
    ]
    useEffect(() => {
        axios.get(`http://localhost:5000/search/${tabCategory[0].category}`)
            .then(res => setAllJobs(res.data))
    }, [])
    const handleChangeTab = (category) => {
        console.log(category.toLowerCase());
        axios.get(`http://localhost:5000/search/${category}`)
            .then(res => setAllJobs(res.data))
    }
    // console.log(allJobs);
    return (
        <Tabs className="w-full">
            <TabList>
                {
                    tabCategory.map(item => <Tab key={item.id} onClick={() => handleChangeTab(item.category)} >
                        <span

                        >{item.category}
                        </span>
                    </Tab>)
                }
            </TabList>

            {
                tabCategory.map(item =>
                    <TabPanel key={item.id}>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 py-5'>
                            {
                                allJobs == "" ? <h1>Nothing to show in this category</h1> : allJobs.slice(0, 6).map(item => <JobCard key={item._id} data={item}></JobCard>)
                            }
                        </div>
                    </TabPanel>)
            }
            <div className='grid justify-center items-center pt-6'>
                <Link to="/all-jobs" className='hover:text-theme-color-1'>See all jobs</Link>
            </div>
        </Tabs>
    )
}

export default JobTabs