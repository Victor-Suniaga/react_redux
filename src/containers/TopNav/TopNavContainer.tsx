import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import TopNav from './components/TopNav'
import { ReduxStore } from '../../constants/interface';
import { appSignIn } from '../../actions/Authentication.actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({
      appSignIn
    }, dispatch),
  }
}

const mapStateToProps = (state: ReduxStore) => {
  return {
    user: state.auth.username,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)