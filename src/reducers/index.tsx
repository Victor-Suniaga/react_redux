import { combineReducers } from 'redux';
import auth from './Authentication.reducer'
const rootReducers = combineReducers({
    auth
});

export default rootReducers;