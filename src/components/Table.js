import React from 'react';
import Row from './Row';

const Table = ({table}) => {
    console.log(table);
    // tabledata.foreach(i => console.log(i));
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