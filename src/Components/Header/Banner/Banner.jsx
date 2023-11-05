import Logo from "../../logo/logo";

const Banner = () => {

    const handleSearchJobs = e => {
        e.preventDefault();
    }

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
                    <form
                        onSubmit={() => handleSearchJobs()}
                        className="max-w-md mt-12 mx-auto flex">
                        <div className="w-full">

                            <div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-4 py-3 text-theme-color-5 border rounded-s-lg outline-none bg-white focus:bg-white focus:border-theme-color-4 focus:border-e-transparent"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-theme-color-4 rounded-e-md duration-150 hover:bg-theme-color-2 active:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6 my-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Banner;