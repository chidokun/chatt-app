import { Actions } from '../constants';

const conversation = (state = [], action) => {
    switch (action.type) {
        case Actions.CREATE_CONVERSATION:
            return [ ...state, action.info];
        case Actions.LOAD_CONVERSATION_LIST:
            return action.listConversation;
        default:
            return state;
    }
};

export default conversation;