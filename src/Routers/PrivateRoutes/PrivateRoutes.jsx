import { useContext } from "react";
import { PropTypes } from 'prop-types'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()


    if (loader) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/sign-in"></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}