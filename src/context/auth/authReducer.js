import {ADD_TOKEN, GET_USER, LOGIN, NO_TOKEN, REMOVE_TOKEN, TOKEN_VALID} from "../../types/reducerTypes";
import {TOKEN_STRING} from "../../types/apiTypes";

export default function AuthReducer( state, action ) {
    switch ( action.type ) {
        case LOGIN:
            return {
                ...state,
                isLogged: true
            }

        case TOKEN_VALID:
        case ADD_TOKEN:
            return {
                ...state,
                isLogged: true,
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': `${TOKEN_STRING}${action.payload}`
                },
                fileHeaders: {
                    'Authorization': `${TOKEN_STRING}${action.payload}`
                }
            }

        case REMOVE_TOKEN:
            return {
                ...state,
                isLogged: false,
                user: {},
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': ''
                },
                fileHeaders: {
                    'Authorization': ''
                }
            }

        case NO_TOKEN:
            return {
                ...state,
                isLogged: false,
                user: {}
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}