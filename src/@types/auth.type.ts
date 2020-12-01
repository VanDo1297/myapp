import { UserAccount } from "./servers/auth.types";

export interface IAuth{
    user: UserAccount,
    token :  string|null,
    loading: boolean,
    errorMessage: string|null
}

export interface ILogin{
    username: string,
    password: string
}