import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    
    const {user, loadUser} = useContext(AuthContext);

    if(loadUser){
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }

    if(user?.email){
        return children
        
    }
    
    
    return <Navigate to="/login" ></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
export default PrivateRoutes;