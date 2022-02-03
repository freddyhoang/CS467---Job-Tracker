import React from 'react';
import Row from './Row';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';

const TableComponent = ({table}) => {
    console.log(table);
    // tabledata.foreach(i => console.log(i));
   return (
       <Container>
            <div>
                <Table bordered = 'true'>
                    <tr>
                        <th>Company</th>
                        <th>Link</th>
                        <th>Job</th>
                    </tr>
                    {table.map(row => {
                        return (
                            <Row row={row} />
                        )
                    })}
                </Table>

            </div>
       </Container>
       
   );
};
 
export default TableComponent;