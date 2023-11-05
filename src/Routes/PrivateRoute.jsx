import {  useContext } from "react";
 
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return(
            <div className="mt-4 flex items-center justify-center text-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (user?.email) {
        return children;
    }
  return <Navigate to='/login'></Navigate>
  
};

export default PrivateRoute;
