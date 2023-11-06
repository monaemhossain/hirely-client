import { useContext } from "react";
import { PropTypes } from 'prop-types'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()


    if (loader) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#4fa94d"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
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