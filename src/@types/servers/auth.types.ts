export interface DataAccessTokenResponse{
    access_token: string,
    expires_in: number,
    id_token: string,
    scope:string,
    token_type: string,
}

export interface AccessTokenResponse{
    data : DataAccessTokenResponse
}

export interface UserAccount{
    accountId: string,
    displayName:string,
    emailAddress: string,
    avatarUrl: string,
}