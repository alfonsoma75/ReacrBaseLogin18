import { useContext } from 'react';

// Router
import { Navigate, useLocation } from 'react-router-dom';

// Context
import AuthContext from 'context/auth/authContext';


export default function LoginRequired({children}) {
    const location = useLocation();
    const authContext = useContext(AuthContext)
    const { isLogged } = authContext

    if (!isLogged) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children

}