import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import App from './component/App'
import { AppState } from '../../constants/types'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({
    }, dispatch),
  }
}

const mapStateToProps = (state: AppState) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)