import { Actions } from '../constants';

export const createChannel = (info) => ({
    type: Actions.CREATE_CHANNEL, info
});

export const loadChannelList = (listChannel) => ({
    type: Actions.LOAD_CHANNEL_LIST, listChannel
});