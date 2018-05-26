import { Actions } from '../constants';

export const chatMessage = (chatObject) => ({
    type: Actions.CHAT_MESSAGE, chatObject
});

export const loadMessage = (listChatObject) => ({
    type: Actions.LOAD_MESSAGE, listChatObject
});
