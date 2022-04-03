import { useEffect, useContext } from 'react';

// Router
import { useNavigate } from 'react-router-dom';

// Context
import AuthContext from "context/auth/authContext";

// Custom Components
import LoginForm from "components/login/LoginForm";


export default function LoginPage() {

    const navigate = useNavigate()

    const authContext = useContext(AuthContext)
    const { isLogged } = authContext

    useEffect( () => {
        if (isLogged) {
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged])

    return (
        <div className="col-12 gmc-height-full flex justify-content-center align-items-center">
            <div className="col-4">

                <LoginForm />

            </div>
        </div>

    )
}