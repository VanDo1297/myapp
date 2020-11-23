export interface Provider{
    reducer: any, 
    initialState: {}, 
    children: any
}

export interface IAuth{

}

export interface IReducer{

}

export interface IAction {
    type: string,
    payload: any
}