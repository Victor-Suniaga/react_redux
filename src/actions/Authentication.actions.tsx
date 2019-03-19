import { Dispatch } from "redux";
import { SignInService } from "../services/api-interaction.service";
import { SIGN_IN, ERROR_SET, SIGN_OUT, SESSION_TIMEOUT } from "../constants/actions";
import { timer } from 'rxjs';

export const appSignIn = () => {
    return (dispatch: Dispatch) => {
        SignInService().then( (result : any) => {
            const loggedInData = {
                ...result.data,
                signInTime: new Date()
            }
            timer(result.data.sessionTime).subscribe( _ => { 
                dispatch({
                    type: SESSION_TIMEOUT,
                    payload: {
                        message: 'Your session time has expired, please to continue use sign in your credentials.'
                    },
                })
            })
            dispatch({
                type: SIGN_IN,
                payload: loggedInData,
            })
          }).catch((error: any) => {
            dispatch({
                type: ERROR_SET,
                payload: {
                    message: 'There have been a problem during the sign in. Please try again later.'
                },
            })
        })
    }
}