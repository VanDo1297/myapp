import React from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';

interface IProps extends RouteComponentProps<{}>{}

function Landing(props: IProps){
    return (
        <Presentational />
    )
}
export default Landing;