import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';

interface IProps{
    count: number
}

const ShopIcon = React.memo((props: IProps)=>{

    const {count}= props

    return (
        <div className='shop-icon p-relative'>
            <div className='shop-icon__bg'></div>
            <FaShoppingCart className='shop-icon__icon' />
            <p className='shop-icon__count mb-0'>{count}</p>
        </div>
    )
})

export default ShopIcon;