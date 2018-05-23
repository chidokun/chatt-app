import { Actions } from '../constants';

const initState = {
    user: '',
    token: ''
}

const sign = (state = initState, action) => {
    switch (action.type) {
        case Actions.SIGNUP:
            console.log(Actions.SIGNUP);
            return state;
        case Actions.LOGIN:
            console.log(Actions.LOGIN);
            return { ...state, user: action.user, token: action.token };
        case Actions.LOGOUT:
            console.log(Actions.LOGOUT);
            return { ...state, user: '', token: ''};
        default:
            return state;
    }
};

export default sign;