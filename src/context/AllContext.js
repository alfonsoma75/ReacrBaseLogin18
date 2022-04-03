import AuthState from './auth/authState';
import ErrorsState from './errors/errorsState';


export default function AllContext({children}) {
    return (
        <ErrorsState>
            <AuthState>
                {/* <BaseState> */}

                    {children}
 
                {/* </BaseState> */}
            </AuthState>
        </ErrorsState>
    )
}