import { connect } from 'react-redux';
import { createConversation, loadConversationList } from '../actions/conversationActions';
import { createChannel, loadChannelList, exitChannel } from '../actions/channelActions';

import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
    sign: state.sign,
    channel: state.channel,
    conversation: state.conversation
});

const mapDispatchToProps = (dispatch) => ({
    createConversation: (name) => dispatch(createConversation(name)),
    loadConversationList: (newList) => dispatch(loadConversationList(newList)),
    createChannel: (name) => dispatch(createChannel(name)),
    loadChannelList: (newList) => dispatch(loadChannelList(newList)),
    exitChannel: (name) => dispatch(exitChannel(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);