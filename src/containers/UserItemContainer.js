import { connect } from 'react-redux';
import { changeCurrentChat } from '../actions/currentChatActions';
import { loadMessage } from '../actions/messageActions';
import UserItem from '../components/UserItem';

const mapStateToProps = state => ({ 
    sign: state.sign,
    currentChat: state.currentChat
});

const mapDispatchToProps = (dispatch) => ({
    changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj)),
    loadMessage: (listChatObj) => dispatch(loadMessage(listChatObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItem);