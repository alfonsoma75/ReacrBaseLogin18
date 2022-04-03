import { useReducer } from "react";

// Context
import ErrorsContext from 'context/errors/errorsContext';

// Reducer
import ErrorsReducer from "./errorsReducer";

// Custom Constants
import { CLEAR_ERROR, SET_ERROR } from "types/reducerTypes";


export default function ErrorsState({ children }) {

    const initialData = {
        error: {
            hasError: false,
            errorText: ''
        }
    }

    const [ state, dispatch ] = useReducer(ErrorsReducer, initialData)

    const setError = (errorText) => {
        dispatch({
            type: SET_ERROR,
            payload: errorText
        })
    }

    const clearError = () => {
        dispatch({
            type: CLEAR_ERROR
        })
    }

    return (
        <ErrorsContext.Provider
            value={{
                error: state.error,
                errorText: state.error.errorText,
                hasError: state.error.hasError,
                clearError,
                setError
            }}
        >
            {children}
        </ErrorsContext.Provider>
    )
}