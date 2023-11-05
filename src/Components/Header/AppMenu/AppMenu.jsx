import { useState, useRef, useEffect, useContext } from "react"
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';
import Logo from "../../logo/logo";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

// Profile Dropdown
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false)
  const profileRef = useRef()

  const navigation = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Log out", path: "/logout" },
  ]


  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef?.current?.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)
  }, [])

  const { user } = useContext(AuthContext)

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        {
          user ? <>
            <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
              onClick={() => setState(!state)}
            >
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                className="w-full h-full rounded-full"
              />
            </button>
            <div className="lg:hidden">
              <span className="block">Micheal John</span>
              <span className="block text-sm text-gray-500">john@gmail.com</span>
            </div>
          </> :
            <NavLink to='/login' className='px-4 w-20'>Log in</NavLink>
        }

      </div>
      <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
        {
          navigation.map((item, idx) => (
            <li key={idx}>
              <a className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const AppMenu = () => {
  // const {user} = useContext(AuthContext);
  // console.log(user);

  const [menuState, setMenuState] = useState(false)

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
      <nav className="bg-white border-b">
        <div className="flex items-center space-x-8 py-3 px-4 w-full mx-auto md:px-8">
          <div className="flex-none lg:flex-initial">
            <Logo />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
              <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0 items-center">
                {
                  navigation.map((item, idx) => (
                    <NavLink to={item.path} key={idx} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "bg-theme-color-3 text-theme-color-1 px-4 py-2 rounded-md" : "text-theme-color-1 hover:text-theme-color-5"
                    }
                    >
                      {item.title}
                    </NavLink>
                  ))
                }
                {
                  privateNavigation.map((item, idx) => (
                    <NavLink to={item.path} key={idx} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "bg-theme-color-3 text-theme-color-1 px-4 py-2 rounded-md" : "text-theme-color-1 hover:text-theme-color-5"
                    }
                    >
                      {item.title}
                    </NavLink>
                  ))
                }
              </ul>
              <ProfileDropDown
                class="mt-5 pt-5 border-t lg:hidden"
              />
            </div>
            <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
              <div>

              </div>
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
      </nav>
    </div>
  )
}

export default AppMenu;

ProfileDropDown.propTypes = {
  class: PropTypes.string,
}