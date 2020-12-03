import React,{useState} from 'react';
import { Modal } from 'antd';
import { IBlogItem } from '../../@types/blog.type';

interface IProps {
    isShowModal: boolean;
    addModalToggle:()=>void;
    handleConfirmAddBlog:(blogs: IBlogItem, file: File)=>void;
}

const AddBlogModal = React.memo((props: IProps) => {
    const [file , setFile]= useState({} as File);
    const [state , setState]= useState({
        title: '',
        image: '',
        own:'',
        content: ''
    })
    const handleChangeImage=(e: any)=>{
        setState({
            ...state,
            image: URL.createObjectURL(e.target.files[0])
        })
        setFile(e.target.files[0])
    }

    const handleChangeText=(e: any)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOK=()=>{
        props.handleConfirmAddBlog({
            title:state.title,
            image:state.image,
            content:state.content,
            own: state.own,
            date: new Date().toISOString()
        },file)
    }

    return (
        <Modal
            visible={props.isShowModal}
            onOk={handleOK}
            onCancel={props.addModalToggle}
        >
            <div className="addmodal">
                <p className="mb-0"> New blogs </p>
                <input placeholder='Enter blog title' onChange={handleChangeText} type="text" value={state.title} name='title'/>
                <input onChange={handleChangeImage} type="file" id="img" name="img" accept="image/*" />
                <img className='image-preview' src={state.image} alt=""/>
                <input placeholder='Enter your name' onChange={handleChangeText} type="text" value={state.own} name='own'/>
                <input placeholder='Enter content' onChange={handleChangeText} type="text" value={state.content} name='content'/>
            </div>
        </Modal>
    );
})

export default AddBlogModal;