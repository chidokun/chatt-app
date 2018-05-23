import { Actions } from '../constants';

export const login = (user, token) => ({
    type: Actions.LOGIN, user, token
});

export const logOut = () => ({
    type: Actions.LOGOUT
});

export const signUp = () => ({
    type: Actions.SIGNUP
});