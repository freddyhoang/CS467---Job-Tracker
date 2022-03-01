import React from 'react';
import JobRow from './JobRow';
import { Container, Table } from 'react-bootstrap';

const JobTable = ({table}) => {
    let rows = ['Company', 'Job', 'Application Date', 'Interview Date',
    'Salary', 'Address', 'Link', 'Skills', 'Status'];

   return (
       <Container>
            <div>
                <Table id='tableSummary' bordered hover size="sm">
                    <tr>
                        {rows.map((r) => 
                        (
                            <th>{r}</th>
                        ))}
                        <th></th>
                    </tr>
                    {table.map((row) => {
                        return (
                            <JobRow row={row}/>
                        )
                    })}
                </Table>

            </div>
       </Container>
       
   );
};

export default JobTable;