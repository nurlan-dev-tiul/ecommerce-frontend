import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './action';
import { setUserData, loading, setError } from './actionCreators';
import { loginApi, registerApi, getMeProfileApi } from '../../../services/api/authApi';
import { setLocalStorage } from '../../../services/localStorage';

//! Worker для логина
export function* fetchLoginRequest({ payload }) {
    try {
        yield put(loading());
        const { data } = yield call(loginApi, payload);
        setLocalStorage('shop', JSON.stringify(data.token))
        yield put(setUserData(data));
    } catch (error) {
        yield put(setError(error?.response?.data?.message));
    }
}

//! Worker для получения моего профиля по токену
export function* fetchMeProfileRequest() {
    try {
        yield put(loading());
        const { data } = yield call(getMeProfileApi);
        yield put(setUserData(data));
    } catch (error) {
        yield put(setError(error?.response?.data?.message));
    }
}

//! Worker для регистрации
export function* fetchRegisterRequest({ payload }) {
    try {
        yield put(loading());
        const { data } = yield call(registerApi, payload);
        setLocalStorage('shop', JSON.stringify(data.token))
        yield put(setUserData(data));
    } catch (error) {
        yield put(setError(error?.response?.data?.message));
    }
}

export function* authSaga() {
    yield takeLatest(authActions.FETCH_LOGIN, fetchLoginRequest);
    yield takeLatest(authActions.FETCH_ME_PROFILE, fetchMeProfileRequest);
    yield takeLatest(authActions.FETCH_REGISTER, fetchRegisterRequest);
}
