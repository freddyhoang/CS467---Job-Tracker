import React from 'react';
 
const Row = ({row}) => {
   return (
       <React.Fragment>
            <div>{row.company}</div>
           <div>{row.job_link}</div>
           <div>{row.job_title}</div>
       </React.Fragment>

   );
};
 
export default Row;