import { connect } from 'react-redux';
import { createChannel } from '../actions/channelActions';
import { createConversation } from '../actions/conversationActions';
import NewConversation from '../components/NewConversation';

const mapStateToProps = state => ({
  sign: state.sign
})

const mapDispatchToProps = (dispatch) => ({
  createConversation: (name) => dispatch(createConversation(name)),
  createChannel: (name) => dispatch(createChannel(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewConversation);