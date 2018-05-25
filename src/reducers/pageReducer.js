import { Actions } from '../constants';

const page = (state = '', action) => {
    switch (action.type) {
        case Actions.PAGE_CHAT:
            return Actions.PAGE_CHAT;
        case Actions.PAGE_LOGIN:
            return Actions.PAGE_LOGIN;
        case Actions.PAGE_SIGNUP:
            return Actions.PAGE_SIGNUP;
        default:
            return state;
    }
};

export default page;