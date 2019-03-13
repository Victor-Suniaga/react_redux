import { LoginParams } from "./interface";

export type AuthType = 'SIGN_OUT' | 'SIGN_IN'

export type AuthAction = { type: AuthType; payload?: LoginParams }