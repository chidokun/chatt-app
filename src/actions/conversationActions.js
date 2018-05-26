import { Actions } from '../constants';

export const createConversation = (info) => ({
    type: Actions.CREATE_CONVERSATION, info
});

export const loadConversationList = (listConversation) => ({
    type: Actions.LOAD_CONVERSATION_LIST, listConversation
});