import React from 'react';
import './index.scss';
interface IProps {
    isShowLoading: boolean;
}
const Loading = React.memo((props: IProps)=>{
    return (
        <div className='loading'>
            { props.isShowLoading && <div className='d-flex flex-column align-items-center'>
                <div className="lds-default">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div> 
                <p className="text-md text-bold text-white">Loading ...</p> 
            </div>}
        </div>
    )
});

export default Loading;