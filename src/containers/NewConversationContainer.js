import { connect } from 'react-redux';
import { createChannel } from '../actions/channelActions';
import { createConversation } from '../actions/conversationActions';
import { changeCurrentChat } from '../actions/currentChatActions';
import NewConversation from '../components/NewConversation';

const mapStateToProps = state => ({
    sign: state.sign
})

const mapDispatchToProps = (dispatch) => ({
    createConversation: (conId) => dispatch(createConversation(conId)),
    createChannel: (name) => dispatch(createChannel(name)),
    changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewConversation);