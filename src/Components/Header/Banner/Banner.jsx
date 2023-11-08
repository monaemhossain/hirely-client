import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <section className="bg-[url('/hero-bg.jpg')] bg-theme-color-5 bg-blend-overlay bg-opacity-50 bg-no-repeat bg-cover">
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600">
                <div className="space-y-5 max-w-3xl mx-auto text-center">
                    <h1 className="text-sm text-theme-color-3 font-medium">
                        Unlock Your Career Potential Today!
                    </h1>
                    <h2 className="text-4xl  text-white font-bold mx-auto md:text-5xl">
                        Welcome to Hirely, <span className="text-theme-color-3">Where Dreams Meet Opportunities</span>
                    </h2>
                    <p className="py-2 text-white">
                        Your gateway to a world of career possibilities. Whether you&#39;re a talented professional seeking new horizons or an employer in search of top-notch talent, we&#39;ve got you covered. Join us today and take the next step towards a brighter future!
                    </p>
                    <div>
                        <Link to='/all-jobs' className="border border-theme-color-1 py-4 px-5 text-theme-color-3 hover:text-white hover:bg-theme-color-1 transition-all rounded-md uppercase text-sm font-semibold tracking-widest">Explore jobs</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner;