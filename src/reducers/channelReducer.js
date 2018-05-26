import { Actions } from '../constants';

const channel = (state = [], action) => {
    switch (action.type) {
        case Actions.CREATE_CHANNEL:
            return [ ...state, action.info];
        case Actions.LOAD_CHANNEL_LIST:
            return action.listChannel;
        default:
            return state;
    }
};

export default channel;