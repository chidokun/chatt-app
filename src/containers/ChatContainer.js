import { connect } from 'react-redux';
import { loadConversationList } from '../actions/conversationActions';
import { loadChannelList } from '../actions/channelActions';
import { chatMessage } from '../actions/messageActions';

import Chat from '../components/Chat';

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat
});

const mapDispatchToProps = (dispatch) => ({
    loadConversationList: (listConversation) => dispatch(loadConversationList(listConversation)),
    loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
    chatMessage: (chatObj) => dispatch(chatMessage(chatObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);