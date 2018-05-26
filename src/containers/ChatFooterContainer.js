import { connect } from 'react-redux';
import ChatFooter from '../components/ChatFooter';
import { chatMessage } from '../actions/messageActions';

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat,
});

const mapDispatchToProps = (dispatch) => ({
    chatMessage: (chatObj) => dispatch(chatMessage(chatObj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatFooter);