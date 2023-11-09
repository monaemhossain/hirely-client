import { useState, useRef, useEffect, useContext } from "react"
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';
import Logo from "../../logo/logo";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";

// Profile Dropdown
const ProfileDropDown = (props) => {
  const { user, logOut } = useContext(AuthContext)
  const [state, setState] = useState(false)
  const profileRef = useRef()

  const userPhoto = user?.photoURL;

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }
  const validateUser = isValidUrl(userPhoto)



  const handleLogOut = () => {
    logOut()
      .then((user) => {
        axios.post('https://hirely-server.vercel.app/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          })

      });
  }

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef?.current?.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)
  }, [])


  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center justify-center space-x-4">
        {
          user ? <>
            <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-theme-color-2 ring-2 lg:focus:ring-theme-color-4"
              onClick={() => setState(!state)}
            >
              <img
                src={`${validateUser ? userPhoto : '/user.png'}`}
                className="w-full h-full rounded-full"
              />
            </button>
          </> :
            <NavLink to='/login' className='border border-theme-color-1 py-2 px-4 text-theme-color-1 hover:text-white hover:bg-theme-color-2 transition-all rounded-md'>Log in</NavLink>
        }

      </div>
      {
        user ? <ul className={`bg-white top-14 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-48 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'} flex flex-col text-center`}>
          <p className="p-2 border-b capitalize cursor-default">Hello, {user.displayName}</p>
          <NavLink to='/profile' className="p-2 border-b hover:bg-theme-color-2 hover:bg-opacity-25 transition-all">Profile</NavLink>
          <button onClick={handleLogOut} className="p-2 border-b hover:bg-theme-color-2 hover:bg-opacity-25 transition-all">Log out</button>
        </ul> : ''
      }
    </div>
  )
}

const AppMenu = () => {
  const [menuState, setMenuState] = useState(false)
  const { user } = useContext(AuthContext);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "All Jobs", path: "/all-jobs" },
    { title: "Blogs", path: "/blogs" },
  ]
  const privateNavigation = [
    { title: "My Jobs", path: "/my-jobs" },
    { title: "Applied Jobs", path: "/applied-jobs" },
  ]
  return (
    <div>
      <nav className="border-b font-medium">
        <div className="flex items-center py-3 px-4 w-full mx-auto md:px-8">
          <div className="flex-none lg:flex-initial">
            <Logo />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
              <ul className="mt-12 space-y-5 flex flex-col lg:flex-row lg:space-x-1 lg:space-y-0 lg:mt-0 items-center ">
                {
                  navigation.map((item, idx) => (
                    <NavLink to={item.path} key={idx} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-theme-color-1 cursor-default py-2 px-4 rounded-md border border-theme-color-1" : "border border-transparent hover:border-theme-color-2 py-2 px-4 text-theme-color-1 hover:text-white hover:bg-theme-color-2 transition-all rounded-md"
                    }
                    >
                      {item.title}
                    </NavLink>
                  ))
                }
                {
                  user ? privateNavigation.map((item, idx) => (
                    <NavLink to={item.path} key={idx} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-theme-color-1 cursor-default py-2 px-4 rounded-md border border-theme-color-1" : "border border-transparent hover:border-theme-color-2 py-2 px-4 text-theme-color-1 hover:text-white hover:bg-theme-color-2 transition-all rounded-md"
                    }
                    >
                      {item.title}
                    </NavLink>
                  )) : ''
                }
              </ul>
              <ProfileDropDown
                class="mt-5 pt-5 border-t lg:hidden"
              />
            </div>
            <div className="lg:flex-none flex-1 flex items-center justify-end space-x-2 sm:space-x-6">


              <div>
                <NavLink to="/post-job" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "cursor-default bg-theme-color-2 py-3 px-4 rounded-md border border-theme-color-1 text-white" : "border border-theme-color-1 py-2.5 px-4 text-theme-color-1 hover:text-white hover:bg-theme-color-2 transition-all rounded-md"}> Post a Job</NavLink>
              </div>



              <div>
                <ProfileDropDown
                  class="hidden lg:block"
                />
                <button
                  className="outline-none text-gray-400 block lg:hidden"
                  onClick={() => setMenuState(!menuState)}
                >
                  {
                    menuState ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    )
                  }
                </button>
              </div>

            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default AppMenu;

ProfileDropDown.propTypes = {
  class: PropTypes.string,
}