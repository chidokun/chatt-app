import { connect } from 'react-redux';
import { login } from '../actions/signActions';
import { pageSignUp, pageChat } from '../actions/pageActions';
import Login from '../components/Login';

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    pageSignUp: () => dispatch(pageSignUp()),
    pageChat: () => dispatch(pageChat()),
    login: (userName, token) => dispatch(login(userName, token))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);