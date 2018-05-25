import { Actions } from '../constants';

const conversation = (state = [], action) => {
    switch (action.type) {
        case Actions.CREATE_CONVERSATION:
            return [ ...state, action.conId];
        case Actions.CHAT_CONVERSATION:
            return state;
        case Actions.LOAD_CONVERSATION_LIST:
            return state;
        default:
            return state;
    }
};

export default conversation;