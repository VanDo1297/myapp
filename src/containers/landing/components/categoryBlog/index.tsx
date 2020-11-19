import React from 'react';
import { BlogItem } from '../../../../@types/blog.type';
import moment from 'moment';
interface IProps{
    blogs: BlogItem[]
}
const CategoryBlog = React.memo((props:IProps)=>{
    const renderBlogItem =(blog: BlogItem)=>{
        return (
            <div key={blog.id} className='col-lg-4 col-md-6 col-sm-12 blog-item'>
                <img src={blog.image} alt=""/>
                <p className='mb-2 mt-2 blog-name'>{blog.title}</p>
                <p className='mb-2 mt-2'><span className='blog-date'>{moment(blog.date).format('LL')}  by </span><span className='blog-own'>{blog.own}</span></p>
                <p className='mb-2 mt-2 blog-content'>{blog.content}</p>
            </div>
        )
    }
    return (
        <div className="categorys mt-5">
            <div className="blog-title">
                <p className="name mb-0">Blog</p>
            </div>
            <div className='row w-100 ' >
                {
                    props.blogs.map(blog => renderBlogItem(blog))
                }
            </div>
        </div>
    )
})

export default CategoryBlog;