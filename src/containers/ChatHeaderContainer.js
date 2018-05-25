import { connect } from 'react-redux';
import { logOut } from '../actions/signActions';
import { pageLogin } from '../actions/pageActions';
import ChatHeader from '../components/ChatHeader';

const mapStateToProps = state => ({
    sign: state.sign,
    currentChat: state.currentChat
})

const mapDispatchToProps = (dispatch) => ({
    pageLogin: () => dispatch(pageLogin()),
    logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHeader);