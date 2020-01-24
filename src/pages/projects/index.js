import React, {Fragment} from 'react';
import data from './data.json';
import Project from '../../components/project';
const index = () => {
    return (
        <Fragment>
            <Project data={data} title={'Projects'} all={true}/>
        </Fragment>
    )
}

export default index;
