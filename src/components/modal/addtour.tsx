import React,{useState} from 'react';
import { Modal } from 'antd';
import { ITourItem } from '../../@types/tour.type';
import { DatePicker } from 'antd';
import moment from 'moment';

interface IProps {
    isShowModal: boolean;
    addModalToggle:()=>void;
    handleConfirmAddTour:(tour: ITourItem, file: File)=>void;
}

const initState={
    tourName: '',
    image: '',
    prince:'',
    description: '',
    location:'',
    startDate:'',
    endDate:''
}
const AddTourModal = React.memo((props: IProps) => {
    const [file , setFile]= useState({} as File);
    const [state , setState]= useState(initState)
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
        props.handleConfirmAddTour({
            id: '_' + Math.random().toString(36).substr(2, 9),
            tourName:state.tourName,
            image:state.image,
            prince:state.prince,
            description: state.description,
            location: state.location,
            startDate: state.startDate,
            endDate:state.endDate
        },file)
        setState(initState)
    }

    const onChangeStartDate =(e: any)=>{
        setState({
            ...state,
            startDate: moment(e).format('YYYY/MM/DD')
        })
    }

    const onChangeEndDate =(e: any)=>{
        setState({
            ...state,
            endDate: moment(e).format('YYYY/MM/DD')
        })
    }

    return (
        <Modal
            visible={props.isShowModal}
            onOk={handleOK}
            onCancel={props.addModalToggle}
        >
            <div className="addmodal">
                <p className="mb-0">Add new tour </p>
                <input placeholder='Enter tour name' onChange={handleChangeText} type="text" value={state.tourName} name='tourName'/>
                <input onChange={handleChangeImage} type="file" id="img" name="img" accept="image/*" />
                <img className='image-preview' src={state.image} alt=""/>
                <input placeholder='Enter location' onChange={handleChangeText} type="text" value={state.location} name='location'/>
                <input placeholder='Enter price' onChange={handleChangeText} type="text" value={state.prince} name='prince'/>
                <DatePicker placeholder='Select start date' onChange={onChangeStartDate} />
                <DatePicker placeholder='Select end date' onChange={onChangeEndDate} />
                <textarea rows={5} placeholder='Enter description' onChange={handleChangeText} value={state.description} name='description'/>
            </div>
        </Modal>
    );
})

export default AddTourModal;