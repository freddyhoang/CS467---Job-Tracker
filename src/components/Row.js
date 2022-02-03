import React from 'react';

const Row = ({row}) => {
   return (
        <tr>
            <React.Fragment>
                <th>{row.company}</th>
                <th>{row.job_link}</th>
                <th>{row.job_title}</th>
            </React.Fragment>
        </tr>


   );
};
 
export default Row;