import { connect } from 'react-redux';
import { createConversation, chatConversation, loadConversationList } from '../actions/conversationActions';
import { pageSignUp, pageLogin } from '../actions/pageActions';

import App from '../components/App';

const mapStateToProps = state => ({
    sign: state.sign,
    page: state.page
});

const mapDispatchToProps = (dispatch) => ({
    pageSignUp: () => dispatch(pageSignUp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);