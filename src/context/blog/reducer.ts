import * as blogConts from '../../constants/blog';
import {IBlog} from '../../@types/blog.type';
export const BlogReducer = (initialState:IBlog, action: any) => {
  switch (action.type) {
    case blogConts.ADD_BLOG:
    case blogConts.GET_BLOG:
      return {
        ...initialState,
        loading: true
      }

    case blogConts.ADD_BLOG_FAILURE:
    case blogConts.GET_BLOG_FAILURE:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      }
    case blogConts.ADD_BLOG_SUCCESS:
      return {
        ...initialState,
        loading: false,
      }
    case blogConts.GET_BLOG_SUCCESS:
      return {
        ...initialState,
        loading: false,
        blogs: action.payload.blogs
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
