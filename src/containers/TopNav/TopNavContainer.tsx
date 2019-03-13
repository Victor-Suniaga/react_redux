import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import TopNav from './components/TopNav'
import { ReduxStore } from '../../constants/types'

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

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)