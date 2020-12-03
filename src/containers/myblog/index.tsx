import React,{useContext, useEffect, useState ,Suspense} from 'react';
import { GlobalContext, IState} from '../../context/provider';
import {addBlog, getBlog} from '../../context/blog/actions';
import AddModal from '../../components/modal/addblog';
import {IBlogItem} from '../../@types/blog.type';
import {PlusCircleOutlined} from '@ant-design/icons';
import Loading from '../../components/loading';

const BlogItem = React.lazy(()=> import('../../components/blog/blogItem'));

const MyBlog = (props: any)=>{

    const {blogDispatch:dispatch,  blogState, authState} = useContext(GlobalContext) as IState;
    const [blogs, setBlogs]= useState([] as IBlogItem[])
    const [isShowAddModal, setShowAddModal]= useState(false);
    const [isLoading, setLoading]= useState(false);

    useEffect(()=>{
        getBlog(authState.user.accountId)(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        setBlogs(blogState.blogs);
    },[blogState.blogs])

    useEffect(()=>{
        setLoading(blogState.loading)
    },[blogState.loading])

    const addModalToggle =()=>{
        setShowAddModal(!isShowAddModal)
    }

    const handleConfirmAddBlog =(blogs: IBlogItem, file: File)=>{
        addBlog(authState.user.accountId, blogs, file)(dispatch);
        setShowAddModal(false);
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
                            return <Suspense fallback={<div>Loading...</div>}>
                                    <BlogItem blog={blog} index={index}/>
                                </Suspense>
                        })
                    }
                </div>
            </div>
            <Loading isShowLoading={isLoading} />
            <AddModal 
                handleConfirmAddBlog={handleConfirmAddBlog}
                addModalToggle={addModalToggle}
                isShowModal={isShowAddModal}
            />
        </>
    )
}

export default MyBlog;