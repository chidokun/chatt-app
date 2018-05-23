import { Actions } from '../constants';

export const createChannel = (data) => ({
    type: Actions.CREATE_CHANNEL, data
});

export const joinChannel = (data) => ({
    type: Actions.JOIN_CHANNEL, data
});

export const exitChannel = (data) => ({
    type: Actions.EXIT_CHANNEL, data
});

export const chatChannel = (data) => ({
    type: Actions.CHAT_CHANNEL, data
});

export const loadChannelList = (data) => ({
    type: Actions.LOAD_CHANNEL_LIST, data
});