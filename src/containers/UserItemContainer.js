import { connect } from 'react-redux';
import { changeCurrentChat } from '../actions/currentChatActions';
import { loadChannelMessage, loadConversationMessage } from '../actions/messageActions';
import UserItem from '../components/UserItem';

const mapStateToProps = state => ({ 
    sign: state.sign,
    currentChat: state.currentChat
});

const mapDispatchToProps = (dispatch) => ({
    changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj)),
    loadChannelMessage: (listChatObj) => dispatch(loadChannelMessage(listChatObj)),
    loadConversationMessage: (listChatObj) => dispatch(loadConversationMessage(listChatObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItem);