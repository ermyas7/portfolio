import React from 'react';
import Helmet from 'react-helmet';

import data from './data.json';
import Project from '../../components/project';
const index = () => {
    return (
    <div style={{backgroundColor: '#E2E3E7'}}>
        <Helmet>
            <title>Ermyas Fekadu | Full Stack Developer | Ermyas Fekadu projects | Ethiopian Developer</title>
            <meta
                name="description"
                content="Ermyas Fekadu previous projects front-end, back-end and full-stack"
            />
        </Helmet>
            <Project data={data} title={'Projects'} all={true}/>
        </div>
    )
}

export default index;
