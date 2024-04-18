import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import ClockLoader from "react-spinners/ClockLoader";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-[calc(100vh-400px)] container mx-auto flex items-center justify-center">
            {/* <div className="loading loading-infinity w-24 h-24 text-blue-400"></div> */}
            <ClockLoader
                color='#DD5746'
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}