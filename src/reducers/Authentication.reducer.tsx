import { SIGN_IN, SIGN_OUT } from '../constants/actions'
import { AuthAction } from '../constants/types';
import { Auth_State } from '../constants/interface';


const INITIAL_STATE: Auth_State = {
    sessionTime: 0,
    token: '',
    signInTime: null,
    username: ''
}

export default function (state = INITIAL_STATE, action: AuthAction): Auth_State {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state
    }
}