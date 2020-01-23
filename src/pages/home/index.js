import React,{Fragment} from 'react';
import Header from '../../components/header';
import Project from '../../components/project';
import Testimony from '../../components/testimony';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

const index = () => {
    return (
        <Fragment>
            <Header/>
            <Project/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </Fragment>
    )
}

export default index;