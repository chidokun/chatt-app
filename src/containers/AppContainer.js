import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
    page: state.page
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);