import { useContext } from "react";
import { PropTypes } from 'prop-types'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()


    if (loader) {
        return (
            <div className="w-full min-h-[calc(100vh-442px)] flex items-center justify-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}