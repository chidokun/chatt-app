import { connect } from 'react-redux';
import { createChannel } from '../actions/channelActions';
import { createConversation } from '../actions/conversationActions';
import NewConversation from '../components/NewConversation';

const mapStateToProps = state => ({
    sign: state.sign
})

const mapDispatchToProps = (dispatch) => ({
    createConversation: (info) => dispatch(createConversation(info)),
    createChannel: (info) => dispatch(createChannel(info))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewConversation);