import * as consBlog from '../../constants/blog';


export const addBlog=()=>(dispatch: any)=>{
    dispatch({
        type: consBlog.ADD_BLOG
    })
}

