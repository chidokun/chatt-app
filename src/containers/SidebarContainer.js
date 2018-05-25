import { connect } from 'react-redux';
import { exitChannel } from '../actions/channelActions';
import { changeCurrentChat } from '../actions/currentChatActions';
import { loadChannelMessage, loadConversationMessage } from '../actions/messageActions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
    sign: state.sign,
    channel: state.channel,
    conversation: state.conversation
});

const mapDispatchToProps = (dispatch) => ({
    exitChannel: (name) => dispatch(exitChannel(name)),
    changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj)),
    loadChannelMessage: (listChatObj) => dispatch(loadChannelMessage(listChatObj)),
    loadConversationMessage: (listChatObj) => dispatch(loadConversationMessage(listChatObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);