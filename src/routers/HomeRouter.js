import { useContext, useEffect } from 'react';

// Router
import { Routes, Route } from 'react-router-dom';

// Context
import AuthContext from 'context/auth/authContext';

// Components
import LoginRequired from 'components/login/LoginRequired';

// Custom Routers
import LoginPage from 'pages/login/LoginPage';


// Constants
import {
    BASE_LINK,
    LOGIN_LINK,

} from 'types/linkTypes';


import InitialRouter from 'routers/InitialRouter';



export default function HomeRouter() {

    const authContext = useContext(AuthContext)
    const { checkToken, isLogged } = authContext

    // eslint-disable-next-line
    useEffect(() => {
        checkToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLogged == null) return <span>Andale spinner</span>
    return (
        <Routes>
            <Route exact path={LOGIN_LINK} element={<LoginPage />} />
            <Route exact path={BASE_LINK} element={<LoginRequired><InitialRouter /></LoginRequired>} />
        </Routes>

    )
}