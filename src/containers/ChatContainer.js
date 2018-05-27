import { connect } from 'react-redux';
import { connectSocket } from '../actions/signActions';
import { loadConversationList, createConversation } from '../actions/conversationActions';
import { loadChannelList, createChannel } from '../actions/channelActions';
import { chatMessage } from '../actions/messageActions';
import Chat from '../components/Chat';

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat
});

const mapDispatchToProps = (dispatch) => ({
    loadConversationList: (listConversation) => dispatch(loadConversationList(listConversation)),
    loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
    connectSocket: (connection) => dispatch(connectSocket(connection)),
    chatMessage: (chatObj) => dispatch(chatMessage(chatObj)),
    createConversation: (info) => dispatch(createConversation(info)),
    createChannel: (info) => dispatch(createChannel(info))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);