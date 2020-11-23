import axiosInstance from "./axios";
import {ILogin} from '../@types/auth.type';
export const login =({username, password}: ILogin)=>{
    return axiosInstance().get('/login', {
        params:{
            username, password
        }
    })
}