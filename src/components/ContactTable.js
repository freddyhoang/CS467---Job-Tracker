import React from 'react';
import ContactRow from './ContactRow';
import { Container, Table } from 'react-bootstrap';

const ContactTable = ({table}) => {
    const rows = ['Email', 'Name', 'Company', 'Position', 'Phone'];

   return (
       <Container>
            <div>
                <Table id='tableSummary' bordered='true'>
                    <tr>
                        {rows.map( (r) => 
                        (
                            <th>{r}</th>
                        ))}
                        <th></th>
                    </tr>
                    {table.map(row => {
                        return (
                            <ContactRow row={row} />
                        )
                    })}
                </Table>

            </div>
       </Container>
       
   );
};

export default ContactTable;