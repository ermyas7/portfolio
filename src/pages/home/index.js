import React,{Fragment} from 'react';
import Header from '../../components/header';
import Project from '../../components/project';
import Testimony from '../../components/testimony';

const index = () => {
    return (
        <Fragment>
            <Header/>
            <Project/>
            <Testimony/>
        </Fragment>
    )
}

export default index;