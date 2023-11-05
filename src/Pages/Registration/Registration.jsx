import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Logo from "../../Components/logo/logo";
import { updateProfile } from "firebase/auth";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Registration = () => {

    const { userRegistration, logInWithGoogle } = useContext(AuthContext);
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;


        if (password.length < 6) {
            setErrorMsg("Password should be at least 6 characters")
            toast.error(errorMsg)
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMsg("Password must have at least one uppercase letter");
            toast.error(errorMsg)
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorMsg("Password must have at least one lowercase letter");
            toast.error(errorMsg)
            return;
        }

        userRegistration(email, password, name)
            .then((newUser) => {
                updateProfile(newUser.user, {
                    displayName: name,
                    photoURL: photo,
                })
                setSuccessMsg(`Hello ${name}, Your account is created successfully`);
                toast.success(successMsg)
            })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use") {
                    setErrorMsg("Your already have account")
                    toast.error(errorMsg)
                } else if (error.code == "auth/invalid-email") {
                    setErrorMsg("invalid email address")
                    toast.error(errorMsg)
                }
                else {
                    setErrorMsg("Something went wrong! Please contact with support team.")
                    toast.error(errorMsg)
                }
            })

    };
    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(() => {
                toast.success('Logged in Successfully!')
            })
            .catch(() => {
                toast.error('Something went wrong')
            })
    }



    return (
        <main className="w-full h-full py-16 flex flex-col items-center justify-center bg-gray-50 sm:px-4">

            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <Logo />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="text-center">Already have an account? <NavLink to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login Here</NavLink></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleRegistration}
                        className="space-y-5"

                    >
                        <div>
                            <label className="font-medium" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium" htmlFor="photo">
                                Photo URL
                            </label>
                            <input
                                id="photo"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <div className="mt-5">
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
                </div>
            </div>
            <Toaster />
        </main>
    )

}

export default Registration;