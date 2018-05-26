import { connect } from 'react-redux';
import { loadConversationList } from '../actions/conversationActions';
import { loadChannelList } from '../actions/channelActions';
import Chat from '../components/Chat';

const mapStateToProps = state => ({
    sign: state.sign,
});

const mapDispatchToProps = (dispatch) => ({
    loadConversationList: (listConversation) => dispatch(loadConversationList(listConversation)),
    loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);