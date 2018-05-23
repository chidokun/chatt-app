import { Actions } from '../constants';

export const createChannel = (info) => ({
    type: Actions.CREATE_CHANNEL, info
});

export const exitChannel = (name) => ({
    type: Actions.EXIT_CHANNEL, name
});

export const chatChannel = (data) => ({ //chua xu ly
    type: Actions.CHAT_CHANNEL, data
});

export const loadChannelList = (newList) => ({
    type: Actions.LOAD_CHANNEL_LIST, newList
});