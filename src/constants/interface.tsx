export interface ReduxStore {
    auth: Auth_State
}

export interface Auth_State {
    sessionTime: Number,
    token: String,
    username: String,
    signInTime: Date|null
}

export interface LoginParams {
    userName: String,
    password: String,
    passwordConf: String
}