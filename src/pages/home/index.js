import React,{Fragment} from 'react';
import Header from '../../components/header';
import Project from '../../components/project';
import Testimony from '../../components/testimony';
import Contact from '../../components/contact';

const index = () => {
    return (
        <Fragment>
            <Header/>
            <Project/>
            <Testimony/>
            <Contact/>
        </Fragment>
    )
}

export default index;