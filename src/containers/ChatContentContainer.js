import { connect } from 'react-redux';
import ChatContent from '../components/ChatContent';

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat,
    message: state.message
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContent);