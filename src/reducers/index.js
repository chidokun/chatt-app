import { combineReducers } from 'redux';
import sign from './signReducer';
import channel from './channelReducer';
import conversation from './conversationReducer';
import page from './pageReducer';

export default combineReducers({
    page, sign, channel, conversation
});