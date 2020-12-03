import {auth, provider} from './firebase';


export const logoutAuth=()=>{
    return auth.signOut()
}

export const loginWithGoogle=()=>{
    return auth.signInWithPopup(provider);
}

export const loginWithEmaillAndPassword=(email:string, password: string)=>{
    return auth.signInWithEmailAndPassword(email, password)
}


export const registerWithEmailAndPassword=(email:string, password:string)=>{
    return auth.createUserWithEmailAndPassword(email, password)
}
