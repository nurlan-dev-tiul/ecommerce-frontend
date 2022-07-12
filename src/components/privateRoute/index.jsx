import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { isAuth, user } = useSelector(state => state.auth);

    if(!user?.isAdmin){
        return <Navigate to='/' state={{from: location}} />
    }

    return children;
}