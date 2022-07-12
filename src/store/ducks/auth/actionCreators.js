import { authActions } from "./action";

//! Для записи данных в store
export const setUserData = (payload) => ({
    type: authActions.SET_USER_DATA,
    payload,
});

//! Для отправки данных на сервер
export const fetchLogin = (payload) => ({
    type: authActions.FETCH_LOGIN,
    payload,
});

//! Для отправки данных на сервер
export const fetchRegister = (payload) => ({
    type: authActions.FETCH_REGISTER,
    payload,
});

//! Для отправки данных на сервер
export const fetchMeProfile = () => ({
    type: authActions.FETCH_ME_PROFILE,
});

//! Для logout 
export const logout = () => ({
    type: authActions.SIGN_OUT,
});

//! Loading
export const loading = () => ({
    type: authActions.SET_LOADING,
});

//! Для ошибок
export const setError = (payload) => ({
    type: authActions.SET_ERROR,
    payload
});


