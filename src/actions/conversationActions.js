import { Actions } from '../constants';

export const createConversation = (data) => ({
    type: Actions.CREATE_CONVERSATION, data
});

export const chatConversation = (content) => ({
    type: Actions.CHAT_CONVERSATION, content
});

export const loadConversationList = (listConversation) => ({
    type: Actions.LOAD_CONVERSATION_LIST, listConversation
});