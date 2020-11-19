import React from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import {tours, blogs} from '../../helpers';

interface IProps extends RouteComponentProps<{}>{}

function Landing(props: IProps){
    return (
        <Presentational 
            tours={tours}
            blogs={blogs}
        />
    )
}
export default Landing;