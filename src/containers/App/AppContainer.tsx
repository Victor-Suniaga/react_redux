import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import App from './components/App'
import { ReduxStore } from '../../constants/interface';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}

const mapStateToProps = (state: ReduxStore) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)