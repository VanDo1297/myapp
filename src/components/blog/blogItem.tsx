import React from 'react';
import {IBlogItem} from '../../@types/blog.type';
import moment from 'moment';
import {PushpinOutlined} from '@ant-design/icons';

interface IProps {
    blog: IBlogItem,
    index: number
}
const BlogItem = React.memo((props: IProps)=>{
    const { blog, index }= props;
    return(
        <div key={index} className='col-12 col-md-6 blog-item' data-aos="fade-up" data-aos-duration='1500'>
            <div className="b-image">
                <img src={blog.image} alt=""/>
                <PushpinOutlined />
            </div>
            <div className="b-contact">
                <p className='mb-0 b-name'>{blog.title}</p>
                <p className='mb-0 mt-4'><span className='b-date'>{moment(blog.date).format('LL')}  by </span><span className='b-own'>{blog.own}</span></p>
                <p className='mb-0 b-content mt-4 line-clamp-5'>{blog.content}</p>
            </div>
        </div>
    )
})
export default BlogItem;