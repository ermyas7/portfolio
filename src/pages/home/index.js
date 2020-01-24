import React,{Fragment} from 'react';
import Header from '../../components/header';
import Project from '../../components/project';
import Testimony from '../../components/testimony';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import data from '../projects/data.json';

const index = () => {
    const val = data.slice(3);
    return (
        <Fragment>
            <Header/>
            <Project data={val} title="Latest work" all={false}/>
            <Testimony/>
            <Contact/>
        </Fragment>
    )
}

export default index;