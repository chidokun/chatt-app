import { connect } from 'react-redux';
import { createConversation, chatConversation, loadConversationList } from '../actions/conversationActions';
import { pageSignUp, pageLogin, pageChat } from '../actions/pageActions';
import { login } from '../actions/signActions';

import App from '../components/App';

const mapStateToProps = state => ({
    sign: state.sign,
    page: state.page
});

const mapDispatchToProps = (dispatch) => ({
    pageChat: () => dispatch(pageChat()),
    login: (user, token) => dispatch(login(user, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);