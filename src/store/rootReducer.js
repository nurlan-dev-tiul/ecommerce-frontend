import { combineReducers } from 'redux';
import { authReducer } from './ducks/auth/reducer';

export const rootReducer = combineReducers({
    auth: authReducer
});
