import React from 'react';
import Row from './Row';

const Table = ({table}) => {
   return (
       <div>
           {table.map(row => {
               return (
                   <Row row={row} />
               )
           })}
       </div>
   );
};
 
export default Table;