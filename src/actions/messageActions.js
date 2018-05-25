import { Actions } from '../constants';

export const chatMessage = (chatObject) => ({
    type: Actions.CHAT_MESSAGE, chatObject
});

export const loadChannelMessage = (listChatObject) => ({
    type: Actions.LOAD_CHANNEL_MESSAGE, listChatObject
});

export const loadConversationMessage = (listChatObject) => ({
    type: Actions.LOAD_CONVERSATION_MESSAGE, listChatObject
});