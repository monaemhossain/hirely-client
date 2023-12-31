import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Components/logo/logo";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const LogIn = () => {
    useEffect(() => {
        document.title = 'Hirely | Login';
    }, []);
    const { logIn, logInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogInUser = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }
                axios.post('https://hirely-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })

                toast.success("Login success")
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                console.log(err);
                if (err.code == "auth/network-request-failed") {
                    toast.error("Network Error. Check you internet connection")
                    return;
                }
                if (err.code == "auth/invalid-login-credentials") {
                    toast.error("Invalid login credentials try login with Google instead")
                    return;
                }
                toast.error("Email and password does not match")
            })
    }


    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then((user) => {
                axios.post('https://hirely-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                toast.success('Logged in Successfully!')
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                if (err.code == "auth/network-request-failed") {
                    toast.error("Network Error. Check you internet connection")
                    return;
                }
                toast.error('Something went wrong, Failed to login')
            })
    }
    return (
        <main className="w-full h-full flex flex-col items-center justify-center px-4 py-14 bg-gray-50">
            <div className="max-w-sm w-full space-y-5">
                <div className="text-center pb-8">
                    <Logo />
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleLogInUser}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-theme-color-4 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-x-3">
                                <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                                <label
                                    htmlFor="remember-me-checkbox"
                                    className="relative flex w-5 h-5 bg-white peer-checked:bg-theme-color-4 rounded-md border ring-offset-2 ring-theme-color-4 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                >
                                </label>
                                <span>Remember me</span>
                            </div>
                            <a href="#" className="text-center text-theme-color-4 hover:text-theme-color-1">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-theme-color-4 hover:bg-theme-color-1 active:bg-theme-color-4 rounded-lg duration-150"
                        >
                            Sign in
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogIn} className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with Google
                    </button>
                </div>
                <p className="text-center">Don&#39;t have an account? <NavLink to="/registration" className="font-medium text-theme-color-4 hover:text-theme-color-1">Register Here</NavLink></p>
            </div>
            <Toaster />
        </main>
    )
}
export default LogIn;