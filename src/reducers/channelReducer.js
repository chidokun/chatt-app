import { Actions } from '../constants';

const channel = (state = [], action) => {
    switch (action.type) {
        case Actions.CREATE_CHANNEL:
            return [ ...state, action.info];
        case Actions.EXIT_CHANNEL:
            delete state[action.name];
            return state;
        case Actions.CHAT_CHANNEL: //chua xu ly
            return null;
        case Actions.LOAD_CHANNEL:
            return action.newList;
        default:
            return state;
    }
};

export default channel;