import React from 'react';
import data from './data.json';
import Project from '../../components/project';
const index = () => {
    return (
    <div style={{backgroundColor: '#E2E3E7'}}>
            <Project data={data} title={'Projects'} all={true}/>
        </div>
    )
}

export default index;
