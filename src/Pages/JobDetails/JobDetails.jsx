import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;