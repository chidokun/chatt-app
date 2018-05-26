import { Actions } from '../constants';

const message = (state = [], action) => {
    switch (action.type) {
        case Actions.CHAT_MESSAGE:
            return [ ...state, action.chatObject];
        case Actions.LOAD_MESSAGE:
            return action.listChatObject;
        default:
            return state;
    }
};

export default message;