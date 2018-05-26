import { connect } from 'react-redux';
import { logOut } from '../actions/signActions';
import { loadConversationList } from '../actions/conversationActions';
import { loadChannelList } from '../actions/channelActions';
import { loadMessage } from "../actions/messageActions";
import { changeCurrentChat } from '../actions/currentChatActions';
import { pageLogin } from '../actions/pageActions';
import ChatHeader from '../components/ChatHeader';

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat
})

const mapDispatchToProps = (dispatch) => ({
    pageLogin: () => dispatch(pageLogin()),
    logOut: () => dispatch(logOut()),
    loadConversationList: (listConversation) => dispatch(loadConversationList(listConversation)),
    loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
    loadMessage: (listChatObj) => dispatch(loadMessage(listChatObj)),
    changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHeader);