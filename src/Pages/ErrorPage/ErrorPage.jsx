import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="bg-[url('https://images.unsplash.com/photo-1577017040065-650ee4d43339?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-white bg-opacity-75 bg-blend-overlay">
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-600">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link to="/" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                            Go back
                        </Link>
                        <Link to="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Contact support
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ErrorPage;