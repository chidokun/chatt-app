import { Actions } from '../constants';

const message = (state = [], action) => {
    switch (action.type) {
        case Actions.CHAT_MESSAGE:
            return [ ...state, action.chatObject];
        case Actions.LOAD_CHANNEL_MESSAGE:
            return action.listChatObject;
            case Actions.LOAD_CONVERSATION_MESSAGE:
            return action.listChatObject;
        default:
            return state;
    }
};

export default message;