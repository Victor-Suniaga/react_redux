export interface ReduxStore {
}

export interface Auth_State {
    sessionTime: Number,
    token: String,
    signInTime: Date|null
}

export interface LoginParams {
    userName: String,
    password: String,
    passwordConf: String
}