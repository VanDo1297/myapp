import React from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';

interface IProps extends RouteComponentProps<{}>{}

function Home(props: IProps){
    return (
        <Presentational 
        />
    )
}
export default Home;