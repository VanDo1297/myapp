import React,{useContext, useEffect, useState} from 'react';
import { GlobalContext, IAuthValue, IBlogValue } from '../../context/provider';
import {addBlog, getBlog} from '../../context/blog/actions';
import AddModal from '../../components/modal/addblog';
import BlogItem from '../../components/blog/blogItem';
import {IBlogItem} from '../../@types/blog.type';
import {PlusCircleOutlined} from '@ant-design/icons';

const MyBlog = React.memo((props: any)=>{

    const {blogDispatch:dispatch,  blogState, authState} = useContext(GlobalContext) as IBlogValue & IAuthValue;
    const [blogs, setBlogs]= useState([] as IBlogItem[])
    const [isShowAddModal, setShowAddModal]= useState(false);

    useEffect(()=>{
        getBlog(authState.user.accountId)(dispatch);
    })

    useEffect(()=>{
        setBlogs(blogState.blogs);
    },[blogState])

    const addModalToggle =()=>{
        setShowAddModal(!isShowAddModal)
    }

    const handleConfirmAddBlog =(blogs: IBlogItem, file: File)=>{
        addBlog(authState.user.accountId, blogs, file)(dispatch);
    }
    return (
        <>
            <div className="myblog">
                <div className="adding">
                    <button onClick={addModalToggle} className='button-add bg-success'><PlusCircleOutlined /></button>
                </div>
                <div className="blogs row">
                    {
                        blogs && blogs.length>0 &&  blogs.map((blog: IBlogItem, index: number) =>{
                            return <BlogItem blog={blog} index={index}/>
                        })
                    }
                </div>
            </div>
            <AddModal 
                handleConfirmAddBlog={handleConfirmAddBlog}
                addModalToggle={addModalToggle}
                isShowModal={isShowAddModal}
            />
        </>
    )
})

export default MyBlog;