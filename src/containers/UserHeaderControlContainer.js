import { connect } from 'react-redux';
import { logOut } from '../actions/signActions';
import { pageLogin } from '../actions/pageActions';
import UserHeaderControl from '../components/UserHeaderControl';

const mapStateToProps = state => ({
  sign: state.sign
})

const mapDispatchToProps = (dispatch) => ({
  pageLogin: () => dispatch(pageLogin()),
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeaderControl);