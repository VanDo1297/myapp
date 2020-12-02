import firebase from 'firebase';
import {UserAccount } from './@types/servers/auth.types';
export const mapUser=(user:firebase.User): UserAccount=>{
    let userAccount = {} as UserAccount;
    userAccount={
        accountId: user.uid,
        displayName:user.displayName ,
        emailAddress: user.email ,
        avatarUrl: user.photoURL ,
    }
    return userAccount;
}