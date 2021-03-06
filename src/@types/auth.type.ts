import { UserAccount } from "./servers/auth.types";

export interface IAuth{
    user: UserAccount,
    token :  string|null,
    loading: boolean,
    errorMessage: any
}

export interface ILogin{
    email: string,
    password: string
}

export interface IRegister{
    email: string,
    password: string,
    verifypassword: string
}