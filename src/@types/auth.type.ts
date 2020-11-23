export interface IAuth{
    user: any,
    token :  string|null,
    loading: boolean,
    errorMessage: string|null
}

export interface ILogin{
    username: string,
    password: string
}