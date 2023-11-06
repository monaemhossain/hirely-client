import { useContext } from "react";
import { PropTypes } from 'prop-types'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const LoggedInRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (user) {
        return <Navigate to="/"></Navigate>;
    }

    return children
};

export default LoggedInRoutes;
LoggedInRoutes.propTypes = {
    children: PropTypes.node
}