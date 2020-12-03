import * as consBlog from '../../constants/blog';
import { addMyBlog, getMyBlog } from '../../services/blogService';
import {IBlogItem} from '../../@types/blog.type';

export const addBlog=(userId: string, blogs: IBlogItem, file: File)=>(dispatch: any)=>{
    dispatch({
        type: consBlog.ADD_BLOG
    })
    try {
        addMyBlog(userId, blogs, file).then(res=>{
            dispatch({
                type: consBlog.ADD_BLOG_SUCCESS,
                payload: {
                    blogs: res
                }
            })
            getBlog(userId)
        })
    } catch (error) {
        dispatch({ type: consBlog.ADD_BLOG_FAILURE, error: error.message });
    }
}

export const getBlog =(userId: string)=>async (dispatch: any)=>{
    dispatch({
        type: consBlog.GET_BLOG
    })
    try {
        let blogs = [] as any[];
        await getMyBlog(userId).then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                console.log(doc.data());
                blogs.push(doc.data())
            })
        })
        dispatch({
            type: consBlog.GET_BLOG_SUCCESS,
            payload: {
                blogs: blogs
            }
        })
    } catch (error) {
        dispatch({ type: consBlog.GET_BLOG_FAILURE, error: error.message });
    }
}