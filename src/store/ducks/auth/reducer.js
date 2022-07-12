import { authActions } from "./action";

const initialState = {
    user: null,
    isAuth: false,
    loading: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case authActions.SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        case authActions.SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                loading: false
            }
        case authActions.SIGN_OUT:
            return {
                ...state,
                user: null,
                isAuth: false
            }
        default:
            return state
    }
}
