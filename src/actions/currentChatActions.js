import { Actions } from '../constants';

export const changeCurrentChat = (currChatObject) => ({
    type: Actions.CHANGE_CURRENT_CHAT, currChatObject
});