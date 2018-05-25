import { Actions } from '../constants';

const initState = { type: '', id: '', name: '' };

const currentChat = (state = initState, action) => {
    switch (action.type) {
        case Actions.CHANGE_CURRENT_CHAT:
            return { 
                type: action.currChatObject.type, 
                id: action.currChatObject.id,
                name: action.currChatObject.name    
            };
        default:
            return state;
    }
};

export default currentChat;