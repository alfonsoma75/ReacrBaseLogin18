import { useContext, useEffect } from "react";

// Context
import AuthContext from 'context/auth/authContext';

// Custom Components
import AppRouter from './AppRouter';
import HeaderComponent from 'components/shared/header/HeaderComponent';



const InitialRouter = () => {

    const authContext = useContext(AuthContext)
    const { getUser } = authContext

    useEffect(() => {
        getUser()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <header>
                <HeaderComponent />
            </header>

            <AppRouter />
        </>
    )
}

export default InitialRouter