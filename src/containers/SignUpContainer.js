import { connect } from 'react-redux';
import { signUp } from '../actions/signActions';
import { pageLogin } from '../actions/pageActions';
import SignUp from '../components/SignUp';

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  pageLogin: () => dispatch(pageLogin()),
  signUp: (userName, token) => dispatch(signUp(userName, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);