// Custom Constants
import { CLEAR_ERROR, SET_ERROR } from "types/reducerTypes";

export default function ErrorsReducer(state, action) {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: {
                    hasError: true,
                    errorText: action.payload
                }
            }

        case CLEAR_ERROR:
            return {
                error: {
                    hasError: false,
                    errorText: ''
                }
            }

        default:
            return state
    }
}